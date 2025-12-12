import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import Header from './src/components/Header';
import GithubGrass from './src/components/GithubGrass';

export default function App() {
  const [githubId, setGithubId] = useState('rhehfl');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Header />

      <GithubGrass />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F4F6',
  },
  grassContainer: {
    padding: 30,
  },
});
