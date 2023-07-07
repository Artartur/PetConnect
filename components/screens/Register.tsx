import React from "react";
import { Image, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Button from "../components/Button";
import Checkbox from "../components/Checkbox";
import Header from "../components/Header";
import InputWithIcon from "../components/InputWithIcon";

import {
  ColorsOptions,
  InputModeOptions,
  KeyboardTypeOptions,
} from "../../utils/enums";
import { stylesRegister } from "../../styles/styles";
import { propsStack } from "../../utils/types";

export default function Register() {

  const navigate = useNavigation<propsStack>();

  return (
    <>
      <View style={stylesRegister.container}>
        <Header showIcon={true} text={"Cadastro"} />
        <Image
          style={stylesRegister.image}
          source={require("../../assets/logo.png")}
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

        <Button text={"Cadastrar"} onPress={()=>navigate.navigate("Login")} />
      </View>
    </>
  );
}
