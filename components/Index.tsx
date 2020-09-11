import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';

export interface IndexProps {}

const Stack = createStackNavigator();
 
const Index: React.SFC<IndexProps> = () => {
    return ( 
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
     );
}
 
export default Index;