import 'react-native';
import React from 'react';
import Carousel1 from '../../../../components/ui/carousels/Carousel1';
import { fakeData } from '../../../../fakeData';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
    renderer.create(<Carousel1  items={fakeData}/>);
});

it('renders with taking props', () => {
    const testRenderer = renderer.create(<Carousel1 items={fakeData} />)
    const testInstance = testRenderer.root;

    expect(testInstance.props).toBeTruthy();
});