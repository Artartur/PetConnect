import React from "react";
import { View } from "react-native";

import Login from "./Login";
import { styles } from "../styles/styles";
import Register from "./Register";
import MainScreen from "./MainScreen";
import Card from "./Card";
import ReportScreen from "./ReportScreen";
import Test from "./Test";
export default function Main() {
  return (
    <>
      <View style={styles.container}>
        {/* <Login/> */}
        {/* <Register/> */}
        {/* <MainScreen/> */}
        {/* <ReportScreen/> */}
        <Test/>
      </View>
    </>
  );
}
