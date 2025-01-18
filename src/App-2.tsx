/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Navigation from './components/Navigation';

const { height } = Dimensions.get('window');

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView> */}
      <Navigation />
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: height - 20,
    backgroundColor: '#29d8d3',
    borderRadius: 5,
    margin: 10,
  },
});

export default App;
