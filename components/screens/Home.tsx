import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SearchContainer } from '../ui/search';
import NavigationBar2 from '../ui/navigation/NavigationBar2';
import Carousel1 from '../ui/carousels/Carousel1';
import { fakeData } from '../../fakeData';
import useColorAnimations from '../../animations/colorAnimations';
import Animated from 'react-native-reanimated';

export interface HomeProps {
    
}
 
const Home: React.SFC<HomeProps> = () => {
    const insets = useSafeAreaInsets();
    const { opacityInterpolation } = useColorAnimations();
    const insetStyles = {
        paddingTop: insets.top
    }
    const opacityStyles = {
        opacity: opacityInterpolation
    }

    return ( 
        <>
            <StatusBar barStyle="dark-content" backgroundColor='rgba(0,0,0,0)' translucent={true} />
            <View style={[styles.insetContainer, insetStyles]} />
            <Animated.View style={[styles.container, opacityStyles]}>
                <SearchContainer />
                <NavigationBar2 />
                <Carousel1 items={fakeData} />
            </Animated.View>
        </>
     );
}
 
export default Home;

const styles = StyleSheet.create({
    insetContainer: { 
        flex: 0, 
        backgroundColor: 'rgba(0,0,0,0)'
    },
    container: {
        flex: 1,
        height: '100%',
        paddingBottom: 35,
        backgroundColor: 'rgba(000,000,000,0.0)'
    },
});