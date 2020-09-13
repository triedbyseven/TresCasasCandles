import 'react-native';
import React from 'react';
import NavButton1 from '../../../../components/ui/buttons/NavButton1';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    renderer.create(<NavButton1 />);
});