import 'react-native';
import React from 'react';
import Slide1 from '../../../../../components/ui/carousels/slides/Slide1';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
    renderer.create(<Slide1 />);
});

it('renders with taking props', () => {
    const testRenderer = renderer.create(<Slide1 id={1} name="name" />);
    const testInstance = testRenderer.root;
    
    expect(testInstance.props).toEqual({ id: 1, name: 'name' });
});