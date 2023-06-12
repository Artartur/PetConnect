import React, { useState } from "react";
import { Alert, StyleSheet } from "react-native";
import * as Location from "expo-location";
import axios from "axios";
import Button from "./Button";
import InputWithIcon from "./InputWithIcon";

import { ColorsOptions } from "../../utils/enums";

export default function LocationAddress(
  {
    onSelectLocation
  }: {
    onSelectLocation: (city: string, road: string, suburb: string) => void;
  }
) {
  const data = {
    city: "",
    road: "",
    suburb: "",
  };

  const [address, setAddress] = useState(data);

  const [buttonVisibility, setButtonVisibility] = useState({
    firstButton: true,
    secondButton: true,
  });

  const [showButtons, setShowButtons] = useState(false);

  const handleInputChange = (name: string, value: string) => {
    setAddress((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const fetchLocationAndAndress = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status === "granted") {
      try {
        const location = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = location.coords;
        getAddressFromCoordinates(latitude, longitude);
      } catch (err: any) {
        Alert.alert(
          "Ops! aconteceu um erro:",
          "A solicitacao de localizacao foi negada, favor permitir ou apertar o botao para inserir manualmente o endereco"
        );
      }
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
        const { city, road, suburb } = data.address;

        setAddress((prevData) => ({
          ...prevData,
          city: city || "",
          road: road || "",
          suburb: suburb || "",
        }));

        onSelectLocation(city || "", road || "", suburb || "");
      } else {
        setAddress((prevData) => ({
          ...prevData,
          city: "Cidade não encontrada",
          road: "Rua não encontrada",
          suburb: "Bairro não encontrado",
        }));
        onSelectLocation("Cidade não encontrada", "Rua não encontrada", "Bairro não encontrado");
      }
    } catch (err) {
      Alert.alert("Ops! aconteceu um erro: ", "Endereco nao encontrado");
    }
  };

  const handleFirstButtonPress = () => {
    setButtonVisibility({
      firstButton: false,
      secondButton: false,
    });
    fetchLocationAndAndress();
  };

  const handleSecondButtonPress = () => {
    setButtonVisibility({
      firstButton: false,
      secondButton: false,
    });
    setShowButtons(true);
  };

  return (
    <>
      {showButtons && (
        <>
          <InputWithIcon
            color={ColorsOptions.gray}
            containerStyle={style.input}
            name={"location"}
            onChangeText={(value: string) => handleInputChange("road", value)}
            placeholder={"Rua"}
            size={20}
            value={data.road}
          />

          <InputWithIcon
            color={ColorsOptions.gray}
            containerStyle={style.input}
            name={"location"}
            onChangeText={(value: string) => handleInputChange("suburb", value)}
            placeholder={"Bairro"}
            size={20}
            value={data.suburb}
          />

          <InputWithIcon
            color={ColorsOptions.gray}
            containerStyle={style.input}
            name={"location"}
            onChangeText={(value: string) => handleInputChange("city", value)}
            placeholder={"Cidade"}
            size={20}
            value={data.city}
          />
        </>
      )}

      {buttonVisibility.firstButton && (
        <Button
          buttonContainerStyle={style.buttonContainer}
          buttonTextStyle={style.buttonText}
          onPress={handleFirstButtonPress}
          text={"Inserir endereço com a localizaçao atual"}
        />
      )}

      {buttonVisibility.secondButton && (
        <Button
          buttonContainerStyle={style.buttonContainer}
          buttonTextStyle={style.buttonText}
          onPress={handleSecondButtonPress}
          text={"Inserir endereço manualmente"}
        />
      )}
    </>
  );
}

const style = StyleSheet.create({
  buttonContainer: {
    height: 50,
  },

  buttonText: {
    fontSize: 16,
  },

  input: {
    height: 20,
    marginBottom: "10%",
  },
});
