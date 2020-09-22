import React, { useRef, useState, useEffect } from 'react';
import { Animated, StyleSheet, View, Button } from 'react-native';
import NavButton2 from '../buttons/NavButton2';
import { menuItems } from '../../../data/components/ui/navigation/navigationbar2-data';

export interface NavigationBar2Props {};
 
const NavigationBar2: React.SFC<NavigationBar2Props> = () => {
    const [state, updateState] = useState({ xCoord: 0, width: 0, index: 0 });
    const widthAnim = useRef(new Animated.Value(0)).current;
    const barAnim = useRef(new Animated.ValueXY()).current;

    const onPressMenuItem = (state: any) => {
        updateState(state);
    };

    const animate = (layout: any): void => {
        const { xCoord, width } = layout;

        Animated.parallel([
            Animated.spring(barAnim, {
                useNativeDriver: false,
                toValue: {
                    x: xCoord + 22,
                    y: 0
                },
                speed: 20,
            }),
            Animated.timing(widthAnim, {
                useNativeDriver: false,
                toValue: width - 44,
                duration: 250
            })
        ]).start();
    };

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
                             {menuItems.map(({index, title}) => <NavButton2 
                                    key={index} 
                                    index={index} 
                                    currentMenuIndex={state.index} 
                                    text={title} 
                                    onPressMenuItem={onPressMenuItem} 
                                    animate={animate} 
                                />
                             )}
                        </View>
                        <Animated.View style={[styles.marker, { width: widthAnim }, {
                            transform: [
                                { translateX: barAnim.x },
                                { translateY: barAnim.y }
                            ]
                        }]} />
                    </View>
                </Animated.ScrollView>
            </View>
        </View> 
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    }
});
 
export default NavigationBar2;