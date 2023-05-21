import React, { useState } from "react";

import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

import { stylesLogin } from "../styles/styles";

import {
  ColorsOptions,
  KeyboardTypeOptions,
  InputModeOptions,
} from "../types/enums";
import InputWithIcon from "./InputWithIcon";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  return (
    <>
      <View style={stylesLogin.imageContainer}>
        <Image source={require("../assets/logo.png")} />
      </View>

      <InputWithIcon
        color={ColorsOptions.gray}
        keyboardType={KeyboardTypeOptions.emailaddress}
        inputMode={InputModeOptions.email}
        name={"mail"}
        placeholder="Email"
        size={24}
      />

      <InputWithIcon
        color={ColorsOptions.gray}
        keyboardType={KeyboardTypeOptions.default}
        inputMode={InputModeOptions.text}
        name={"lock-closed"}
        placeholder="Senha"
        size={24}
      />

      <View style={stylesLogin.managerAccessContainer}>
        <TouchableOpacity style={stylesLogin.checkBoxContainer}>
          <View style={stylesLogin.checkbox}></View>
          <Text>Lembrar de mim</Text>
        </TouchableOpacity>

        <TouchableOpacity style={stylesLogin.forgotPasswordContainer}>
          <Text>Esqueceu a senha?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={stylesLogin.buttonContainer}>
        <Text style={stylesLogin.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={stylesLogin.text}>
          Não tem uma conta?{" "}
          <Text style={stylesLogin.markup}>Inscrever-se</Text>
        </Text>
      </TouchableOpacity>
    </>
  );
}
