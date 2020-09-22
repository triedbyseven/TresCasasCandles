import React from 'react';
import { StyleSheet, View } from "react-native";
import { fakeData } from '../../fakeData';
import Carousel1 from '../ui/carousels/Carousel1';
import NavigationBar1 from '../ui/navigation/NavigationBar1';
import NavigationBar2 from '../ui/navigation/NavigationBar2';
import SearchBar1 from '../ui/search/SearchBar1';

export interface HomeProps {
    
}
 
const Home: React.SFC<HomeProps> = () => {
    return ( 
        <View style={styles.container}> 
            <View style= {styles.innerContainer}>
                <SearchBar1 />
                <NavigationBar2 />
                <Carousel1 items={fakeData} />
            </View>
            <NavigationBar1 />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        backgroundColor: '#EBC3CB'
    },
    innerContainer: {
        flex: 1,
    }
});
 
export default Home;