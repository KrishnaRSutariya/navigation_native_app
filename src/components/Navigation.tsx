import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React from 'react';

// Screens
import Home from './navigation/Home';
import Profile from './navigation/Profile';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { height } = Dimensions.get('window');

export type RootStackParamList = {
    Home: undefined;
    Profile: undefined;
    Details: { productId: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Navigation Page</Text>
            <View style={styles.subContainer}>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="Home">
                        <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
                        <Stack.Screen name="Profile" component={Profile} />
                    </Stack.Navigator>
                </NavigationContainer>
            </View>
        </View>
    );
};

export default Navigation;

const styles = StyleSheet.create({
    container: {
        height: height - 60,
        flex: 1,
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'black',
        margin: 10,
        padding: 10,
    },
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subContainer: {
        margin: 10,
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 5,
    },
});
