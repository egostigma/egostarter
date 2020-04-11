import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';

const vmin = (value: number): number => {
  const windowWidth = Dimensions.get('window').width * (value / 100);
  const windowHeight = Dimensions.get('window').height * (value / 100);
  return Math.min(windowWidth, windowHeight);
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'white',
    borderRadius: 12,
    padding: vmin(2),
    backgroundColor: '#164a61',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24 + vmin(1),
    margin: 0,
  },
});

const CompNative: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>🐱</Text>
      <Text style={styles.header}>Native Component</Text>
    </View>
  );
};

export default CompNative;
