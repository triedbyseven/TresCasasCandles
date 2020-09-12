import React from 'react';
import { View } from 'react-native';

export interface Slide1Props {
    id: number;
    name: string;
}
 
const Slide1: React.SFC<Slide1Props> = ({ id, name }) => {
    return ( 
        <View />
     );
}
 
export default Slide1;