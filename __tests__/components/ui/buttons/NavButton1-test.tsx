import 'react-native';
import React from 'react';
import NavButton1 from '../../../../components/ui/buttons/NavButton1';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    renderer.create(<NavButton1 text="Home" />);
});

it('takes text prop as arguments', () => {
    const testRenderer = renderer.create(<NavButton1 text="Home" />);
    const testInstance = testRenderer.root;

    expect(testInstance.props).toEqual({ text: "Home"});
});