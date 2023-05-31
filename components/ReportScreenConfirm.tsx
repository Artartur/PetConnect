import React from "react";
import { Image, Text, View } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";

import Header from "./Header";
import Button from "./Button";

import { stylesReportConfirm } from "../styles/styles";
import { propsStack } from "../types/types";

interface FormData {
  name: string;
  phone: string;
  animal: string;
  address: {
    road: string;
    suburb: string;
    city: string;
  };
  description: string;
  picture: string;
}

type RootStackParamList = {
  ReportConfirm: { formData: FormData };
};

type ReportConfirmRouteProp = RouteProp<RootStackParamList, "ReportConfirm">;

export default function ReportScreenConfirm() {
  const handleSubmit = () => {};

  const navigate = useNavigation<propsStack>();
  const route = useRoute<ReportConfirmRouteProp>();
  const { formData } = route.params;
  const { picture } = formData;

  return (
    <>
      <View style={stylesReportConfirm.container}>
        <Header showIcon={true} text={"Detalhes da Denuncia"} />
        <View style={stylesReportConfirm.content}>
          <View style={stylesReportConfirm.contentDatas}>
            <View>
              <Text>Nome do Usuario</Text>
              <Text>{formData.name}</Text>
              <Text>Numero do Usuario</Text>
              <Text>{formData.phone}</Text>
            </View>
            <View>
              <Text>Numero da denuncia</Text>
              <Text></Text>
              <Text>Especie de Animal</Text>
              <Text>{formData.animal}</Text>
              <Text>Endereco</Text>
              <Text>Rua: {formData.address.road}</Text>
              <Text>Bairro: {formData.address.suburb}</Text>
              <Text>Cidade: {formData.address.city}</Text>
            </View>
          </View>
          <View>
            <Text>Descricao da denuncia</Text>
            <Text>{formData.description}</Text>
            <Image source={{uri: picture}} style={{width: 200, height: 200}}/>
          </View>
        </View>
        <Button onPress={handleSubmit} text={"Confirmar Denuncia"} />
      </View>
    </>
  );
}
