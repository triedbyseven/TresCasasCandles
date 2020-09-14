import 'react-native';
import React from 'react';
import SearchBar from '../../../../components/ui/search/SearchBar1';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    renderer.create(<SearchBar />);
});