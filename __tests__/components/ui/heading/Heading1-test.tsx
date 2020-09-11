import 'react-native';
import React from 'react';
import Heading1 from '../../../../components/ui/headings/Heading1';
import { act } from 'react-test-renderer';

import renderer from 'react-test-renderer';

it('renders correctly', async () => {
    const result = renderer.create(<Heading1 text="Test String" />).toJSON();
    await act(async () => { expect(result).toMatchSnapshot() });
});
