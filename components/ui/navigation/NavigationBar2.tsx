import React from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import NavButton2 from '../buttons/NavButton2';
import { menuItems } from '../../../data/components/ui/navigation/navigationbar2-data';

export interface NavigationBar2Props {
    
};
 
const NavigationBar2: React.SFC<NavigationBar2Props> = () => {
    return ( 
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Animated.ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={styles.scrollView}
                    contentContainerStyle={{ paddingLeft: 20 }}
                >
                    {menuItems.map(({index, title}) => <NavButton2 key={index} text={title} />)}
                </Animated.ScrollView>
            </View>
        </View> 
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 0.1,
        justifyContent: 'center',
    },
    innerContainer: {
        paddingVertical: 5,
    },
    scrollView: {
        flexDirection: 'row'
    }
});
 
export default NavigationBar2;