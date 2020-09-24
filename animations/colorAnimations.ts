import { Animated } from 'react-native';

const color = new Animated.Value(0);
let animateVar = false;

const useColorAnimations: any = () => {

    const colorInterpolation = color.interpolate({
        inputRange: [0, 1],
        outputRange: ['rgb(235,195,203)', 'rgb(236,222,225)']
    });
    
    const animateColor = ( animateChoice: boolean) => {
        animateVar = animateChoice;

        Animated.timing(color, {
            useNativeDriver: false,
            toValue: animateVar ? 1 : 0,
            duration: 0,
        }).start();
    };

    return {
        animateColor,
        colorInterpolation,
    }

};

export default useColorAnimations;