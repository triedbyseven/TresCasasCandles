import 'react-native';
import React from 'react';
import IconHeart from '../../../../components/ui/icons/IconHeart';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    renderer.create(<IconHeart />);
});