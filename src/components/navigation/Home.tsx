import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../App';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({ navigation }: HomeProps) => {
    return (
        <View>
            <Text style={styles.headerText}>Home</Text>
            <Button
                title="Go to Profile"
                onPress={() => navigation.navigate('Profile')}
            />

            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details', { productId: 1 })}
            />
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    headerText: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
