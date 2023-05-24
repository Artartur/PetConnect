import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { stylesMainScreen } from "../styles/styles";

import Ionicons from "@expo/vector-icons/Ionicons";
import { ColorsOptions } from "../types/enums";

export default function ReportScreen() {
  return (
    <>
      <TouchableOpacity style={stylesMainScreen.navigator}>
        <Ionicons name={"arrow-back"} size={30} color={"#AB8262"} />
      </TouchableOpacity>
      <View>
        <Text>Reportar animal abandonado</Text>
      </View>
      <View>
        <View>
          <Ionicons
            name={"volume-high"}
            color={ColorsOptions.white}
            size={40}
          />
        </View>
        <View>
          <Text>Localizacao da denuncia</Text>
          <View>
            <Ionicons name={"location"} />
            <Text>Endereco aqui</Text>
          </View>
        </View>

        
      </View>
    </>
  );
}
