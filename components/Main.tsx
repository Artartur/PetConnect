import React from "react";

import Login from "./Login";
import { styles } from "../styles/styles";
import { View } from "react-native";
export default function Main() {
  return (
    <>
      <View style={styles.container}>
        <Login/>
      </View>
    </>
  );
}
