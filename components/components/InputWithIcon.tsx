import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, TextInput } from "react-native";
import { stylesInput } from "../../styles/styles";
import { InputWithIcons } from "../../utils/types";

const InputWithIcon = ({
  autoComplete,
  autoCorrect,
  color,
  containerStyle,
  editable,
  iconStyle,
  inputMode,
  keyboardType,
  maxLength,
  multiline,
  name,
  numberOfLines,
  onChangeText,
  placeholder,
  size,
  textInputStyle,
  value,
  ...OtherProps
}: InputWithIcons) => {
  const [inputValue, setInputValue] = useState(value);

  const validateSize = (field: number | undefined): number | undefined => {
    return field === null || field === undefined ? 24 : field;
  };

  const validateColor = (field: string | undefined): string | undefined => {
    return field === "" || field === undefined || field === null
      ? "gray"
      : field;
  };

  const handleInputChange = (text: string) => {
    setInputValue(text);
    if (onChangeText) {
      onChangeText(text);
    }
  };

  const styleContainer = [stylesInput.container, containerStyle];
  const styleInput = [stylesInput.textInput, textInputStyle];
  const styleIcon = [stylesInput.icon, iconStyle];

  return (
    <>
      <View style={styleContainer}>
        <TextInput
          autoCorrect={autoCorrect}
          editable={editable}
          inputMode={inputMode}
          maxLength={maxLength}
          multiline={multiline}
          numberOfLines={numberOfLines}
          onChangeText={handleInputChange}
          keyboardType={keyboardType}
          placeholder={placeholder}
          style={styleInput}
          value={inputValue}
        />

        <Ionicons
          name={name}
          size={validateSize(size)}
          color={validateColor(color)}
          style={styleIcon}
        />
      </View>
    </>
  );
};

export default InputWithIcon;
