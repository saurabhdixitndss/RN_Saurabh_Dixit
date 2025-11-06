// src/bottom-tab/ReferScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ReferScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>🏠 Refer Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20, fontWeight: '600' },
});
