import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Card from "./Card";
import { ColorsOptions } from "../types/enums";
import { stylesMainScreen } from "../styles/styles";

import Ionicons from "@expo/vector-icons/Ionicons";
import Header from "./Header";

export default function MainScreen() {
  const iconRotation = [
    { transform: [{ rotate: "-20deg" }] },
    stylesMainScreen.icon,
  ];

  const navigate = useNavigation();

  return (
    <>
      <View style={stylesMainScreen.container}>
        <Header showIcon={false} text={"Home"} />

        <Card text={"Reportar um animal abandonado"} onPress={()=>navigate.navigate("ReportScreen")}>
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
