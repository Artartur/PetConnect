import React, { useState } from "react";
import { Alert, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Card from "./Card";

export default function ImagePickerCard({ onSelectImage }: { onSelectImage: (image: string, value:string) => void }) {
  const [selectedImage, setSelectedImage] = useState("");

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Ops! aconteceu um erro",
        "A solicitacao para acessar sua galeira foi recusada, por favor aceite"
      );
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [200, 200],
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      onSelectImage(result.assets[0].uri, selectedImage);
    }
  };

  const takePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Ops! aconteceu um erro",
        "A solicitacao para acessar sua galeira foi recusada, por favor aceite"
      );
      return;
    }
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      onSelectImage(result.assets[0].uri, selectedImage);
    }
  };

  return (
    <>
      <Card
        containerStyle={style.containerCard}
        onPress={pickImage}
        text="Carregar Imagem da Galeria"
      />

      <Card
        containerStyle={style.containerCard}
        onPress={takePhoto}
        text="Tirar Foto"
      />
    </>
  );
}

const style = StyleSheet.create({
  containerCard: {
    height: "20%",
    width: "90%",
  },
});
