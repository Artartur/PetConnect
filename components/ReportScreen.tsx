import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

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
  const [isFirstButtonVisible, setFirstButtonVisible] = useState(true);
  const [isSecondButtonVisible, setSecondButtonVisible] = useState(true);
  const [isAddAddress, setAddress] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const handleFirstButtonVisible = () => {
    setFirstButtonVisible(false);
    setSecondButtonVisible(false);
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
              size={24}
            />

            <InputWithIcon
              color={ColorsOptions.gray}
              containerStyle={style.input}
              inputMode={InputModeOptions.email}
              keyboardType={KeyboardTypeOptions.emailaddress}
              name={"mail"}
              placeholder="Email"
              size={24}
            />

            <InputWithIcon
              color={ColorsOptions.gray}
              containerStyle={[style.input, { marginBottom: "4%" }]}
              inputMode={InputModeOptions.numeric}
              keyboardType={KeyboardTypeOptions.numeric}
              name={"phone-portrait"}
              placeholder="Numero do telefone"
              size={24}
            />

            <Select
              fieldMapping={mappingAnimals}
              label={"Selecione uma Opcao"}
              pickerStyle={style.select}
              value={selectedValue}
            />

            {isAddAddress && (
              <>
                <InputWithIcon
                  color={ColorsOptions.gray}
                  containerStyle={style.input}
                  name={"add"}
                  placeholder={"Rua"}
                  size={24}
                />

                <InputWithIcon
                  color={ColorsOptions.gray}
                  containerStyle={style.input}
                  name={"add"}
                  placeholder={"Bairro"}
                  size={24}
                />

                <InputWithIcon
                  color={ColorsOptions.gray}
                  containerStyle={style.input}
                  name={"add"}
                  placeholder={"Cidade"}
                  size={24}
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
              size={24}
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
