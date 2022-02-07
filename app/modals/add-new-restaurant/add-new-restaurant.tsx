import React, { useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import IonIcon from "react-native-vector-icons/Ionicons";
import { Input } from "../../components";
import { palette } from "../../theme";
import { styles } from "./styles";
import { addRestaurant, getAddedTagsWithImages } from "../../utilities";
import { ApplicationState } from "../../redux/reducers";
import { useSelector } from "react-redux";
interface AddNewRestaurantProps {
  onCloseModal: () => void;
}

export const AddNewRestaurant: React.FC<AddNewRestaurantProps> = ({
  onCloseModal,
}) => {
  const [name, setName] = useState("");
  const [tag, setTag] = useState("");
  const { tags } = useSelector(
    (state: ApplicationState) => state.restaurantState
  );

  //Functionality
  const closeModal = () => {
    onCloseModal();
  };

  const addNewRestaurant = () => {
    const splittedTagArray = tag.split(",");
    const tagArray = getAddedTagsWithImages(splittedTagArray,tags)
    addRestaurant(name, tagArray);
    closeModal();
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
        value={tag}
        placeHolder={"tags"}
        onChangeText={(newValue) => setTag(newValue)}
      ></Input>
    );
  };

  const renderAddNewRestaurantButton = () => {
    return (
      <TouchableOpacity onPress={() => addNewRestaurant()}>
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
