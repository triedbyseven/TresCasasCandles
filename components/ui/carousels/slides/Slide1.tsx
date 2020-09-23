import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';
import { IconHeart } from '../../icons';
import { useNavigation } from '@react-navigation/native';

export interface Slide1Props {
    id: number;
    name: string;
}
 
const Slide1: React.SFC<Slide1Props> = ({ id, name }) => {
    const navigation = useNavigation();

    return ( 
        <TouchableOpacity
            activeOpacity={1}
            onPress={() => navigation.navigate('ItemDetail')}
        >
            <IconHeart />
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    resizeMode="contain"
                    source={require('../../../../assets/Candle.G03.2k.png')}
                />
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>Gardenia scented candle</Text>
                <Text style={styles.subTitle}>US $24.99</Text>
            </View>
        </TouchableOpacity>
     );
};

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%', 
        height: '100%',
        alignItems: 'center',
        marginTop: 20
    },
    image: {
        width: '90%', 
        height: '90%'
    },
    contentContainer: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: '100%',
        paddingHorizontal: 25,
        marginBottom: 30,
    },
    title: {
        fontSize: 30,
        color: '#fff',
        marginBottom: 10
    },
    subTitle: {
        fontSize: 18,
        color: '#000'
    }
});
 
export default Slide1;