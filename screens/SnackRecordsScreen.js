import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SnackRecordsScreen() {
  return (
    <View style={styles.container}>
      <Text>Snack Records Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
