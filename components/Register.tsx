import React from "react";
import { Image, View } from "react-native";
import Checkbox from "./Checkbox";
import Button from "./Button";
import {
  ColorsOptions,
  InputModeOptions,
  KeyboardTypeOptions,
} from "../types/enums";
import InputWithIcon from "./InputWithIcon";
import Header from "./Header";
import { stylesRegister } from "../styles/styles";

export default function Register() {
  return (
    <>
      <View style={stylesRegister.container}>
        <Header showIcon={true} text={"Cadastro"} />
        <Image
          style={stylesRegister.image}
          source={require("../assets/logo.png")}
        />
        <InputWithIcon
          color={ColorsOptions.gray}
          inputMode={InputModeOptions.text}
          keyboardType={KeyboardTypeOptions.default}
          name={"md-person"}
          placeholder={"Nome"}
          size={24}
        />
        <InputWithIcon
          color={ColorsOptions.gray}
          inputMode={InputModeOptions.email}
          keyboardType={KeyboardTypeOptions.emailaddress}
          name={"mail"}
          placeholder={"Email"}
          size={24}
        />
        <InputWithIcon
          color={ColorsOptions.gray}
          inputMode={InputModeOptions.tel}
          keyboardType={KeyboardTypeOptions.numberpad}
          name={"phone-portrait-outline"}
          placeholder={"Numero de telefone"}
          size={24}
        />
        <InputWithIcon
          color={ColorsOptions.gray}
          inputMode={InputModeOptions.text}
          keyboardType={KeyboardTypeOptions.default}
          name={"lock-closed"}
          placeholder={"Senha"}
          size={24}
        />

        <View style={stylesRegister.checkbox}>
          <Checkbox text={"Li e aceito os termos de uso"} />
        </View>

        <Button text={"Cadastrar"} />
      </View>
    </>
  );
}
