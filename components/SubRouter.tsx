import React from 'react';
import { StyleSheet, View } from "react-native";
import Animated from 'react-native-reanimated';
import NavigationBar1 from './ui/navigation/NavigationBar1';
import { useColorAnimations } from '../animations/';
import { createStackNavigator } from '@react-navigation/stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ItemDetail from './screens/ItemDetail';
import Home from './screens/Home';
const Stack = createStackNavigator();

export interface SubRouterProps {
    navigation: any;
}
 
const SubRouter: React.SFC<SubRouterProps> = ({ navigation }) => {
    const { colorInterpolation } = useColorAnimations();
    const insets = useSafeAreaInsets();
    const options = {
        navigatorOptions: {
            cardStyle: {
                backgroundColor: 'rgba(0,0,0,0)'
            }
        },
        screenOptions: {
            headerShown: false, 
            animationEnabled: false
        }
    };
    const insetStyles = {
        paddingBottom: insets.bottom
    }
    const anmiationStyles = {
        backgroundColor: colorInterpolation
    }

    return ( 
        <>
            <View style={[styles.animatedContainer, insetStyles]}>
                <Animated.View style={[styles.container, anmiationStyles]}>
                    <Stack.Navigator screenOptions={options.navigatorOptions}>
                        <Stack.Screen name="Home" component={Home} options={options.screenOptions} />
                        <Stack.Screen name="ItemDetail" component={ItemDetail} options={options.screenOptions} />
                    </Stack.Navigator>
                    <NavigationBar1 navigation={navigation} />
                </Animated.View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,        
        backgroundColor: '#FFFFFF' 
    },
    animatedContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    }
});
 
export default SubRouter;