import 'react-native';
import React from 'react';
import NavButton2 from '../../../../components/ui/buttons/NavButton2';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const updateFunction = () => console.log('Mock Function');

    renderer.create(<NavButton2 text="Label" index={0} updater={updateFunction} />);
});

it('takes a text, index, updater as props', () => {
    const updateFunction = () => console.log('Mock Function');

    const testRenderer = renderer.create(<NavButton2 text='Label' index={0} updater={updateFunction} />);
    const testInstance =  testRenderer.root;
    expect(testInstance.props).toEqual({ text: 'Label', index: 0, updater: updateFunction })
});