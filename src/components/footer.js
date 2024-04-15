import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>
        Copyright © 2024 Garden Gourmet. All rights reserved.
        Founder & Co-founder : Casandra A. Casicas, Earl John O. Luchin, Jerlyn Tagopa
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#f5f5f5',
    padding: 10,
    paddingBottom: 10,
    alignItems: 'bottom',
    
  },
  text: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});

export default Footer