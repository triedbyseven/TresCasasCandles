import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SearchContainer } from '../ui/search';
import NavigationBar2 from '../ui/navigation/NavigationBar2';
import Carousel1 from '../ui/carousels/Carousel1';
import { fakeData } from '../../fakeData';

export interface HomeProps {
    
}
 
const Home: React.SFC<HomeProps> = () => {
    const insets = useSafeAreaInsets();

    return ( 
        <>
            <StatusBar barStyle="dark-content" backgroundColor='#EBC3CB' />
            <View style={{ flex: 0, paddingTop: insets.top, backgroundColor: '#EBC3CB'}} />
            <View style= {styles.container}>
                <SearchContainer />
                <NavigationBar2 />
                <Carousel1 items={fakeData} />
            </View>
        </>
     );
}
 
export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        backgroundColor: '#EBC3CB',
    },
});