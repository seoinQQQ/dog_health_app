import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HospitalRecordsScreen() {
  return (
    <View style={styles.container}>
      <Text>Hospital Records Screen</Text>
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
