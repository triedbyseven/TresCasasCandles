import 'react-native';
import React from 'react';
import NavigationBar1 from '../../../../components/ui/navigation/NavigationBar1';

import renderer from 'react-test-renderer';

it('renderes without crashing', () => {
    renderer.create(<NavigationBar1 />);
});