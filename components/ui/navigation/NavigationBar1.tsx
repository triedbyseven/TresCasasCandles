import React from 'react';
import { StyleSheet, View } from "react-native";
import NavButton1 from '../buttons/NavButton1';

export interface NavigationBar1Props {
    
}
 
const NavigationBar1: React.SFC<NavigationBar1Props> = () => {
    return ( 
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <NavButton1 text="Home" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingVertical: 30,
        paddingHorizontal: 40,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    innerContainer: {
        flexDirection: 'row'
    }
});
 
export default NavigationBar1;