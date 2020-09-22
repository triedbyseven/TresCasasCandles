import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SearchContainer } from '../ui/search';
import NavigationBar2 from '../ui/navigation/NavigationBar2';
import Carousel1 from '../ui/carousels/Carousel1';
import { fakeData } from '../../fakeData';

export interface HomeProps {
    
}
 
const Home: React.SFC<HomeProps> = () => {
    return ( 
        <View style= {styles.container}>
            <SearchContainer />
            <NavigationBar2 />
            <Carousel1 items={fakeData} />
        </View>
     );
}
 
export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        backgroundColor: '#EBC3CB',
        paddingBottom: 38,
    },
});