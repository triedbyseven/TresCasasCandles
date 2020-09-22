import React from 'react';
import { StyleSheet, View } from "react-native";
import NavigationBar1 from './ui/navigation/NavigationBar1';

import { createStackNavigator } from '@react-navigation/stack';
import ItemDetail from './screens/ItemDetail';
import Home from './screens/Home';
const Stack = createStackNavigator();

export interface SubRouterProps {
    navigation: any;
}
 
const SubRouter: React.SFC<SubRouterProps> = ({ navigation }) => {
    return ( 
        <View style={styles.container}>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false, animationEnabled: false }} />
                <Stack.Screen name="ItemDetail" component={ItemDetail} options={{ headerShown: false, animationEnabled: false }} />
            </Stack.Navigator> 
            <NavigationBar1 navigation={navigation} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        backgroundColor: '#000'
    }
});
 
export default SubRouter;