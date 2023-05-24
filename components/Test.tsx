import React, { useState } from "react";
import { Alert, Text, TextInput, View } from "react-native";
import Button from "./Button";
import * as Location from "expo-location";

export default function Test() {
  const [address, setAddress] = useState("");
  const [bairro, setBairro] = useState("");
  const [cep, setCep] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);

  const handleSearch = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Voce precisa aceitar", "Aceite");
      return;
    }
    try {
      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;
      setLat(latitude);
      setLon(longitude);
    } catch (error) {
      console.log("Erro ao obter a posição:", error);
    }
  };

  return (
    <>
      <View>
        <Text></Text>
        <TextInput
          placeholder="CEP"
          keyboardType="numeric"
          onChangeText={(text) => setCep(text)}
        />
        <Button text={"Buscar"} onPress={handleSearch} />
        <Text style={{fontSize:20}}>Latitude: {lat}</Text>
        <Text style={{fontSize:20}}>Longitude: {lon}</Text>
      </View>
    </>
  );
}
