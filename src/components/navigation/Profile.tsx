import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type ProfileProps = NativeStackScreenProps<RootStackParamList, 'Profile'>

const Profile = ({ navigation }: ProfileProps) => {
  return (
    <View>
      <Text style={styles.headerText}>Profile</Text>

      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />

      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', { productId: 1 })}
      />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
