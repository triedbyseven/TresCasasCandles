import React, { useRef, useState } from 'react';
import { StyleSheet, View, Text } from "react-native";
import Animated, { Easing } from 'react-native-reanimated';
import NavButton1 from '../buttons/NavButton1';
import { menuItems } from '../../../data/components/ui/navigation/navigationbar1-data';
import { useNavigationAnimations, updateValue }  from '../../../animations';

export interface NavigationBar1Props {
    navigation: any;
};

const { Value, timing } = Animated;
 
const NavigationBar1: React.FC<NavigationBar1Props> = ({ navigation }) => {
    const { interpolateAnimatedHeight, interpolateMenuOpacity, interpolateItemOpacity, interpolateTranslateY } = useNavigationAnimations();

    const [state, updateState] = useState({ xCoord: 0, width: 0, height: 0, index: 0 });
    const [isAnimating, updateIsAnimating] = useState(false);

    const _selectorAnimX = useRef(new Value(0)).current;
    const _widthAnim = useRef(new Value(0)).current;


    const _ballWidthAnim = useRef(new Value(10)).current;
    const _ballHeightAnim = useRef(new Animated.Value(10)).current;

    const onPressMenuItem = (state: any, route: string) => {
        if(isAnimating) return;
        navigation.navigate(route);
        updateState(state);
    };

    const parallelize = (
        animations: Animated.BackwardCompatibleWrapper[],
        cb?: { onStart?: () => void; onDone?: () => void },
    ) => {
        cb?.onStart && cb.onStart();
        const promises = animations.map(a => {
            return new Promise(resolve => {
                a.start(() => {
                    resolve();
                });
            });
        });
        return Promise.all(promises).then(() => {
            cb?.onDone && cb.onDone();
        });
    };

    const animate = (layout: any): void => {
        const { xCoord, width, height } = layout;
        updateIsAnimating(true);
        shrinkBallAnimation(xCoord, width, height);
    };

    const shrinkBallAnimation = (xCoord: number, width: number, height: number) => {
        const _config_BallWidthAnim = {
            duration: 250,
            toValue: 10,
            easing: Easing.inOut(Easing.ease),
        };
        const _config_BallHeightAnim = {
            duration: 250,
            toValue: 10,
            easing: Easing.inOut(Easing.ease),
        };
        
        parallelize(
            [
                timing(_ballWidthAnim, _config_BallWidthAnim),
                timing(_ballHeightAnim, _config_BallHeightAnim),
            ],
            {
                onStart: () => {
                    console.log('started');
                },
                onDone: () => {
                    moveBallAnimation(xCoord, width, height)
                },
            },
        );
    };

    const moveBallAnimation = (xCoord: number, width: number, height: number) => {
        const _configSelectorAnimX = {
            duration: 100,
            toValue: xCoord + 22,
            easing: Easing.inOut(Easing.ease),
        };

        const _configWidthAnim = {
            duration: 250,
            toValue: width - 44,
            easing: Easing.inOut(Easing.ease),
        };

        parallelize(
            [
                timing(_selectorAnimX, _configSelectorAnimX),
                timing(_widthAnim, _configWidthAnim),
            ],
            {
                onStart: () => {
                    console.log('started');
                },
                onDone: () => {
                    expandBallAnimation(width, height);
                },
            },
        );
    };

    const expandBallAnimation = (width: number, height: number): any => {
        const _config_BallWidthAnim = {
            duration: 250,
            toValue: width,
            easing: Easing.inOut(Easing.ease),
        };
        const _config_BallHeightAnim = {
            duration: 250,
            toValue: height,
            easing: Easing.inOut(Easing.ease),
        };

        parallelize(
            [
                timing(_ballWidthAnim, _config_BallWidthAnim),
                timing(_ballHeightAnim, _config_BallHeightAnim),
            ],
            {
                onStart: () => {
                    console.log('started');
                },
                onDone: () => {
                    updateIsAnimating(false);
                },
            },
        );
    };

    return ( 
    <Animated.View style={[styles.container, { height: interpolateAnimatedHeight }]}>
            <Animated.View style={[styles.contentJustifyContainer, { opacity: interpolateMenuOpacity }]}>
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
            <Animated.View style={[styles.markerContainer, { width: _widthAnim }, {
                transform: [
                    { translateX: _selectorAnimX },
                ]
            }]}>
                <Animated.View style={[styles.marker, { width: _ballWidthAnim, height: _ballHeightAnim }]} />
            </Animated.View>
        </Animated.View>
        <Animated.View 
            style={[
                { opacity: interpolateItemOpacity, padding: 28 }, {
                transform: [
                    { translateY: interpolateTranslateY }
                ]
            }]}
        >
            <View
                onLayout={event => {
                    if(event.nativeEvent.layout.height === 0) return;
                    updateValue(event.nativeEvent.layout.height)
                }}
            >
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
            </View>
        </Animated.View>
    </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginTop: -35,
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