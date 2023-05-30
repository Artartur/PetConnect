import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Image, Text, TouchableOpacity, View } from "react-native";

import Checkbox from "./Checkbox";
import Button from "./Button";

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

  const navigation = useNavigation();

  return (
    <>
      <View style={stylesLogin.container}>
        <View>
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
          <Checkbox text={"Lembrar de mim"} />

          <TouchableOpacity>
            <Text>Esqueceu a senha?</Text>
          </TouchableOpacity>
        </View>

        <Button
          text={"Entrar"}
          onPress={() => navigation.navigate("MainScreen")}
        />

        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={stylesLogin.text}>
            Não tem uma conta?{" "}
            <Text style={stylesLogin.markup}>Inscrever-se</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
