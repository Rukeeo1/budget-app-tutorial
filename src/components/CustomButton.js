import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function CustomButton({ title, onPress, titleStyle, wrapperStyle }) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container,wrapperStyle]}>
      <Text style={[styles.title,titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical:8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  title: {
    fontSize: 18
  }
});
