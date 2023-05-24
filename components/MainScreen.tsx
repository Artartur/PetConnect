import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { stylesMainScreen } from "../styles/styles";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function MainScreen() {

    const iconRotation = [{transform: [{rotate: '-20deg'}]}, stylesMainScreen.icon]

  return (
    <>
      <TouchableOpacity style={stylesMainScreen.navigator}>
        <Ionicons name={"arrow-back"} size={30} color={"#AB8262"} />
      </TouchableOpacity>
      <View style={stylesMainScreen.container}>
        <TouchableOpacity style={stylesMainScreen.card}>
          <View style={stylesMainScreen.view}>
            <Ionicons
              style={iconRotation}
              name={"volume-high"}
              size={40}
              color={"white"}
            />
            <Text>Reportar Animal Abandonado</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={stylesMainScreen.card}>
          <View style={stylesMainScreen.view}>
            <Ionicons
              style={stylesMainScreen.icon}
              name={"search"}
              size={40}
              color={"white"}
            />
            <Text>Adotar um Pet</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={stylesMainScreen.card}>
          <View style={stylesMainScreen.view}>
            <Ionicons
              style={stylesMainScreen.icon}
              name={"analytics"}
              size={40}
              color={"white"}
            />
            <Text>Ver status de animal reportado</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}
