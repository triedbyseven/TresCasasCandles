import React, { useState } from 'react';
import { StyleSheet, View, Text } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import { BoxShadow } from 'react-native-shadow';

export interface SearchBar1Props {
    
};
 
const SearchBar1: React.SFC<SearchBar1Props> = () => {
    const [searchWidth, updateSearchWidth] = useState(0);

    const shadowOpt = {
        width: searchWidth === 0 ? 100 : searchWidth,
        height: 48,
        color: "#000",
        border: 5,
        radius: 3,
        opacity: 0.03,
        x: 0,
        y: 5,
        style: { flex: 1, marginVertical: 0 }
    };

    return ( 
            <BoxShadow setting={shadowOpt}>
                <View style={styles.searchContainer}
                    onLayout={event => {
                        var { width } = event.nativeEvent.layout;
                        updateSearchWidth(width);
                    }}
                >
                    <View style={styles.activateBoxIcon}>
                        <Icon
                            name='search'
                            size={20}
                            color='#C5CEE0'
                        />
                    </View>
                    <Text style={styles.searchText}>Search</Text>
                </View>
            </BoxShadow>

    );
};

const styles = StyleSheet.create({
    searchContainer: {
        flex: 1,
        justifyContent: 'center',
        height: 48,
        backgroundColor: '#fff',
        borderRadius: 6,
        paddingHorizontal: 28
    },
    activateBoxIcon: {
        position: 'absolute',
        left: 14
    },
    searchText: {
        fontSize: 15,
        color: '#8F9BB3',
        paddingVertical: 14.75,
        paddingHorizontal: 16.75
    },
});
 
export default SearchBar1;