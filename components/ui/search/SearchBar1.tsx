import React from 'react';
import { StyleSheet, View, Text } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

export interface SearchBar1Props {
    
};
 
const SearchBar1: React.SFC<SearchBar1Props> = () => {
    return ( 
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={styles.searchContainer}>
                    <View style={{ position: 'absolute', left: 14 }}>
                        <Icon
                            name='search'
                            size={20}
                            color='#C5CEE0'
                        />
                    </View>
                    <Text style={{
                        fontSize: 15, 
                        color: '#8F9BB3', 
                        paddingVertical: 16.75,
                        paddingHorizontal: 16.75
                    }}>Search</Text>
                </View>
                <View style={styles.activateBox}>
                    <Icon2
                        name='scan-helper'
                        size={20}
                        color='#000'
                    />
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
        justifyContent: 'center',
        height: 52,
        backgroundColor: '#fff',
        borderRadius: 6,
        paddingHorizontal: 28
    },
    activateBox: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 48,
        height: 52,
        backgroundColor: '#fff',
        marginLeft: 16,
        borderRadius: 6
    }
});
 
export default SearchBar1;