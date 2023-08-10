import React from "react";
import { Alert, Image, Text, View } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import api from "../../server/axios";

import Button from "../components/Button";
import Header from "../components/Header";

import { propsStack } from "../../utils/types";
import { reportAPI } from "../../server/reportAPI";
import { stylesReportConfirm } from "../../styles/styles";

interface FormData {
  animal: string;
  city: string;
  email: string;
  name: string;
  phone: string;
  description: string;
  picture: string;
  road: string;
  suburb: string;
}

type RootStackParamList = {
  ReportConfirm: { formData: FormData };
};

type ReportConfirmRouteProp = RouteProp<RootStackParamList, "ReportConfirm">;

export default function ReportScreenConfirm() {
  const navigate = useNavigation<propsStack>();
  const route = useRoute<ReportConfirmRouteProp>();
  const { formData } = route.params;
  const { picture } = formData;

  const handleSubmit = () => {
    api
      .post(reportAPI, {
        Animal: formData.animal,
        City: formData.city,
        Description: formData.description,
        Email: formData.email,
        Name: formData.name,
        Phone: formData.phone,
        Picture: picture,
        Road: formData.road,
        Suburb: formData.suburb,
      })
      .then(() => {
        Alert.alert("Denuncia feita com sucesso");
        navigate.navigate("MainScreen")
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <View style={stylesReportConfirm.container}>
        <Header showIcon={true} text={"Detalhes da Denuncia"} />
        <View style={stylesReportConfirm.content}>
          <View style={stylesReportConfirm.contentDatas}>
            <View>
              <Text style={stylesReportConfirm.title}>Nome:</Text>
              <Text style={stylesReportConfirm.data}>{formData.name}</Text>
              <Text style={stylesReportConfirm.title}>Numero:</Text>
              <Text style={stylesReportConfirm.data}>{formData.phone}</Text>
              <Text style={stylesReportConfirm.title}>Email</Text>
              <Text>{formData.email}</Text>
            </View>
            <View>
              <Text style={stylesReportConfirm.title}>Numero da denuncia:</Text>
              <Text style={stylesReportConfirm.data}></Text>
              <Text style={stylesReportConfirm.title}>Especie de Animal:</Text>
              <Text>{formData.animal}</Text>
            </View>
          </View>
          <View style={stylesReportConfirm.contentDescription}>
            <Text style={stylesReportConfirm.title}>
              Descricao da denuncia:
            </Text>
            <Text>{formData.description}</Text>
          </View>
          <Image
            source={{ uri: picture }}
            style={{ width: 200, height: 200 }}
          />
        </View>

        <Button onPress={handleSubmit} text={"Confirmar Denuncia"} />
      </View>
    </>
  );
}
