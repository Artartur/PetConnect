import React, { useState } from "react";
import {
  StyleSheet,
  View,
} from "react-native";

import InputWithIcon from "./InputWithIcon";
import Button from "./Button";
import Header from "./Header";

import {
  ColorsOptions,
  InputModeOptions,
  KeyboardTypeOptions,
} from "../types/enums";

import { stylesReport } from "../styles/styles";

export default function ReportScreen() {
  const [isFirstButtonVisible, setFirstButtonVisible] = useState(true);
  const [isSecondButtonVisible, setSecondButtonVisible] = useState(true);
  const [isAddAddress, setAddress] = useState(false);
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
  return (
    <>
      <View style={stylesReport.container}>
        <Header showIcon={true} text={"Nova Denuncia"} />
        <View style={stylesReport.form}>
          <InputWithIcon
            color={ColorsOptions.gray}
            containerStyle={[style.input, { marginTop: "20%" }]}
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
            containerStyle={style.input}
            inputMode={InputModeOptions.numeric}
            keyboardType={KeyboardTypeOptions.numeric}
            name={"phone-portrait"}
            placeholder="Numero do telefone"
            size={24}
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

          {isFirstButtonVisible && (
            <Button
              buttonContainerStyle={style.buttonContainer}
              buttonTextStyle={style.buttonText}
              onPress={handleFirstButtonVisible}
              text={"Preencher com a localização atual"}
            />
          )}

          {isSecondButtonVisible && (
            <Button
              buttonContainerStyle={style.buttonContainer}
              buttonTextStyle={style.buttonText}
              onPress={handleSecondButtonVisible}
              text={"Inserir Endereço"}
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
    marginBottom: "12%",
  },
});
