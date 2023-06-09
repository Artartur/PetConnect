import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Button from "../components/Button";
import Checkbox from "../components/Checkbox";
import InputWithIcon from "../components/InputWithIcon";

import { stylesLogin } from "../../styles/styles";
import { propsStack } from "../../utils/types";
import {
  ColorsOptions,
  KeyboardTypeOptions,
  InputModeOptions,
} from "../../utils/enums";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigation<propsStack>();

  return (
    <>
      <View style={stylesLogin.container}>
        <View>
          <Image source={require("../../assets/logo.png")} />
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
          onPress={() => {
            navigate.navigate("MainScreen");
          }}
        />

        <TouchableOpacity onPress={() => navigate.navigate("Register")}>
          <Text style={stylesLogin.text}>
            Não tem uma conta?{" "}
            <Text style={stylesLogin.markup}>Inscrever-se</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
