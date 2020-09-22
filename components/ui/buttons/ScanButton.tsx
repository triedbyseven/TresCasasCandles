import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { BoxShadow } from 'react-native-shadow';

export interface ScanButtonProps {
    
}
 
const ScanButton: React.SFC<ScanButtonProps> = () => {
    const [scanWidth, updateScanWidth] = useState(0);

    const shadowOptScan = {
        width: scanWidth === 0 ? 20 : scanWidth,
        height: 48,
        color: "#000",
        border: 5,
        radius: 3,
        opacity: 0.03,
        x: 0,
        y: 5,
        style: { marginVertical: 0, justifyContent: 'center', alignItems: 'center', }
    };

    return ( 
        <View style={styles.activateBox}
                onLayout={event => {
                    var { width } = event.nativeEvent.layout;
                    updateScanWidth(width);
                }}
            >
                <BoxShadow setting={shadowOptScan}>
                        <Svg width={16} height={16} viewBox="0 0 16 16">
                            <Path
                                d="M10.667 0H16v4.444h-1.778V1.778h-3.555V0zM5.333 0v1.778H1.778v2.666H0V0h5.333zm5.334 16v-1.778h3.555v-2.666H16V16h-5.333zm-5.334 0H0v-4.444h1.778v2.666h3.555V16zM0 7.111h16V8.89H0V7.11z"
                                fill="#000"
                            />
                        </Svg>
                </BoxShadow>
            </View>
        );
}
 
export default ScanButton;

const styles = StyleSheet.create({
    activateBox: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 48,
        height: 48,
        backgroundColor: '#fff',
        marginLeft: 16,
        borderRadius: 6
    }
});