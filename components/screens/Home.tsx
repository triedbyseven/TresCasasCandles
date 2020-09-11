import React from 'react';
import { StyleSheet, View } from "react-native";

export interface HomeProps {
    
}
 
const Home: React.SFC<HomeProps> = () => {
    return ( 
    <View style={styles.container} />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EBC3CB'
    }
});
 
export default Home;