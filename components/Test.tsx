import React, { useState, useEffect } from "react";
import { Alert, Text, TextInput, View, PermissionsAndroid } from "react-native";
import Button from "./Button";

export default function Test() {
  const [address, setAddress] = useState("");
  const [bairro, setBairro] = useState("");
  const [cep, setCep] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");

  useEffect(() => {
    checkLocationPermission();
  }, []);

  const checkLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Permissão de Localização",
          message: "Este aplicativo precisa acessar sua localização.",
          buttonNeutral: "Pergunte-me depois",
          buttonNegative: "Cancelar",
          buttonPositive: "OK",
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // Permissão concedida, obter geolocalização
        getLocation();
      } else {
        // Permissão negada
        console.log("Permissão de localização negada");
      }
    } catch (error) {
      console.log("Erro ao verificar permissão de localização:", error);
    }
  };

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log("Latitude:", latitude);
        console.log("Longitude:", longitude);

        // Chamar a API de geocodificação reversa para obter o CEP
        axios
          .get(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=YOUR_API_KEY`
          )
          .then((response) => {
            const result = response.data;
            if (result.status === "OK") {
              const addressComponents = result.results[0].address_components;
              const cepComponent = addressComponents.find((component) =>
                component.types.includes("postal_code")
              );
              const cep = cepComponent
                ? cepComponent.long_name
                : "CEP não encontrado";
              console.log("CEP:", cep);
              setCep(cep); // Atualizar o estado do CEP com o valor obtido
            } else {
              console.log("Erro ao obter o CEP:", result.error_message);
            }
          })
          .catch((error) => {
            console.log("Erro ao obter o CEP:", error.message);
          });
      },
      (error) => {
        console.log("Erro ao obter a localização:", error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  const handleSearch = () => {
    // ...
  };

  return (
    <>
      <View>
        <Text>Nos informe algumas coisinhas:</Text>
        <TextInput
          placeholder="CEP"
          keyboardType="numeric"
          onChangeText={(text) => setCep(text)}
        />
        <Button text="Buscar" onPress={handleSearch} />

        {address ? <Text style={{ marginTop: 10 }}>{address}</Text> : null}
        {bairro ? <Text style={{ marginTop: 10 }}>{bairro}</Text> : null}
        {cidade ? <Text style={{ marginTop: 10 }}>{cidade}</Text> : null}
        {estado ? <Text style={{ marginTop: 10 }}>{estado}</Text> : null}

        {/* <TextInput placeholder="Especie do Animal" />
        <TextInput placeholder="Raca" />
        <TextInput placeholder="Nome" />
        <TextInput placeholder="Contato" />
        <TextInput placeholder="Descricao" /> */}
      </View>
    </>
  );
}
