import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export interface IconHeartProps {
    
}
 
const IconHeart: React.SFC<IconHeartProps> = () => {
    return (
        <View style={styles.container}>
            <Icon
                name="heart-outline"
                size={20}
                color="black"
            />
        </View>
     );
};
 
export default IconHeart;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        top: 10,
        right: 10,
        width: 34,
        height: 34,
        backgroundColor: '#fff',
        borderRadius: 30
    }
});