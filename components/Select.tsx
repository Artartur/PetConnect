import React from "react";
import { StyleSheet, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Selects } from "../types/types";
import { stylesSelect } from "../styles/styles";

export default function Select({ containerStyle, fieldMapping, label, pickerStyle, value }: Selects) {
  
    const styleContainer = [stylesSelect.container, containerStyle]
    const stylePicker = [stylesSelect.picker, pickerStyle]

    return (
    <>
      <View style={styleContainer}>
        <Picker selectedValue={value} style={stylePicker}>
          <Picker.Item label={"Escolha uma opcao"} value={""}/>
          {fieldMapping.map((item, index) => (
            <Picker.Item key={index} label={item.label} value={item.value} />
          ))}
        </Picker>
      </View>
    </>
  );
}
