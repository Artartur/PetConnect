import React from "react";
import { View } from "react-native";

import Login from "./Login";
import { styles } from "../styles/styles";
import Register from "./Register";
export default function Main() {
  return (
    <>
      <View style={styles.container}>
        {/* <Login/> */}
        <Register/>
      </View>
    </>
  );
}
