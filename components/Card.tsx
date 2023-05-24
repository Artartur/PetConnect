import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Cards } from "../types/types";
import { stylesCard } from "../styles/styles";

export default function Card({ children, text }: Cards) {
  return (
    <>
      <TouchableOpacity style={stylesCard.container}>
        <View style={stylesCard.view}>
          {children}
          <Text>{text}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
}
