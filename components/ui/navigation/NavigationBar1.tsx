import React from 'react';
import { Platform, StyleSheet, View, TouchableOpacity, TouchableNativeFeedback, Text } from "react-native";

export interface NavigationBar1Props {
    
}
 
const NavigationBar1: React.SFC<NavigationBar1Props> = () => {
    return ( 
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                {Platform.OS === 'ios' ?
                    <TouchableOpacity style={styles.button}>
                        <Text>Home</Text>
                    </TouchableOpacity> :
                    <TouchableNativeFeedback
                        onPress={() => console.log('Pressed')}
                        useForeground={true}
                        delayPressIn={0}
                        background={TouchableNativeFeedback.Ripple('rgba(0,0,0.45)', false)}
                    >
                        <View style={styles.button}>
                            <Text>Home</Text>
                        </View>
                    </TouchableNativeFeedback>}
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingVertical: 30,
        paddingHorizontal: 40,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    innerContainer: {
        flexDirection: 'row'
    },
    button: {
        overflow: 'hidden',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 30,
    }
});
 
export default NavigationBar1;