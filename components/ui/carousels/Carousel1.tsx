import React from 'react';
import { Platform, Dimensions, StyleSheet, View, Animated } from "react-native";
import Slide1 from './slides/Slide1';
import Heading1 from '../headings/Heading1';
import { BoxShadow } from 'react-native-shadow';
import { useColorAnimations, useNavigationAnimations } from '../../../animations';

export interface Carousel1Props {
    items: Slide[]
}

interface Slide {
    id: number;
    name: string;
}

const SCREEN_WIDTH = (Dimensions.get("window").width);
 
const Carousel1: React.SFC<Carousel1Props> = ({ items }) => {
    const { animateColor } = useColorAnimations();
    const { animateMenu } = useNavigationAnimations();
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

    const shadowOpt = {
        width: SCREEN_WIDTH - 135,
        height: 48,
        color: "#000",
        border: 5,
        radius: 16,
        opacity: 0.03,
        x: 0,
        y: 5,
        style: { position: 'absolute', bottom: 0, left: 0 }
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
            <Heading1 text="Featured" />
            <Animated.ScrollView
                scrollEventThrottle={16}
                showsHorizontalScrollIndicator={false}
                onScroll={onScrollEvent}
                horizontal={true}
                decelerationRate={Platform.OS === 'ios' ? 'fast' : 'normal'}
                snapToInterval={SCREEN_WIDTH - 110}
                snapToAlignment="start"
                contentContainerStyle={{ paddingBottom: 40, paddingLeft: 20 }}
            >
                {items.map((item, index) => (
                    <Animated.View key={index} style={[styles.slide, { zIndex: item.id }, transitionAnimation(item.id)]}>
                        <BoxShadow setting={shadowOpt} />
                        <View style={styles.slideContainer}>
                            <Slide1 id={item.id} name={item.name} setAnimate={animateColor} animateMenu={animateMenu} />
                        </View>
                    </Animated.View>
                ))}
            </Animated.ScrollView>
        </View>
     );
}

const styles = StyleSheet.create({
    container: {
        flex: 8,
        width: '100%',
        height: '100%',
    },
    slideContainer: {
        width: '100%', 
        height: '100%', 
        backgroundColor: '#EEDEE1', 
        borderRadius: 16
    },
    slide: {
        position: "relative",
        width: SCREEN_WIDTH - 135,
        height: '100%',
        backgroundColor: '#EDDEE1',
        borderRadius: 16,
        marginLeft: 10,
        marginRight: 15,
    }
});
 
export default Carousel1;