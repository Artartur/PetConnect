import React from "react";
import { Text, TouchableOpacity } from "react-native";

import { stylesButton } from "../styles/styles";
import { Buttons } from "../types/types";

export default function ({ text }: Buttons){
  return (
    <>
      <TouchableOpacity style={stylesButton.buttonContainer}>
        <Text style={stylesButton.buttonText}>{text}</Text>
      </TouchableOpacity>
    </>
  );
}
