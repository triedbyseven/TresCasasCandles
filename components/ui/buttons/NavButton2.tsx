import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

export interface NavButton2Props {
    text: string;
    index: number;
    updater: any;
}
 
const NavButton2: React.SFC<NavButton2Props> = ({ text, index, updater }) => {
    const [state, updateState] = useState({ xCoord: 0, width: 0 });

    useEffect(() => {
       if(index === 0) updater(state);
    },[state]);

    return ( 
        <TouchableOpacity 
            style={styles.menuItem} 
            onPress={() => updater(state)} 
            onLayout={(event) => {
                var { x, width } = event.nativeEvent.layout;
                updateState({ xCoord: x, width: width });
            }}
        >
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    menuItem: {
        paddingHorizontal: 22,
    },
    text: {
        fontSize: 16,
        color: '#222B45',
        paddingBottom: 3
    }
});
 
export default NavButton2;