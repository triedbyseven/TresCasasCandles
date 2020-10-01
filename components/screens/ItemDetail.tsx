import React, { useEffect } from 'react';
import { Platform, StatusBar, StyleSheet, TouchableOpacity, TouchableNativeFeedback, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Path, Use, Defs} from 'react-native-svg';
import { useColorAnimations, useNavigationAnimations } from '../../animations';

export interface ItemDetailProps {
    navigation: any;
}
 
const ItemDetail: React.SFC<ItemDetailProps> = ({ navigation }) => {
    const { animateColor } = useColorAnimations();
    const { animateMenu } = useNavigationAnimations();
    const insets = useSafeAreaInsets();
    const insetStyles = {
        paddingTop: insets.top
    }

    useEffect(() => {
        return () => {
            animateColor(false);
            animateMenu(false);
        };
    }, []);

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor='rgba(0,0,0,0)' translucent={true} />
            <View style={[styles.insetContainer, insetStyles]} /> 
            <View style={styles.container}> 
                <View style={styles.headerContainer}>
                    {Platform.OS === 'ios' ? (
                        <TouchableOpacity
                            activeOpacity={0.65}
                            style={styles.icon}
                            onPress={() => {
                                navigation.goBack();
                            }}
                        >
                            <Svg width={20} height={16} viewBox="0 0 20 16">
                                <Defs>
                                    <Path
                                        d="M14.582 7.866c.557.488.557 1.28 0 1.768l-4.704 4.115 13.693.001c.79 0 1.429.56 1.429 1.25s-.64 1.25-1.429 1.25l-13.695-.001 4.706 4.117c.557.488.557 1.28 0 1.768-.558.488-1.463.488-2.02 0l-7.144-6.25-.012-.011a1.335 1.335 0 01-.073-.071l.085.082a1.338 1.338 0 01-.26-.312 1.175 1.175 0 01-.113-.259 1.1 1.1 0 01.113-.886 1.05 1.05 0 01.096-.14 1.362 1.362 0 01.164-.17l7.143-6.25c.558-.489 1.463-.489 2.02 0z"
                                        id="prefix__a"
                                    />
                                </Defs>
                                <Use
                                    fill="#192038"
                                    xlinkHref="#prefix__a"
                                    transform="translate(-5 -7)"
                                    fillRule="evenodd"
                                />
                            </Svg>
                        </TouchableOpacity>
                    ) : (
                        <View style={styles.icon}>
                            <TouchableNativeFeedback
                                onPress={() => {
                                    setTimeout(() => {
                                        navigation.goBack();
                                    }, 150);
                                }}
                                useForeground={true}
                                delayPressIn={0}
                                background={TouchableNativeFeedback.Ripple('rgba(0,0,0,0.15)', false)}
                            >
                                <View style={styles.icon}>
                                    <Svg width={20} height={16} viewBox="0 0 20 16">
                                        <Defs>
                                            <Path
                                                d="M14.582 7.866c.557.488.557 1.28 0 1.768l-4.704 4.115 13.693.001c.79 0 1.429.56 1.429 1.25s-.64 1.25-1.429 1.25l-13.695-.001 4.706 4.117c.557.488.557 1.28 0 1.768-.558.488-1.463.488-2.02 0l-7.144-6.25-.012-.011a1.335 1.335 0 01-.073-.071l.085.082a1.338 1.338 0 01-.26-.312 1.175 1.175 0 01-.113-.259 1.1 1.1 0 01.113-.886 1.05 1.05 0 01.096-.14 1.362 1.362 0 01.164-.17l7.143-6.25c.558-.489 1.463-.489 2.02 0z"
                                                id="prefix__a"
                                            />
                                        </Defs>
                                        <Use
                                            fill="#192038"
                                            xlinkHref="#prefix__a"
                                            transform="translate(-5 -7)"
                                            fillRule="evenodd"
                                        />
                                    </Svg>
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                    )}
                </View>
            </View>
        </>
    );
};
 
export default ItemDetail;

const styles = StyleSheet.create({
    insetContainer: {
        flex: 0,
        backgroundColor: 'rgba(0,0,0,0)'
    },
    container: {
        flex: 1,
        height: '100%',
        paddingBottom: 35,
    },
    headerContainer: {
        height: 32,
        paddingHorizontal: 30,
        marginTop: 12
    },
    icon: {
        overflow: 'hidden',
        width: 30, 
        height: '100%', 
        justifyContent: 'center', 
        alignItems: 'center',
        borderRadius: 30,
    }
});