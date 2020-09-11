import 'react-native';
import React from 'react';
import Carousel1 from '../../../../components/ui/carousels/Carousel1';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
    renderer.create(<Carousel1 />);
});
