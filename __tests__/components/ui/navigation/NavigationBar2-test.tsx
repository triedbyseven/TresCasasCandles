import 'react-native';
import React from 'react';
import NavigationBar2 from '../../../../components/ui/navigation/NavigationBar2';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    renderer.create(<NavigationBar2 />);
});