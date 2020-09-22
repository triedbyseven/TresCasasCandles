import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import ScanButton from '../../../../components/ui/buttons/ScanButton';

it('renders without crashing', () => {
    renderer.create(<ScanButton />);
});