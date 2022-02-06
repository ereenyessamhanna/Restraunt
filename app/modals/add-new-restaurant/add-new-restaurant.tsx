import React, { useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import IonIcon from "react-native-vector-icons/Ionicons";
import { Input } from "../../components";
import { palette } from "../../theme";
import { styles } from "./styles";

interface AddNewRestaurantProps {
  onCloseModal: () => void;
}

export const AddNewRestaurant: React.FC<AddNewRestaurantProps> = ({ onCloseModal }) => {

  const [name, setName] = useState("");
  const [tags, setTags] = useState("");

  //Functionality
  const closeModal = () => {
    onCloseModal()
  };
  //UI
  const renderCloseIcon = () => {
    return (
      <TouchableOpacity onPress={() => closeModal()}>
        <IonIcon
          style={styles.close}
          name="ios-close"
          size={23}
          color={palette.grey}
        />
      </TouchableOpacity>
    );
  };

  const renderNameInput = () => {
    return (
      <Input
        value={name}
        placeHolder={"name"}
        onChangeText={(newValue) => setName(newValue)}
      ></Input>
    );
  };

  const renderTagsInput = () => {
    return (
      <Input
        value={tags}
        placeHolder={"tags"}
        onChangeText={(newValue) => setTags(newValue)}
      ></Input>
    );
  };

  const renderAddNewRestaurantButton = () => {
    return (
      <TouchableOpacity>
        <View style={styles.addRestaurantContainer}>
          <Text style={styles.addRestaurant}>{"Add"}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <Modal
        onRequestClose={() => closeModal()}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.container}>
          {renderCloseIcon()}
          {renderNameInput()}
          {renderTagsInput()}
          {renderAddNewRestaurantButton()}
        </View>
      </Modal>
    </View>
  );
};
