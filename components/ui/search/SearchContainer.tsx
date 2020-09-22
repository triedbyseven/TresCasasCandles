import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SearchBar1 } from './';

export interface SearchContainerProps {
    
}
 
const SearchContainer: React.SFC<SearchContainerProps> = () => {
    return ( 
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <SearchBar1 />
            </View>
        </View>
     );
}
 
export default SearchContainer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    innerContainer: {
        flexDirection: 'row',
        paddingHorizontal: 32,
        marginTop: 12
    }
});