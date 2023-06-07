import React, { useState } from "react";
import axios from "axios";
import * as Location from "expo-location";
import * as ImagePicker from "expo-image-picker";
import { Alert, ScrollView, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import InputWithIcon from "./InputWithIcon";
import Button from "./Button";
import Header from "./Header";
import Card from "./Card";
import ModalComponent from "./Modals";
import Select from "./Select";

import {
  Animals,
  ColorsOptions,
  InputModeOptions,
  KeyboardTypeOptions,
} from "../utils/enums";
import { propsStack } from "../utils/types";
import { stylesReport } from "../styles/styles";

export default function ReportScreen() {
  const [buttonVisibility, setButtonVisibility] = useState({
    firstButton: true,
    secondButton: true,
  });

  const [selectedImage, setSelectedImage] = useState("");
  const [data, setData] = useState({
    address: {
      city: "",
      road: "",
      suburb: "",
    },
    animal: "",
    description: "",
    email: "",
    name: "",
    phone: "",
    picture: selectedImage,
  });

  const [showButtons, setShowButtons] = useState(false);
  const [modalVisibility, setModalVisibility] = useState(false);

  const navigate = useNavigation<propsStack>();

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
        setData((prevData) => ({
          ...prevData,
          address: {
            city: city || "",
            road: road || "",
            suburb: suburb || "",
          },
        }));
      } else {
        setData((prevData) => ({
          ...prevData,
          address: {
            city: "Cidade não encontrada",
            road: "Rua não encontrada",
            suburb: "Bairro não encontrado",
          },
        }));
      }
    } catch (err) {
      Alert.alert("Ops! aconteceu um erro: ", "Endereco nao encontrado");
    }
  };

  const handleInputChange = (name: string, value: string) => {
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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

  const handleSelectChange = (value: string) => {
    setData((prevData) => ({
      ...prevData,
      animal: value,
    }));
  };

  const openModal = () => {
    setModalVisibility(true);
  };

  const closeModal = () => {
    setModalVisibility(false);
  };

  const onSubmit = () => {
    if (data.name === "" || data.email === "" || data.phone === "") {
      Alert.alert("Preecha todos os campos obrigatorios");
      return;
    }

    const formData = {
      address: {
        city: data.address.city,
        road: data.address.road,
        suburb: data.address.suburb,
      },
      animal: data.animal,
      description: data.description,
      email: data.email,
      name: data.name,
      phone: data.phone,
      picture: selectedImage,
    };

    navigate.navigate("ConfirmReportScreen", { formData });
  };

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Ops! aconteceu um erro",
        "A solicitacao para acessar sua galeira foi recusada, por favor aceite"
      );
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [200, 200],
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  const takePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Ops! aconteceu um erro",
        "A solicitacao para acessar sua galeira foi recusada, por favor aceite"
      );
      return;
    }
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

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
              onChangeText={(value: string) => handleInputChange("name", value)}
              placeholder="Nome"
              size={20}
              value={data.name}
            />

            <InputWithIcon
              color={ColorsOptions.gray}
              containerStyle={style.input}
              inputMode={InputModeOptions.email}
              keyboardType={KeyboardTypeOptions.emailaddress}
              name={"mail"}
              onChangeText={(value: string) =>
                handleInputChange("email", value)
              }
              placeholder="Email"
              size={20}
              value={data.email}
            />

            <InputWithIcon
              color={ColorsOptions.gray}
              containerStyle={[style.input, { marginBottom: "4%" }]}
              inputMode={InputModeOptions.numeric}
              keyboardType={KeyboardTypeOptions.numeric}
              name={"phone-portrait"}
              onChangeText={(value: string) =>
                handleInputChange("phone", value)
              }
              placeholder="Numero do telefone"
              size={20}
              value={data.phone}
            />

            <Select
              fieldMapping={mappingAnimals}
              label={"Selecione uma Opcao"}
              onChange={handleSelectChange}
              pickerStyle={style.select}
              value={data.animal}
            />

            {showButtons && (
              <>
                <InputWithIcon
                  color={ColorsOptions.gray}
                  containerStyle={style.input}
                  name={"location"}
                  onChangeText={(value: string) =>
                    handleInputChange("road", value)
                  }
                  placeholder={"Rua"}
                  size={20}
                  value={data.address.road}
                />

                <InputWithIcon
                  color={ColorsOptions.gray}
                  containerStyle={style.input}
                  name={"location"}
                  onChangeText={(value: string) =>
                    handleInputChange("suburb", value)
                  }
                  placeholder={"Bairro"}
                  size={20}
                  value={data.address.suburb}
                />

                <InputWithIcon
                  color={ColorsOptions.gray}
                  containerStyle={style.input}
                  name={"location"}
                  onChangeText={(value: string) =>
                    handleInputChange("city", value)
                  }
                  placeholder={"Cidade"}
                  size={20}
                  value={data.address.city}
                />
              </>
            )}

            <InputWithIcon
              color={ColorsOptions.gray}
              containerStyle={style.input}
              inputMode={InputModeOptions.text}
              keyboardType={KeyboardTypeOptions.default}
              name={"pencil"}
              onChangeText={(value: string) =>
                handleInputChange("description", value)
              }
              placeholder="Descricao"
              size={20}
              value={data.description}
            />

            <View style={stylesReport.buttons}>
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

              {modalVisibility && (
                <ModalComponent visible={true} onClose={closeModal}>
                  <Card
                    containerStyle={style.containerCard}
                    onPress={pickImage}
                    text="Carregar Imagem"
                  />

                  <Card
                    containerStyle={style.containerCard}
                    onPress={takePhoto}
                    text="Tirar Foto"
                  />
                </ModalComponent>
              )}

              <Button
                buttonContainerStyle={style.buttonContainer}
                buttonTextStyle={style.buttonText}
                onPress={openModal}
                text={"Carregar Imagem"}
              />

              <Button
                buttonContainerStyle={style.buttonContainer}
                buttonTextStyle={style.buttonText}
                onPress={onSubmit}
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

  containerCard: {
    height: "20%",
    width: "90%",
  },

  input: {
    height: 20,
    marginBottom: "10%",
  },
  select: {
    height: 30,
  },
});
