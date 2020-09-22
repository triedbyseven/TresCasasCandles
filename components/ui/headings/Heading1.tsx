import React from 'react';
import { StyleSheet, Text } from "react-native";

export interface Heading1Props {
    text: string;
}
 
const Heading1: React.SFC<Heading1Props> = ({ text }) => {
    return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
    text: {
        fontSize: 40,
        color: '#263150',
        paddingLeft: 35,
        marginBottom: 25,
    }
});
 
export default Heading1;