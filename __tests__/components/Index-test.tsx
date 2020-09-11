import 'react-native';
import React from 'react';
import Index from '../../components/Index';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
    renderer.create(<Index />);
});
