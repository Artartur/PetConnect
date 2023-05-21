import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, TextInput } from "react-native";
import { stylesInput } from "../styles/styles";
import { InputWithIcons } from "../types/types";

const InputWithIcon = ({
  autoComplete,
  autoCorrect,
  editable,
  inputMode,
  keyboardType,
  maxLength,
  multiline,
  numberOfLines,
  onChangeText,
  value,
  placeholder,
  name,
  size,
  color,
  ...OtherProps
}: InputWithIcons) => {
  
  const validateSize = (field: number | undefined): number | undefined => {
    return field === null || field === undefined ? 24 : field;
  };

  const validateColor = (field: string | undefined): string | undefined => {
    return field === "" || field === undefined || field === null
      ? "gray"
      : field;
  };

  return (
    <>
      <View style={stylesInput.container}>
      
        <TextInput
          autoCorrect={autoCorrect}
          editable={editable}
          inputMode={inputMode}
          maxLength={maxLength}
          multiline={multiline}
          numberOfLines={numberOfLines}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          placeholder={placeholder}
          style={stylesInput.textInput}
          value={value}
        />

        <Ionicons
          name={name}
          size={validateSize(size)}
          color={validateColor(color)}
          style={stylesInput.icon}
        />

      </View>
    </>
  );
};

export default InputWithIcon;
