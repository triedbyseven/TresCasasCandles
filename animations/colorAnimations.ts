import Animated, { Easing } from 'react-native-reanimated';

const { timing, interpolateColors, interpolate, Value } = Animated;
let animateVar = false;
const _color = new Value(0);
const _color1 = new Value(0);

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

const useColorAnimations: any = () => {
    const colorInterpolation = interpolateColors(_color, {
        inputRange: [0, 1],
        outputColorRange: ['#EBC3CB', '#EDDEE1'],
    });

    const opacityInterpolation = interpolate(_color1, {
        inputRange: [0, 1],
        outputRange: [1, 0]
    });
    
    const animateColor = (animateChoice: boolean) => {
        animateVar = animateChoice;

        parallelize(
            [
                timing(_color, {
                    toValue: animateVar ? 1 : 0,
                    duration: 1000,
                    easing: Easing.inOut(Easing.ease)
                }),
                timing(_color1, {
                    toValue: !animateVar ? 0 : 1,
                    duration: 10,
                    easing: Easing.inOut(Easing.ease)
                }),
            ],
        );
    };

    return {
        animateColor,
        colorInterpolation,
        opacityInterpolation,
    }

};

export default useColorAnimations;