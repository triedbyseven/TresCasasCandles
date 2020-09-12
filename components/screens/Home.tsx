import React from 'react';
import { StyleSheet, View } from "react-native";
import Heading1 from '../ui/headings/Heading1';
import Carousel1 from '../ui/carousels/Carousel1';
import { fakeData } from '../../fakeData';

export interface HomeProps {
    
}
 
const Home: React.SFC<HomeProps> = () => {
    return ( 
    <View style={styles.container}> 
        <Heading1 text="Featured"/>
        <Carousel1 items={fakeData} />
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#EBC3CB'
    }
});
 
export default Home;