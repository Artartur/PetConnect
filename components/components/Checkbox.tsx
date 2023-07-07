import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { Checkboxs } from "../../utils/types";
import { stylesCheckbox } from "../../styles/styles";

export default function Checkbox({ text }: Checkboxs) {
  const [checked, setChecked] = useState(false);

  const handleCheckboxPress = () => {
    setChecked(!checked);
  };

  const checkBoxStyle = [
    stylesCheckbox.checkbox,
    { backgroundColor: checked ? "#32CD32" : "transparent" },
  ];

  return (
    <>
      <TouchableOpacity onPress={handleCheckboxPress}>
        <View style={stylesCheckbox.checkBoxContainer}>
          <View style={checkBoxStyle}></View>
          <Text>{text}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
}
