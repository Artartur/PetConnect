import React from "react";
import { Text, TouchableOpacity } from "react-native";

import { stylesButton } from "../styles/styles";
import { Buttons } from "../types/types";

export default function ({ text, onPress}: Buttons){
  return (
    <>
      <TouchableOpacity style={stylesButton.buttonContainer} onPress={onPress}>
        <Text style={stylesButton.buttonText}>{text}</Text>
      </TouchableOpacity>
    </>
  );
}