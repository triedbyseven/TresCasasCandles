import 'react-native';
import React from 'react';
import NavButton2 from '../../../../components/ui/buttons/NavButton2';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    renderer.create(<NavButton2 text="Label" />);
});

it('takes a text prop', () => {
    const testRenderer = renderer.create(<NavButton2 text='Label' />);
    const testInstance =  testRenderer.root;
    expect(testInstance.props).toEqual({ text: 'Label' })
});