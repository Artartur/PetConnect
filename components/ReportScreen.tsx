import React, { useState } from "react";
import axios from "axios";
import * as Location from "expo-location";
import { Alert, ScrollView, StyleSheet, View } from "react-native";

import InputWithIcon from "./InputWithIcon";
import Button from "./Button";
import Header from "./Header";

import {
  Animals,
  ColorsOptions,
  InputModeOptions,
  KeyboardTypeOptions,
} from "../types/enums";

import { stylesReport } from "../styles/styles";
import Select from "./Select";

export default function ReportScreen() {
  const [address, setAddress] = useState(false);
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [isFirstButtonVisible, setFirstButtonVisible] = useState(true);
  const [isSecondButtonVisible, setSecondButtonVisible] = useState(true);
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [rua, setRua] = useState("");
  const [selectedValue, setSelectedValue] = useState("");

  const fetchLocationAndAndress = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status === "granted") {
      try {
        const location = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = location.coords;
        setLat(latitude);
        setLon(longitude);
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
        setBairro(suburb || "");
        setCidade(city || "");
        setRua(road || "");
      } else {
        setBairro("Bairro nao encontrado");
        setCidade("Cidade nao encontrada");
        setRua("Rua nao encontrada");
      }
    } catch (err) {
      Alert.alert("Ops! aconteceu um erro: ", "Endereco nao encontrado");
    }
  };

  const handleFirstButtonVisible = () => {
    setFirstButtonVisible(false);
    setSecondButtonVisible(false);
    fetchLocationAndAndress();
  };

  const handleSecondButtonVisible = () => {
    setFirstButtonVisible(false);
    setSecondButtonVisible(false);
    setAddress(true);
  };

  const handleLocalization = () => {};
  const handleSubmit = () => {};

  const mappingAnimals = [
    { label: Animals.cachorro, value: Animals.cachorro },
    { label: Animals.cavalo, value: Animals.cavalo },
    { label: Animals.galinha, value: Animals.galinha },
    { label: Animals.gato, value: Animals.gato },
    { label: Animals.porco, value: Animals.porco },
    { label: Animals.outro, value: Animals.outro },
  ];
  return (
    <>
      <View style={stylesReport.container}>
        <ScrollView>
          <View style={stylesReport.form}>
            <Header showIcon={true} text={"Nova Denuncia"} />
            <InputWithIcon
              color={ColorsOptions.gray}
              containerStyle={[style.input, { marginTop: "30%" }]}
              inputMode={InputModeOptions.text}
              keyboardType={KeyboardTypeOptions.default}
              name={"md-person"}
              placeholder="Nome"
              size={20}
            />

            <InputWithIcon
              color={ColorsOptions.gray}
              containerStyle={style.input}
              inputMode={InputModeOptions.email}
              keyboardType={KeyboardTypeOptions.emailaddress}
              name={"mail"}
              placeholder="Email"
              size={20}
            />

            <InputWithIcon
              color={ColorsOptions.gray}
              containerStyle={[style.input, { marginBottom: "4%" }]}
              inputMode={InputModeOptions.numeric}
              keyboardType={KeyboardTypeOptions.numeric}
              name={"phone-portrait"}
              placeholder="Numero do telefone"
              size={20}
            />

            <Select
              fieldMapping={mappingAnimals}
              label={"Selecione uma Opcao"}
              pickerStyle={style.select}
              value={selectedValue}
            />

            {address && (
              <>
                <InputWithIcon
                  color={ColorsOptions.gray}
                  containerStyle={style.input}
                  name={"location"}
                  placeholder={"Rua"}
                  size={20}
                />

                <InputWithIcon
                  color={ColorsOptions.gray}
                  containerStyle={style.input}
                  name={"location"}
                  placeholder={"Bairro"}
                  size={20}
                />

                <InputWithIcon
                  color={ColorsOptions.gray}
                  containerStyle={style.input}
                  name={"location"}
                  placeholder={"Cidade"}
                  size={20}
                />
              </>
            )}

            <InputWithIcon
              color={ColorsOptions.gray}
              containerStyle={style.input}
              inputMode={InputModeOptions.text}
              keyboardType={KeyboardTypeOptions.default}
              name={"pencil"}
              placeholder="Descricao"
              size={20}
            />

            <View style={stylesReport.buttons}>
              {isFirstButtonVisible && (
                <Button
                  buttonContainerStyle={style.buttonContainer}
                  buttonTextStyle={style.buttonText}
                  onPress={handleFirstButtonVisible}
                  text={"Inserir endereço com a localizaçao atual"}
                />
              )}

              {isSecondButtonVisible && (
                <Button
                  buttonContainerStyle={style.buttonContainer}
                  buttonTextStyle={style.buttonText}
                  onPress={handleSecondButtonVisible}
                  text={"Inserir endereço manualmente"}
                />
              )}

              <Button
                buttonContainerStyle={style.buttonContainer}
                buttonTextStyle={style.buttonText}
                onPress={handleLocalization}
                text={"Carregar Imagem"}
              />

              <Button
                buttonContainerStyle={style.buttonContainer}
                buttonTextStyle={style.buttonText}
                onPress={handleSubmit}
                text={"Continuar"}
              />
            </View>
          </View>
        </ScrollView>
      </View>
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
  select: {
    height: 30,
  },
});
