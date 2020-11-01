import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function CustomCheckBox({ checked }) {
  return (
    <View>
      {checked ? (
        <Feather name="check-circle" size={24} color="green" />
      ) : (
        <Feather name="circle" size={24} color="black" />
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
