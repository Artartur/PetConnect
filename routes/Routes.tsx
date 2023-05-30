import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Stacks from "./stacks/Stacks";

export default function Routes(){
  return(
    <NavigationContainer>
      <Stacks/>
    </NavigationContainer>
  )
}