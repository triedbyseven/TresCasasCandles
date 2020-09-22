import React, { useRef, useState } from 'react';
import { Animated, StyleSheet, View } from "react-native";
import NavButton1 from '../buttons/NavButton1';
import { menuItems } from '../../../data/components/ui/navigation/navigationbar1-data';

export interface NavigationBar1Props {
    navigation: any;
};
 
const NavigationBar1: React.FC<NavigationBar1Props> = ({ navigation }) => {
    const [state, updateState] = useState({ xCoord: 0, width: 0, height: 0, index: 0 });
    const [isAnimating, updateIsAnimating] = useState(false);

    const selectorAnim = useRef(new Animated.ValueXY()).current;
    const widthAnim = useRef(new Animated.Value(0)).current;
    const ballWidthAnim = useRef(new Animated.Value(10)).current;
    const ballHeightAnim = useRef(new Animated.Value(10)).current;


    const onPressMenuItem = (state: any, route: string) => {
        if(isAnimating) return;
        navigation.navigate(route);
        updateState(state);
    };

    const animate = (layout: any): void => {
        const { xCoord, width, height } = layout;
        updateIsAnimating(true);
        shrinkBallAnimation(xCoord, width, height);
    };

    const shrinkBallAnimation = (xCoord: number, width: number, height: number) => {
        Animated.parallel([
            Animated.timing(ballWidthAnim, {
                useNativeDriver: false,
                toValue: 10,
                duration: 250
            }),
            Animated.timing(ballHeightAnim, {
                useNativeDriver: false,
                toValue: 10,
                duration: 250
            })
        ]).start(() => moveBallAnimation(xCoord, width, height));
    };

    const moveBallAnimation = (xCoord: number, width: number, height: number) => {
        Animated.parallel([
            Animated.spring(selectorAnim, {
                useNativeDriver: false,
                toValue: {
                    x: xCoord,
                    y: 0
                },
                speed: 20,
            }),
            Animated.timing(widthAnim, {
                useNativeDriver: false,
                toValue: width,
                duration: 250
            })
        ]).start(expandBallAnimation(width, height));
    };

    const expandBallAnimation = (width: number, height: number): any => {
        Animated.parallel([
            Animated.timing(ballWidthAnim, {
                useNativeDriver: false,
                toValue: width,
                duration: 250
            }),
            Animated.timing(ballHeightAnim, {
                useNativeDriver: false,
                toValue: height,
                duration: 250
            })
        ]).start(() => updateIsAnimating(false));
    };

    return ( 
        <View style={styles.container}>
            <View style={{ justifyContent: 'center' }}>
                <View style={styles.innerContainer}>
                    {menuItems.map(({index, title, icon, route}) => <NavButton1 
                            key={index} 
                            text={title} 
                            icon={icon} 
                            index={index}
                            route={route}
                            onPressMenuItem={onPressMenuItem}
                            currentMenuIndex={state.index}
                            updater={updateState}
                            animate={animate}
                        />
                    )}
                </View>
                <Animated.View style={[styles.markerContainer, { width: widthAnim }, {
                    transform: [
                        { translateX: selectorAnim.x },
                        { translateY: selectorAnim.y }
                    ]
                }]}>
                    <Animated.View style={[styles.marker, { width: ballWidthAnim, height: ballHeightAnim }]} />
                </Animated.View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: -38,
        backgroundColor: '#fff',
        paddingTop: 22,
        paddingBottom: 6,
        paddingHorizontal: 20,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    innerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        alignContent: 'stretch'
    },
    markerContainer: {
        position: 'absolute',
        zIndex: -1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },
    marker: { 
        backgroundColor: '#EDF1F7',
        borderRadius: 30,
    }
});
 
export default NavigationBar1;