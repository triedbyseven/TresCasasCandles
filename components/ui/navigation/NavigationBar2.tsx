import React, { useRef, useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import Animated, { Easing } from 'react-native-reanimated';
import NavButton2 from '../buttons/NavButton2';
import { menuItems } from '../../../data/components/ui/navigation/navigationbar2-data';

export interface NavigationBar2Props {};

const { Value, timing } = Animated;
 
const NavigationBar2: React.SFC<NavigationBar2Props> = () => {
    const [state, updateState] = useState({ xCoord: 0, width: 0, index: 0 });
    const _transX = useRef(new Value(0)).current;
    const _width = useRef(new Value(30)).current;

    const onPressMenuItem = (state: any) => {
        updateState(state);
    };

    const animate = (layout: any): void => {
        const { xCoord, width } = layout;

        const _configTransX = {
            duration: 250,
            toValue: xCoord + 22,
            easing: Easing.inOut(Easing.ease),
        };

        const _configWidth = {
            duration: 250,
            toValue: width - 44,
            easing: Easing.inOut(Easing.ease),
        };

        timing(_transX, _configTransX).start();
        timing(_width, _configWidth).start();
    };

    return ( 
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Animated.ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={styles.scrollView}
                    contentContainerStyle={styles.contentContainerStyle}
                >
                    <View>
                        <View style={styles.scrollView}>
                             {menuItems.map(({index, title}) => <NavButton2 
                                    key={index} 
                                    index={index} 
                                    currentMenuIndex={state.index} 
                                    text={title} 
                                    onPressMenuItem={onPressMenuItem} 
                                    animate={animate} 
                                />
                             )}
                        </View>
                        <Animated.View style={[styles.marker, { width: _width },
                        {
                            transform: [
                                { translateX: _transX },
                            ]
                        }]} />
                    </View>
                </Animated.ScrollView>
            </View>
        </View> 
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    innerContainer: {
        paddingVertical: 5,
    },
    contentContainerStyle: {
        paddingLeft: 20 
    },
    scrollView: {
        flexDirection: 'row'
    },
    marker: {
        height: 2,
        backgroundColor: 'black',
    }
});
 
export default NavigationBar2;