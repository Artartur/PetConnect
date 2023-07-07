import React, { useState } from "react";
import { Alert, Image, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import Header from "../components/Header";
import Button from "../components/Button";
import ModalComponent from "../components/Modals";

import { stylesAdoption } from "../../styles/styles";
import { ColorsOptions } from "../../utils/enums";

interface Card {
  age: number;
  color: string;
  icon: keyof typeof Ionicons.glyphMap;
  name: string;
  raca: string;
}

export default function AdoptionScreen() {
  const [modalVisibility, setModalVisibility] = useState(false);

  const closeModal = () => {
    setModalVisibility(false);
    Alert.alert(
      "Ihuuu!!!",
      "Enviaremos para voce um email onde voce devera ir para conhecer seu novo melhor amigo."
    );
  };

  const handleSubmit = () => {
    openModal();
  };

  const openModal = () => {
    setModalVisibility(true);
  };

  return (
    <>
      <View style={stylesAdoption.container}>
        <Header showIcon={true} text={"Adotar"} />
        <View style={stylesAdoption.image}>
          <Image
            source={require("../../assets/caramelo.jpeg")}
            style={{ width: 390, height: 300 }}
          />
          <Card
            age={7}
            color={ColorsOptions.blue}
            icon={"male"}
            name={"Bob"}
            raca={"Vira-lata"}
          />
        </View>
        <View style={stylesAdoption.label}>
          <Text style={{ fontSize: 20 }}>Conheça Bob!</Text>
        </View>
        <View style={stylesAdoption.description}>
          <Text>
            Sou um cachorro bem sapeca, não tenho uma raça definida e tenho
            muito amor para dar. Tenho 7 anos. Sou vacinado, vermifugado e
            felizmente não tenho nenhuma doença. Adoro brincar jogando bolinha.
          </Text>
        </View>
        <View style={stylesAdoption.informations}>
          <View>
            <Text style={stylesAdoption.text}>Tipo: Cachorro</Text>
            <Text style={stylesAdoption.text}>Raca: Vira-lata</Text>
            <Text style={stylesAdoption.text}>Porte: Medio</Text>
          </View>
          <View>
            <View style={stylesAdoption.age}>
              <Text style={[stylesAdoption.text, { marginRight: 5 }]}>
                Vacinado
              </Text>
              <Ionicons
                color={ColorsOptions.gray}
                name={"checkmark"}
                size={20}
                style={{ marginRight: 2 }}
              />
            </View>
            <View style={stylesAdoption.age}>
              <Text style={[stylesAdoption.text, { marginRight: 5 }]}>
                Castrado
              </Text>
              <Text
                style={[stylesAdoption.text, { color: ColorsOptions.gray }]}
              >
                X
              </Text>
            </View>
            <View style={stylesAdoption.age}>
              <Text style={[stylesAdoption.text, { marginRight: 5 }]}>
                Vermifugado
              </Text>
              <Ionicons
                color={ColorsOptions.gray}
                name={"checkmark"}
                size={20}
                style={{ marginRight: 2 }}
              />
            </View>
          </View>
        </View>
        {modalVisibility && (
          <ModalComponent
            buttonText="Adotar"
            visible={true}
            onClose={closeModal}
          >
            <View>
              <Text
                style={{
                  alignItems: "center",
                  marginVertical: "5%",
                  textAlign: "center",
                }}
              >
                Termo de Adoção Responsável
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Laoreet sit amet cursus sit. Id donec ultrices tincidunt arcu.
                Id interdum velit laoreet id donec ultrices tincidunt arcu non.
                Felis bibendum ut tristique et egestas quis ipsum suspendisse
                ultrices. Curabitur gravida arcu ac tortor dignissim convallis.
                Dui ut ornare lectus sit amet est. At auctor urna nunc id cursus
                metus aliquam eleifend mi. Facilisis mauris sit amet massa vitae
                tortor condimentum lacinia. Pharetra sit amet aliquam id diam.
                Congue quisque egestas diam in arcu cursus euismod quis.
              </Text>
            </View>
          </ModalComponent>
        )}
        <Button
          buttonContainerStyle={{ height: 50 }}
          onPress={handleSubmit}
          text={"Adotar"}
        />
      </View>
    </>
  );
}

const Card = ({ age, color, icon, name, raca }: Card) => {
  return (
    <>
      <View style={stylesAdoption.card}>
        <View>
          <Text style={stylesAdoption.text}>{name}</Text>
          <Text style={stylesAdoption.text}>{raca}</Text>
        </View>
        <View>
          <Ionicons color={color} name={icon} size={20} />
          <View style={stylesAdoption.age}>
            <Ionicons
              color={ColorsOptions.gray}
              name={"time"}
              size={20}
              style={{ marginRight: 2 }}
            />
            <Text style={stylesAdoption.text}>{age} anos</Text>
          </View>
        </View>
      </View>
    </>
  );
};
