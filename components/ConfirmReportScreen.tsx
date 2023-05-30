import React from "react";
import { Text, View } from "react-native";
import { stylesReportConfirm } from "../styles/styles";
import Header from "./Header";
import Button from "./Button";

export default function ConfirmReportScreen() {
  const handleSubmit = () => {};

  return (
    <>
      <View style={stylesReportConfirm.container}>
        <Header showIcon={true} text={"Detalhes da Denuncia"} />
        <View style={stylesReportConfirm.content}>
          <View style={stylesReportConfirm.contentDatas}>
            <View>
              <Text>Nome do Usuario</Text>
              <Text></Text>
              <Text>Numero do Usuario</Text>
              <Text></Text>
            </View>
            <View>
              <Text>Numero da denuncia</Text>
              <Text></Text>
              <Text>Especie de Animal</Text>
              <Text></Text>
              <Text>Endereco</Text>
              <Text>Rua: </Text>
              <Text>Bairro: </Text>
              <Text>Cidade: </Text>
            </View>
          </View>
          <View>
            <Text>Descricao da denuncia</Text>
            <Text></Text>
          </View>
        </View>
        <Button onPress={handleSubmit} text={"Confirmar Denuncia"} />
      </View>
    </>
  );
}
