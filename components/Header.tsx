import React, { useState } from "react";
import { StatusBar, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { stylesHeader } from "../styles/styles";
import { Headers } from "../types/types";

export default function Header({ showIcon, text }: Headers) {
  const navigate = useNavigation();

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={stylesHeader.header}>
        {showIcon && (
          <TouchableOpacity
            style={stylesHeader.navigator}
            onPress={() => navigate.goBack()}
          >
            <Ionicons name={"arrow-back"} size={30} color={"#AB8262"} />
          </TouchableOpacity>
        )}
        <Text style={stylesHeader.text}>{text}</Text>
      </View>
    </>
  );
}
