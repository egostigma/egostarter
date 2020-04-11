import React from 'react';
import { StyleSheet, View } from 'react-native';
import { CompNative } from '@egostarter/components';

export default function App() {
  return (
    <View style={styles.container}>
      <CompNative />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
