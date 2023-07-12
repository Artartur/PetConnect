import React from "react";
import { ActivityIndicator, View } from "react-native";

export default function Loading(){
    return(
        <View>
            <ActivityIndicator color="gray" size="large"/>
        </View>
    )
}