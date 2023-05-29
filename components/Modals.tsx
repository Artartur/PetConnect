import React from "react";
import { Modal, View } from "react-native";
import { Modals } from "../types/types";
import { stylesModal } from "../styles/styles";
import Button from "./Button";

export default function ModalComponent({ children, onClose, visible }: Modals) {
  return (
    <>
      <Modal
        visible={visible}
        animationType="slide"
        transparent={true}
        onRequestClose={onClose}
      >
        <View style={stylesModal.container}>
          <View style={stylesModal.content}>
            <View style={stylesModal.childrenContainer}>{children}</View>
            <Button text={"Fechar"} onPress={onClose} />
          </View>
        </View>
      </Modal>
    </>
  );
}
