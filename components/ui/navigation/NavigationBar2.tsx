import React from 'react';
import { StyleSheet, View, Animated, Text } from 'react-native';
import { TouchableOpacity } from 'react-native';

export interface NavigationBar2Props {
    
};
 
const NavigationBar2: React.SFC<NavigationBar2Props> = () => {
    return ( 
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Animated.ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={styles.scrollView}
                    contentContainerStyle={{ paddingLeft: 20 }}
                >
                    <View style={styles.menuItem}>
                        <Text style={styles.text}>Coat</Text>
                    </View>
                    <View style={styles.menuItem}>
                        <Text style={styles.text}>T-Shirt</Text>
                    </View>
                    <View style={styles.menuItem}>
                        <Text style={styles.text}>Suit</Text>
                    </View>
                    <View style={styles.menuItem}>
                        <Text style={styles.text}>Watch</Text>
                    </View>
                    <View style={styles.menuItem}>
                        <Text style={styles.text}>Sweater</Text>
                    </View>
                    <View style={styles.menuItem}>
                        <Text style={styles.text}>T-Shirt</Text>
                    </View>
                </Animated.ScrollView>

            </View>
        </View> 
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 0.3,
        justifyContent: 'center',
        borderWidth: 1,
    },
    innerContainer: {
        paddingVertical: 5,
    },
    scrollView: {
        flexDirection: 'row'
    },
    menuItem: {
        paddingHorizontal: 22,
    },
    text: {
        fontSize: 16,
        color: '#222B45'
    }
});
 
export default NavigationBar2;