import React from 'react';
import { StyleSheet, View } from "react-native";

export interface SearchBar1Props {
    
};
 
const SearchBar1: React.SFC<SearchBar1Props> = () => {
    return ( 
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={styles.searchContainer}>

                </View>
                <View style={styles.activateBox}>

                </View>
            </View>
        </View> 
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    innerContainer: {
        flexDirection: 'row',
        paddingHorizontal: 32,
        marginTop: 12
    },
    searchContainer: {
        flex: 1,
        height: 52,
        backgroundColor: '#fff',
        borderRadius: 6
    },
    activateBox: {
        width: 48,
        height: 52,
        backgroundColor: '#fff',
        marginLeft: 16,
        borderRadius: 6
    }
});
 
export default SearchBar1;