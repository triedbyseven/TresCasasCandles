/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { WithApolloProvider } from './cache/setup';

const App = () => {
  return (
    <>
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
      </SafeAreaView>
    </NavigationContainer>
    </>
  );
};

export default WithApolloProvider(App);
