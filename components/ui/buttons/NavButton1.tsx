import React from 'react';
import { Platform, StyleSheet, TouchableOpacity, TouchableNativeFeedback, View, Text } from 'react-native';

export interface NavButton1Props {
    text: string;
}
 
const NavButton1: React.SFC<NavButton1Props> = ({ text }) => {
    return ( 
            Platform.OS === 'ios' ?
                <TouchableOpacity
                    onPress={() => console.log('Pressed')}
                    style={styles.button}
                 >
                    <Text>{text}</Text>
                </TouchableOpacity> :
                <TouchableNativeFeedback
                    onPress={() => console.log('Pressed')}
                    useForeground={true}
                    delayPressIn={0}
                    background={TouchableNativeFeedback.Ripple('rgba(0,0,0.45)', false)}
                >
                    <View style={styles.button}>
                        <Text>{text}</Text>
                    </View>
                </TouchableNativeFeedback>
     );
}

const styles = StyleSheet.create({
    button: {
        overflow: 'hidden',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 30,
    }
});
 
export default NavButton1;