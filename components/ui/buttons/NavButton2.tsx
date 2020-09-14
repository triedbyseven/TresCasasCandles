import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export interface NavButton2Props {
    text: string;
}
 
const NavButton2: React.SFC<NavButton2Props> = ({ text }) => {
    return ( 
        <View style={styles.menuItem}>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    menuItem: {
        paddingHorizontal: 22,
    },
    text: {
        fontSize: 16,
        color: '#222B45'
    }
});
 
export default NavButton2;