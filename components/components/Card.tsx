import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { Cards } from "../../utils/types";
import { stylesCard } from "../../styles/styles";

export default function Card({ containerStyle, children, onPress, text, viewStyle }: Cards) {
  
  const styleContainer = [stylesCard.container, containerStyle]
  const styleView = [stylesCard.view, viewStyle]

  return (
    <>
      <TouchableOpacity style={styleContainer} onPress={onPress}>
        <View style={styleView}>
          {children}
          <Text>{text}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
}
