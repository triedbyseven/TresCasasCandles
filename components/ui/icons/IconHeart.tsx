import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export interface IconHeartProps {
    
}
 
const IconHeart: React.SFC<IconHeartProps> = () => {
    return (
        <TouchableOpacity 
            activeOpacity={0.65}
            style={styles.container} onPress={() => console.log('pressed')}>
            <Icon
                name="heart-outline"
                size={20}
                color="black"
            />
        </TouchableOpacity>
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
    }
});