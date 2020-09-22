import React from 'react';
import { Platform, StyleSheet, TouchableOpacity, TouchableNativeFeedback, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export interface IconHeartProps {
    
}
 
const IconHeart: React.SFC<IconHeartProps> = () => {
    return (
        Platform.OS === 'ios' ? (
            <TouchableOpacity 
                activeOpacity={0.65}
                style={styles.container} 
                onPress={() => console.log('pressed')}>
                <Icon
                    name="heart-outline"
                    size={20}
                    color="black"
                />
            </TouchableOpacity> 
        ) : (
            <TouchableNativeFeedback
                onPress={() => console.log('pressed')}
                useForeground={true}
                delayPressIn={0}
                background={TouchableNativeFeedback.Ripple('rgba(0,0,0,0.15)', false)}>
                <View style={styles.container}>
                    <Icon
                        name="heart-outline"
                        size={20}
                        color="black"
                    />
                </View>
            </TouchableNativeFeedback>
        )
     );
};
 
export default IconHeart;

const styles = StyleSheet.create({
    container: {
        zIndex: 10,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        top: 10,
        right: 10,
        width: 34,
        height: 34,
        backgroundColor: '#fff',
        borderRadius: 30,
        overflow: 'hidden'
    }
});