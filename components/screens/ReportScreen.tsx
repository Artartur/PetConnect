import React, { useState } from "react";
import { Alert, ScrollView, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Button from "../components/Button";
import Header from "../components/Header";
import ImagePickerCard from "../components/ImagePickerCard";
import InputWithIcon from "../components/InputWithIcon";
import LocationAddress from "../components/LocationAddress";
import ModalComponent from "../components/Modals";
import Select from "../components/Select";

import {
  Animals,
  ColorsOptions,
  InputModeOptions,
  KeyboardTypeOptions,
} from "../../utils/enums";
import { propsStack } from "../../utils/types";
import { stylesReport } from "../../styles/styles";

export default function ReportScreen() {
  const [selectedImage, setSelectedImage] = useState("");
  const [data, setData] = useState({
    city: "",
    animal: "",
    description: "",
    email: "",
    name: "",
    phone: "",
    picture: selectedImage,
    road: "",
    suburb: "",
  });

  const [modalVisibility, setModalVisibility] = useState(false);

  const navigate = useNavigation<propsStack>();

  const closeModal = () => {
    setModalVisibility(false);
  };

  const handleInputChange = (name: string, value: string) => {
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLocationAddress = (
    city: string,
    road: string,
    suburb: string
  ) => {
    setData((prevData) => ({
      ...prevData,
      city: city,
      road: road,
      suburb: suburb,
    }));
  };

  const handleSelectImage = (image: string) => {
    setSelectedImage(image);
    setData((prevData) => ({
      ...prevData,
      picture: image,
    }));
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

  const onSubmit = () => {
    if (data.name === "" || data.email === "" || data.phone === "") {
      Alert.alert("Preecha todos os campos obrigatorios");
      return;
    }

    const formData = {
      city: data.city,
      animal: data.animal,
      description: data.description,
      email: data.email,
      name: data.name,
      phone: data.phone,
      picture: selectedImage,
      road: data.road,
      suburb: data.suburb,
    };

    navigate.navigate("ConfirmReportScreen", { formData });
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
            <LocationAddress onSelectLocation={handleLocationAddress} />
            <View style={stylesReport.buttons}>
              {modalVisibility && (
                <ModalComponent visible={true} onClose={closeModal}>
                  <ImagePickerCard onSelectImage={handleSelectImage} />
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
