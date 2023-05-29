import React from "react";
import { View } from "react-native";

import { StatusBar } from "expo-status-bar";

import Main from "./components/Main";
import Routes from "./routes/Routes";
import { styles } from "./styles/styles";

export default function App() {
  return (
    <>
      {/* <View style={styles.container}> */}
        <StatusBar style="dark" />
        <Routes />
      {/* </View> */}
    </>
  );
}
