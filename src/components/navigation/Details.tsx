import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { NativeStackScreenProps, NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../App';
import { useNavigation } from '@react-navigation/native';

type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>;


const Details = ({ route }: DetailsProps) => {
    const { productId } = route.params;

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return (
        <View>
            <Text style={styles.headerText}>Details: {productId}</Text>

            <Button
                title="Go to Home"
                // onPress={() => navigation.navigate('Home')}
                onPress={() => navigation.goBack()}
            />

            <Button
                title="Go to Profile"
                onPress={() => navigation.navigate('Profile')}
            />
        </View>
    );
};

export default Details;

const styles = StyleSheet.create({
    headerText: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
