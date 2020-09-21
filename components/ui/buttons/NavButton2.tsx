import React, { useState, useEffect, memo } from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export interface NavButton2Props {
    text: string;
    index: number;
    onPressMenuItem: any;
    animate: any;
    currentMenuIndex: number;
}
 
const NavButton2: React.SFC<NavButton2Props> = ({ text, index, currentMenuIndex, onPressMenuItem, animate }) => {
    const [state, updateState] = useState({ xCoord: 0, width: 0, index: 0 });

    useEffect(() => {
        if (currentMenuIndex === index) animate(state);
    }, [currentMenuIndex, state])

    return ( 
        <TouchableOpacity 
            style={styles.menuItem} 
            onPress={() => onPressMenuItem(state)}
            onLayout={(event) => {
                var { x, width } = event.nativeEvent.layout;
                updateState({ xCoord: x, width: width, index: index });
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
 
export default memo(NavButton2);