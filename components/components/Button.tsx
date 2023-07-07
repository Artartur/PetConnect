import React from "react";
import { Text, TouchableOpacity } from "react-native";

import { Buttons } from "../../utils/types";
import { stylesButton } from "../../styles/styles";

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
