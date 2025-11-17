import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native';
import { HomeScreen } from './src/screens/HomeScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.header}>Gym Lite</Text>
      <HomeScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B1220'
  },
  header: {
    color: '#F9FAFB',
    fontWeight: 'bold',
    fontSize: 22,
    padding: 16
  }
});
