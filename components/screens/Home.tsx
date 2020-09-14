import React from 'react';
import { StyleSheet, View } from "react-native";
import { fakeData } from '../../fakeData';
import Heading1 from '../ui/headings/Heading1';
import Carousel1 from '../ui/carousels/Carousel1';
import NavigationBar1 from '../ui/navigation/NavigationBar1';
import NavigationBar2 from '../ui/navigation/NavigationBar2';

export interface HomeProps {
    
}
 
const Home: React.SFC<HomeProps> = () => {
    return ( 
        <View style={styles.container}> 
            <View style= {{ flex: 1 }}>
                <NavigationBar2 />
                <Heading1 text="Featured"/>
                <Carousel1 items={fakeData} />
            </View>
            <NavigationBar1 />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#EBC3CB'
    }
});
 
export default Home;