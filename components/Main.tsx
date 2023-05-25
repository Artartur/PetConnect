import React from "react";
import { View } from "react-native";

import Login from "./Login";
import { styles } from "../styles/styles";
import Register from "./Register";
import Test from "./Test";
import MainScreen from "./MainScreen";
import ReportScreen from "./ReportScreen";
export default function Main() {
  return (
    <>
      <View style={styles.container}>
        {/* <Login/> */}
        {/* <MainScreen/> */}
        {/* <Register/> */}
        {/* <Test/> */}
        <ReportScreen/>
      </View>
    </>
  );
}
