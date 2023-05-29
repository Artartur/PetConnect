import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import Login from "../../components/Login";
import Register from "../../components/Register";
import MainScreen from "../../components/MainScreen";
import ReportScreen from "../../components/ReportScreen";

const { Navigator, Screen} = createStackNavigator();

export default function Stacks(){
    return(
        <>
            <Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
                <Screen name={"Login"} component={Login}/>
                <Screen name={"Register"} component={Register}/>
                <Screen name={"MainScreen"} component={MainScreen}/>
                <Screen name={"ReportScreen"} component={ReportScreen}/>
            </Navigator>
        </>
    )
}