import React from 'react';
import 'react-native';
import SearchContainer from '../../../../components/ui/search/SearchContainer';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    renderer.create(<SearchContainer />);
})
