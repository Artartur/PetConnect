import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styleMainScreen } from "../styles/styles";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function MainScreen() {
  return (
    <>
      <TouchableOpacity style={styleMainScreen.navigator}>
        <Ionicons name={"arrow-back"} size={30} color={"#AB8262"} />
      </TouchableOpacity>
      <View style={styleMainScreen.container}>
        <TouchableOpacity style={styleMainScreen.view}>
          <View>
            <Ionicons style={styleMainScreen.icon} name={"volume-high"} size={30} color={"white"} />
            <Text>Reportar Animal Abandonado</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styleMainScreen.view}>
          <View>
            <Ionicons name={"search"} size={30} color={"white"} />
            <Text>Adotar um Pet</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styleMainScreen.view}>
          <View>
            <Ionicons name={"analytics"} size={30} color={"white"} />
            <Text>Ver status de animal reportado</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}
