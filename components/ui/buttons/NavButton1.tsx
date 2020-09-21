import React, { useEffect, useState, memo } from 'react';
import { Animated, Platform, StyleSheet, TouchableHighlight, TouchableNativeFeedback, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export interface NavButton1Props {
    index: number;
    currentMenuIndex: number;
    text: string;
    icon: string;
    onPressMenuItem: any;
    updater: any;
    animate: any;
}
 
const NavButton1: React.SFC<NavButton1Props> = ({ text, icon, index, currentMenuIndex, onPressMenuItem, updater, animate }) => {
    const [state, updateState] = useState({ xCoord: 0, width: 0, height: 0, index: 0 });

    useEffect(() => {
        if(currentMenuIndex === index) animate(state);
    }, [state])

    return ( 
            Platform.OS === 'ios' ?
                (
                <TouchableHighlight
                    activeOpacity={0.9}
                    underlayColor='#EDF1F7'
                    style={styles.button}
                    onPress={() => onPressMenuItem(state)}
                    onLayout={(event) => {
                        var { x, width, height } = event.nativeEvent.layout;
                        updateState({ xCoord: x, width: width, height: height, index: index });
                    }}
                >
                    <View style={{ flexDirection: 'row',alignItems: 'center', justifyContent: 'center' }}>
                        <Icon
                            name={icon}
                            size={24}
                            color={currentMenuIndex === index ? '#222B45' : '#C5CEE0'}
                        />
                        <Animated.Text style={[styles.text, { opacity: currentMenuIndex == index ? 1 : 0 }, { position: currentMenuIndex === index ? 'relative' : 'absolute' }]}>{text}</Animated.Text>
                    </View>
                </TouchableHighlight>
                ) :
                <TouchableNativeFeedback
                    onPress={() => onPressMenuItem(state)}
                    useForeground={true}
                    delayPressIn={0}
                    background={TouchableNativeFeedback.Ripple('rgba(237,241,247,0.25)', false)}
                    onLayout={(event) => {
                        var { x, width, height } = event.nativeEvent.layout;
                        updateState({ xCoord: x, width: width, height: height, index: index });
                    }}
                >
                    <View style={styles.button}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Icon
                                name={icon}
                                size={24}
                                color={currentMenuIndex === index ? '#222B45' : '#C5CEE0'}
                            />
                        <Animated.Text style={[styles.text, { opacity: currentMenuIndex == index ? 1 : 0 }, { position: currentMenuIndex === index ? 'relative' : 'absolute' }]}>{text}</Animated.Text>
                        </View>
                    </View>
                </TouchableNativeFeedback>
     );
}

const styles = StyleSheet.create({
    button: {
        zIndex: 2,
        overflow: 'hidden',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 30,
    },
    text: {
        position: 'absolute',
        fontSize: 14,
        marginLeft: 10,
    }
});
 
export default memo(NavButton1);