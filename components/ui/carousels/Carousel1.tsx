import React from 'react';
import { Platform, Dimensions, StyleSheet, View, Animated } from "react-native";
import Slide1 from './slides/Slide1';

export interface Carousel1Props {
    items: Slide[]
}

interface Slide {
    id: number;
    name: string;
}

const SCREEN_WIDTH = (Dimensions.get("window").width);
 
const Carousel1: React.SFC<Carousel1Props> = ({ items }) => {
    const xOffset = new Animated.Value(0);

    const onScrollArgMapping = [{
        nativeEvent: {
            contentOffset: {
                x: xOffset
            },
        }
    }];
    
    const onScrollConfig = {
        useNativeDriver: true,
        listener: (event: any) => {
            const offsetY = event.nativeEvent.contentOffset.y;
        },
    };

    const onScrollEvent = Animated.event(onScrollArgMapping, onScrollConfig);

    const transitionAnimation = (index: number) => {
        return {
            transform: [
                { perspective: 800 }
            ]
        };
    };

    return ( 
        <View style={styles.container}>
            <Animated.ScrollView
                scrollEventThrottle={16}
                showsHorizontalScrollIndicator={false}
                onScroll={onScrollEvent}
                style={styles.scrollView}
                horizontal={true}
                decelerationRate={Platform.OS === 'ios' ? 'fast' : 'normal'}
                snapToInterval={SCREEN_WIDTH - 110}
                snapToAlignment="start"
                contentContainerStyle={{ paddingLeft: 20 }}
            >
                {items.map((item, index) => (
                    <Animated.View key={index} style={[styles.slide, { zIndex: item.id }, transitionAnimation(item.id)]}>
                        <Slide1 id={item.id} name={item.name} />
                    </Animated.View>
                ))}
            </Animated.ScrollView>
        </View>
     );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    scrollView: {
        width: "100%",
        flexDirection: "row",
        paddingLeft: 0
    },
    slide: {
        position: "relative",
        width: SCREEN_WIDTH - 135,
        height: 402,
        backgroundColor: '#EDDEE1',
        borderRadius: 16,
        marginLeft: 10,
        marginRight: 15
    }
});
 
export default Carousel1;