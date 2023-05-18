import React, { useState } from "react";

import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { stylesLogin } from '../styles/styles'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <View style={stylesLogin.container}>
        <Image source={require("../assets/logo.png")} />
      </View>

      <TextInput placeholder="Email" style={stylesLogin.textInputEmail} value={email} />

      <TextInput
        placeholder="Password"
        style={stylesLogin.textInputPassword}
        value={password}
      />

      <TouchableOpacity style={stylesLogin.checkBoxContainer}>
        <View style={stylesLogin.checkbox}></View>
        <Text>Lembrar de mim</Text>
        <Text style={stylesLogin.forgotPassword}>
            Esqueceu a senha?
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={stylesLogin.buttonContainer}>
        <Text style={stylesLogin.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <Text style={stylesLogin.text}>
        Não tem uma conta? <Text style={stylesLogin.markup}>Inscrever-se</Text>
      </Text>
    </>
  );
}

