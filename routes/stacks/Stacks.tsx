import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../../components/Login";
import MainScreen from "../../components/MainScreen";
import Register from "../../components/Register";
import ReportScreen from "../../components/ReportScreen";
import { propsNavigationStack } from "../../types/types";
import ReportScreenConfirm from "../../components/ReportScreenConfirm";

const { Navigator, Screen } = createStackNavigator<propsNavigationStack>();

export default function Stacks() {
  return (
    <>
      <Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Screen name={"Login"} component={Login} />
        <Screen name={"MainScreen"} component={MainScreen} />
        <Screen name={"Register"} component={Register} />
        <Screen name="ReportScreen" component={ReportScreen} />
        <Screen name={"ReportScreenConfirm"} component={ReportScreenConfirm} />
      </Navigator>
    </>
  );
}
