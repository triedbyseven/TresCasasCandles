import React, { useRef, useState, useEffect } from 'react';
import { Animated, StyleSheet, View, Text } from "react-native";
import NavButton1 from '../buttons/NavButton1';
import { menuItems } from '../../../data/components/ui/navigation/navigationbar1-data';
import { useRoute } from '@react-navigation/native';

export interface NavigationBar1Props {
    navigation: any;
};

// let toggle: boolean = true;
 
const NavigationBar1: React.FC<NavigationBar1Props> = ({ navigation }) => {
    const [state, updateState] = useState({ xCoord: 0, width: 0, height: 0, index: 0 });
    const [isAnimating, updateIsAnimating] = useState(false);

    const selectorAnim = useRef(new Animated.ValueXY()).current;
    const widthAnim = useRef(new Animated.Value(0)).current;
    const ballWidthAnim = useRef(new Animated.Value(10)).current;
    const ballHeightAnim = useRef(new Animated.Value(10)).current;

    const menuHeight = useRef(new Animated.Value(73)).current;
    const menuFade = useRef(new Animated.Value(1)).current;
    const itemDetailOpacity = useRef(new Animated.Value(0)).current;
    const itemDetailMargin = useRef(new Animated.ValueXY()).current;


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

    const toggleMenuAnimation = (isToggled?: boolean) => {
        const toggle = isToggled;

        Animated.parallel([
            Animated.timing(menuHeight, {
                useNativeDriver: false,
                toValue: !toggle ? 371 : 73,
                duration: 250
            }),
            Animated.timing(menuFade, {
                useNativeDriver: false,
                toValue: toggle ? 1 : 0,
                duration: 250
            }),
            Animated.timing(itemDetailOpacity, {
                useNativeDriver: true,
                toValue: toggle ? 0 : 1,
                duration: 250
            }),
            Animated.timing(itemDetailMargin, {
                useNativeDriver: true,
                toValue: toggle ? { x: 0, y: 0 } : { x: 0, y: -73 },
                duration: 250
            })
        ]).start();
    };

    const route = useRoute();

    useEffect(() => {
        // console.log(route?.state?.routes);
        if (route?.state) {
            if(route?.state?.routes[1]?.name === 'ItemDetail') return toggleMenuAnimation(false);

            if (route?.state?.routes[0].name === 'Home' && route?.state?.routes.length === 1) return toggleMenuAnimation(true);
        }
    },[route]);

    return ( 
        <Animated.View style={[styles.container, { height: menuHeight }]}>
            <Animated.View style={[styles.contentJustifyContainer, { opacity: menuFade }]}>
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
            </Animated.View>
            <Animated.View style={[
                { opacity: itemDetailOpacity, padding: 28 }, {
                transform: [
                    { translateX: itemDetailMargin.x },
                    { translateY: itemDetailMargin.y }
                ]
            }]}>
                <Text style={{ fontSize: 40, paddingRight: 40, color: '#222B45' }}>Oversized cotton coat</Text>
                <Text style={{ fontSize: 18, color: '#DB2C66', marginVertical: 10, }}>US $149.89</Text>
                <Text style={{ fontSize: 15, color: '#222B45', marginTop: 2.5, lineHeight: 24 }}>Oversized coat with lapel collar and long sleeves. Front double breasted button closure.</Text>
                <Text style={{ fontSize: 13, color: '#9AA5BD', marginVertical: 10, }}>SELECT COLOR</Text>
                <View style={{ marginBottom: 20 }}>
                    <View style={{ width: 32, height: 32, backgroundColor: '#2E3A59', borderRadius: 30, }} />
                </View>
                <View style={{ alignItems: 'center', backgroundColor: '#DB2C66', paddingVertical: 12, borderRadius: 30 }}>
                    <Text style={{ fontSize: 14, color: '#fff' }}>ADD TO CART</Text>
                </View>
            </Animated.View>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingTop: 22,
        paddingBottom: 6,
        paddingHorizontal: 20,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    contentJustifyContainer: {
        justifyContent: 'center'
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