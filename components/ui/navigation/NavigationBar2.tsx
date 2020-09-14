import React, { useRef, useEffect, useState } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import NavButton2 from '../buttons/NavButton2';
import { menuItems } from '../../../data/components/ui/navigation/navigationbar2-data';

export interface NavigationBar2Props {};
 
const NavigationBar2: React.SFC<NavigationBar2Props> = () => {
    const [state, updateState] = useState({ xCoord: 0, width: 0 });
    const widthAnim = useRef(new Animated.Value(0)).current;
    const barAnim = useRef(new Animated.ValueXY()).current;

    const animate = (layout: any): void => {
        const { xCoord, width } = layout;

        Animated.parallel([
            Animated.spring(barAnim, {
                useNativeDriver: false,
                toValue: {
                    x: xCoord,
                    y: 0
                },
                speed: 20,
            }),
            Animated.timing(widthAnim, {
                useNativeDriver: false,
                toValue: width - 44,
                duration: 250
            })
        ]).start()
    };

    useEffect(() => {
        animate(state)
    },[state])

    return ( 
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Animated.ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={styles.scrollView}
                    contentContainerStyle={styles.contentContainerStyle}
                >
                    <View>
                        <View style={styles.scrollView}>
                             {menuItems.map(({index, title}) => <NavButton2 key={index} index={index} text={title} updater={updateState} />)}
                        </View>
                        <Animated.View style={[styles.marker, barAnim.getLayout(), {width: widthAnim}]} />
                    </View>
                </Animated.ScrollView>
            </View>
        </View> 
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 0.1,
        justifyContent: 'center',
    },
    innerContainer: {
        paddingVertical: 5,
    },
    contentContainerStyle: {
        paddingLeft: 20 
    },
    scrollView: {
        flexDirection: 'row'
    },
    marker: {
        height: 2,
        backgroundColor: 'black',
        marginHorizontal: 22,
    }
});
 
export default NavigationBar2;