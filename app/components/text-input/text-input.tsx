import React from "react";
import { View, TextInput } from "react-native";
import { palette } from "../../theme";
import { styles } from "./styles";

interface InputProps {
  value: string;
  placeHolder: string;
  onChangeText: (newValue: string) => void;
}

export const Input: React.FC<InputProps> = ({ value, placeHolder, onChangeText }) => {

  return (
    <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      placeholder={placeHolder}
      placeholderTextColor={palette.grey}
      underlineColorAndroid="transparent"
      value={value}
      editable
      maxLength={40}
    />
  );
};
