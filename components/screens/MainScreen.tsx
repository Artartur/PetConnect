import React from "react";
import { View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

import Card from "../components/Card";
import Header from "../components/Header";

import { ColorsOptions } from "../../utils/enums";
import { stylesMainScreen } from "../../styles/styles";
import { propsStack } from "../../utils/types";

export default function MainScreen() {
  const iconRotation = [
    { transform: [{ rotate: "-20deg" }] },
    stylesMainScreen.icon,
  ];

  const navigate = useNavigation<propsStack>();

  return (
    <>
      <View style={stylesMainScreen.container}>
        <Header showIcon={false} text={"Home"} />

        <Card onPress={()=>navigate.navigate("ReportScreen")} text={"Reportar um animal abandonado"}>
          <Ionicons
            style={iconRotation}
            name={"volume-high"}
            size={40}
            color={ColorsOptions.white}
          />
        </Card>

        <Card onPress={()=>navigate.navigate("AdoptionScreen")} text={"Adotar um Pet"}>
          <Ionicons
            style={stylesMainScreen.icon}
            name={"search"}
            size={40}
            color={ColorsOptions.white}
          />
        </Card>

        <Card onPress={()=>navigate.navigate("StatusScreen")} text={"Status de animais reportados"}>
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
