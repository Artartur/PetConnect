import React from "react";
import { Text, TouchableOpacity } from "react-native";

import { stylesButton } from "../../styles/styles";
import { Buttons } from "../../utils/types";

export default function ({
  buttonContainerStyle,
  buttonTextStyle,
  text,
  onPress,
}: Buttons) {
  const styleContainer = [stylesButton.buttonContainer, buttonContainerStyle];
  const styleText = [stylesButton.buttonText, buttonTextStyle];

  return (
    <>
      <TouchableOpacity style={styleContainer} onPress={onPress}>
        <Text style={styleText}>{text}</Text>
      </TouchableOpacity>
    </>
  );
}
