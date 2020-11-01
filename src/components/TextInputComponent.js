import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function TextInputComponent({
  label,
  wrapperStyle,
  inputStyle,
  value,
  onChangeText,
  maxLength,
  numberOfLines,
}) {
  return (
    <View style={[styles.titleTextInput, wrapperStyle]}>
      <Text style={{ fontSize: 20 }}>{label}</Text>
      <TextInput
        style={[
          {
            height: 40,
            borderColor: '#ccc',
            borderWidth: 1,
            paddingHorizontal: '2%',
            marginTop: 4,
            borderRadius: 8,
            height: 60,
          },
          inputStyle,
        ]}
        onChangeText={onChangeText}
        value={value}
        maxLength={maxLength}
        numberOfLines={numberOfLines}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  titleTextInput: {
    marginTop: '10%',
  },
});
