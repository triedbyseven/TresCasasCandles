import React from 'react';
import { StyleSheet, View } from 'react-native';

export interface ItemDetailProps {
    
}
 
const ItemDetail: React.SFC<ItemDetailProps> = () => {
    return ( <View style={styles.container} /> );
}
 
export default ItemDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        backgroundColor: '#EDDEE1'
    },
});