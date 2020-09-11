import 'react-native';
import React from 'react';
import Index from '../../components/Index';
import { act } from 'react-test-renderer';
import { NavigationContainer } from '@react-navigation/native';

import renderer from 'react-test-renderer';

it('renders correctly', async () => {
    const result = renderer.create(
        <NavigationContainer>
            <Index />
        </NavigationContainer>
    ).toJSON();
    await act(async () => { expect(result).toMatchSnapshot(); })
});
