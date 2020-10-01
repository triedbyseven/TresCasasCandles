import Animated, { Easing } from 'react-native-reanimated'
import { useState } from 'react';

const { Value, timing, interpolate } = Animated;
let _animate = false;
const _menuHeight = new Value(0);
const _menuOpacity = new Value(0);
const _itemOpacity = new Value(0);
const _menuTranslateY = new Value(0);
let dynamicValue = 73;

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

export const updateValue = (dynamicNumber: number) => {
    dynamicValue = dynamicNumber
};

export const checkValue = () => console.log(dynamicValue);

export const useNavigationAnimations: any = () => {
    const interpolateAnimatedHeight = interpolate(_menuHeight, {
        inputRange: [0, 1],
        outputRange: [73, dynamicValue + 28]
    });

    const interpolateMenuOpacity = interpolate(_menuOpacity, {
        inputRange: [0, 1],
        outputRange: [1, 0]
    });

    const interpolateItemOpacity = interpolate(_itemOpacity, {
        inputRange: [0, 1],
        outputRange: [0, 1]
    });

    const interpolateTranslateY = interpolate(_menuTranslateY, {
        inputRange: [0, 1],
        outputRange: [0, 1]
    })

    const animateMenu = (animateToggle: boolean): void => {
        _animate = animateToggle;

        const _configMenuHeight = {
            duration: 250,
            toValue: _animate ? 1 : 0,
            easing: Easing.inOut(Easing.ease),
        };
        const _configMenuOpacity = {
            duration: 250,
            toValue: _animate ? 1 : 0,
            easing: Easing.inOut(Easing.ease),
        };
        const _configItemOpacity = {
            duration: 250,
            toValue: _animate ? 1 : 0,
            easing: Easing.inOut(Easing.ease),
        };
        const _configMenuTranslateY = {
            duration: 250,
            toValue: _animate ? -73 : 0,
            easing: Easing.inOut(Easing.ease),
        };

        parallelize([
            timing(_menuHeight, _configMenuHeight),
            timing(_menuOpacity, _configMenuOpacity),
            timing(_itemOpacity, _configItemOpacity),
            timing(_menuTranslateY, _configMenuTranslateY),
        ],
        {
            onStart: () => {
            },
            onDone: () => {
            },
        })
    };

    return {
        animateMenu,
        interpolateAnimatedHeight,
        interpolateMenuOpacity,
        interpolateItemOpacity,
        interpolateTranslateY
    }
};