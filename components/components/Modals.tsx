import React from "react";
import { Modal, View } from "react-native";

import Button from "./Button";

import { Modals } from "../../utils/types";
import { stylesModal } from "../../styles/styles";

export default function ModalComponent({
  buttonText,
  children,
  onClose,
  visible,
}: Modals) {
  return (
    <>
      <Modal
        animationType="slide"
        onRequestClose={onClose}
        transparent={true}
        visible={visible}
      >
        <View style={stylesModal.container}>
          <View style={stylesModal.content}>
            <View style={stylesModal.childrenContainer}>{children}</View>
            <Button onPress={onClose} text={buttonText || "Fechar"} />
          </View>
        </View>
      </Modal>
    </>
  );
}
