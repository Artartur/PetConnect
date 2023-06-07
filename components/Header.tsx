import React from "react";
import { StatusBar, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

import { stylesHeader } from "../styles/styles";
import { Headers, propsStack } from "../utils/types";

export default function Header({ showIcon, text }: Headers) {
  const navigate = useNavigation<propsStack>();

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={stylesHeader.header}>
        {showIcon && (
          <TouchableOpacity
            onPress={() => {
              navigate.goBack();
            }}
            style={stylesHeader.navigator}
          >
            <Ionicons name={"arrow-back"} size={30} color={"#AB8262"} />
          </TouchableOpacity>
        )}
        <Text style={stylesHeader.text}>{text}</Text>
      </View>
    </>
  );
}
