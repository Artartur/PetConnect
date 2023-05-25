import React, { useState } from "react";
import axios from "axios";
import * as Location from "expo-location";
import { Alert, Text, View } from "react-native";
import Button from "./Button";

export default function Geolocation() {
  const [rua, setRua] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);

  const handleSearch = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permissao negada",
        "Por favor aceite para que saibamos a localizacao do PET"
      );
      return;
    }
    try {
      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;
      setLat(latitude);
      setLon(longitude);
      getAddressFromCoordinates(latitude, longitude);
    } catch (error) {
      console.log("Erro ao obter a posição:", error);
    }
  };

  const getAddressFromCoordinates = async (
    latitude: number,
    longitude: number
  ) => {
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
      );
      const data = response.data;
      if (data && data.address && data.address.postcode) {
        const { road, suburb, city } = data.address;
        setBairro(suburb || "");
        setCidade(city || "");
        setRua(road || "");
      } else {
        setBairro("Bairro nao encontrado");
        setCidade("Cidade nao encontrada");
        setRua("Rua nao encontrada");
      }
    } catch (error) {
      console.log("Erro ao obter o endereço:", error);
    }
  };

  return (
    <>
      <View>
        <Button text={"Buscar"} onPress={handleSearch} />
        <Text style={{ fontSize: 20 }}>Latitude: {lat}</Text>
        <Text style={{ fontSize: 20 }}>Longitude: {lon}</Text>
        <Text style={{ fontSize: 20 }}>Bairro: {bairro}</Text>
        <Text style={{ fontSize: 20 }}>Cidade: {cidade}</Text>
        <Text style={{ fontSize: 20 }}>Rua: {rua}</Text>
      </View>
    </>
  );
}
