import React from "react";
import { TouchableOpacity, View } from "react-native";

import Card from "./Card";
import { ColorsOptions } from "../types/enums";
import { stylesMainScreen } from "../styles/styles";

import Ionicons from "@expo/vector-icons/Ionicons";

export default function MainScreen() {
  const iconRotation = [
    { transform: [{ rotate: "-20deg" }] },
    stylesMainScreen.icon,
  ];

  return (
    <>
      <TouchableOpacity style={stylesMainScreen.navigator}>
        <Ionicons name={"arrow-back"} size={30} color={"#AB8262"} />
      </TouchableOpacity>

      <View style={stylesMainScreen.container}>
        <Card text={"Reportar um animal abandonado"}>
          <Ionicons
            style={iconRotation}
            name={"volume-high"}
            size={40}
            color={ColorsOptions.white}
          />
        </Card>

        <Card text={"Adotar um Pet"}>
          <Ionicons
            style={stylesMainScreen.icon}
            name={"search"}
            size={40}
            color={ColorsOptions.white}
          />
        </Card>

        <Card text={"Status de animais reportados"}>
          <Ionicons
            style={stylesMainScreen.icon}
            name={"analytics"}
            size={40}
            color={ColorsOptions.white}
          />
        </Card>

      </View>
    </>
  );
}
