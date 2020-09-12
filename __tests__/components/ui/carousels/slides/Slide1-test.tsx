import 'react-native';
import React from 'react';
import Slide1 from '../../../../../components/ui/carousels/slides/Slide1';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
    renderer.create(<Slide1 />);
});
