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
import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar } from "react-native";
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import { NavigationContainer } from '@react-navigation/native';
import { WithApolloProvider } from './cache/setup';
import Index from './components/Index';

const App = () => {
  const syncAndroidNativeBarColor = async () => {
    try {
      await changeNavigationBarColor('#ffffff', true, true);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    syncAndroidNativeBarColor();
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor='#EBC3CB' />
      <SafeAreaView style={{ flex: 0, backgroundColor: '#EBC3CB' }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <NavigationContainer>
            <Index />
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
};

export default WithApolloProvider(App);
