import React from "react";
import { View, Text } from "react-native";
import InputWithIcon from "./InputWithIcon";
import {
  ColorsOptions,
  InputModeOptions,
  KeyboardTypeOptions,
} from "../types/enums";
import Button from "./Button";
import { stylesReport } from "../styles/styles";

export default function ReportScreen() {
  const handleLocalization = () => {};
  const handleSubmit = () => {};
  return (
    <>
      <View style={stylesReport.container}>
        <Text>Nova Denuncia</Text>
        <InputWithIcon
          color={ColorsOptions.gray}
          inputMode={InputModeOptions.text}
          keyboardType={KeyboardTypeOptions.default}
          name={"md-person"}
          placeholder="Nome"
          size={24}
        />
        <InputWithIcon
          color={ColorsOptions.gray}
          inputMode={InputModeOptions.email}
          keyboardType={KeyboardTypeOptions.emailaddress}
          name={"mail"}
          placeholder="Email"
          size={24}
        />
        <InputWithIcon
          color={ColorsOptions.gray}
          inputMode={InputModeOptions.numeric}
          keyboardType={KeyboardTypeOptions.numeric}
          name={"phone-portrait"}
          placeholder="Numero do telefone"
          size={24}
        />

        <View style={stylesReport.buttonView}>
          <Button
            onPress={handleLocalization}
            text={"Permitir Localização Atual"}
          />
          <Button onPress={handleLocalization} text={"Inserir Endereço"} />
          <Button onPress={handleLocalization} text={"Carregar Imagem"} />
        </View>

        <InputWithIcon
          color={ColorsOptions.gray}
          inputMode={InputModeOptions.text}
          keyboardType={KeyboardTypeOptions.default}
          multiline={true}
          name={"pencil"}
          numberOfLines={3}
          placeholder="Descricao"
          size={24}
        />

        <Button onPress={handleSubmit} text={"Continuar"} />
      </View>
    </>
  );
}
