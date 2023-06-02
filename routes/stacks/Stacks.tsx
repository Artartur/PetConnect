import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AdoptionScreen from "../../components/AdoptionScreen";
import ConfirmReportScreen from "../../components/ConfirmReportScreen";
import Login from "../../components/Login";
import MainScreen from "../../components/MainScreen";
import Register from "../../components/Register";
import ReportScreen from "../../components/ReportScreen";
import { propsNavigationStack } from "../../types/types";

const { Navigator, Screen } = createStackNavigator<propsNavigationStack>();

export default function Stacks() {
  return (
    <>
      <Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
        <Screen name={"AdoptionScreen"} component={AdoptionScreen}/>
        <Screen name={"ConfirmReportScreen"} component={ConfirmReportScreen}/>
        <Screen name={"Login"} component={Login} />
        <Screen name={"MainScreen"} component={MainScreen} />
        <Screen name={"Register"} component={Register} />
        <Screen name={"ReportScreen"} component={ReportScreen} />
      </Navigator>
    </>
  );
}
