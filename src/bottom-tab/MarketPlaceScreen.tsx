// src/bottom-tab/MarketPlaceScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MarketPlaceScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>🏠 MarketPlace Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20, fontWeight: '600' },
});
