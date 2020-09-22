import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SubRouter from './SubRouter';

export interface IndexProps {}

const Stack = createStackNavigator();
 
const Index: React.SFC<IndexProps> = () => {
    return ( 
        <Stack.Navigator initialRouteName="SubRouter">
            <Stack.Screen name="SubRouter" component={SubRouter} options={{ headerShown: false, animationEnabled: false }} />
        </Stack.Navigator>
     );
}
 
export default Index;