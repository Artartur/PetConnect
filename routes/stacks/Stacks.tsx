import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AdoptionScreen from "../../components/screens/AdoptionScreen";
import ConfirmReportScreen from "../../components/screens/ConfirmReportScreen";
import Login from "../../components/screens/Login";
import MainScreen from "../../components/screens/MainScreen";
import Register from "../../components/screens/Register";
import ReportScreen from "../../components/screens/ReportScreen";

import { propsNavigationStack } from "../../utils/types";

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
