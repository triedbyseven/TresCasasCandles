import React from 'react';
import 'react-native';
import ItemDetail from '../../../components/screens/ItemDetail';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    renderer.create(<ItemDetail />);
});