import {
  View,
  Text,
  Modal,
  Pressable,
  StyleSheet,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import uuid from "react-native-uuid";
import { useTaskContext } from "../context/TaskContext";

import React, { useState } from "react";

const ModalTodo = ({ isModalOpened, closeModal }) => {
  const [inputText, setInputText] = useState("");
  const { setTasks } = useTaskContext();
  const handleInput = (val) => {
    setInputText(val);
  };

  const cancelHandler = () => {
    console.log("cancel");
    closeModal(false);
  };

  const addHandler = () => {
    setTasks((tasks) => [
      ...tasks,
      { item: inputText, id: uuid.v4(), status: "todo", completedDate: null },
    ]);
    closeModal(false);
  };

  return (
    <Modal
      visible={isModalOpened}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={() => {
        closeModal(!isModalOpened);
      }}
    >
      <View style={styles.modalView}>
        <View style={styles.inputOuter}>
          <TextInput
            style={styles.input}
            onChangeText={handleInput}
            placeholder="Enter Task"
          />
        </View>
        <View style={styles.btnGroup}>
          <Pressable onPress={cancelHandler}>
            <View style={[styles.btn, styles.cancelbtn]}>
              <Entypo name="cross" size={24} color="black" />
            </View>
          </Pressable>
          <Pressable onPress={addHandler}>
            <View style={[styles.btn, styles.addbtn]}>
              <AntDesign name="check" size={24} color="black" />
            </View>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default ModalTodo;

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    backgroundColor: "#ADB5BD",
    alignItems: "center",
    justifyContent: "center",

    elevation: 5,
    paddingHorizontal: 50,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  inputOuter: {
    backgroundColor: "white",
    borderRadius: 10,
    width: "100%",
  },
  input: {
    height: 50,
    padding: 10,
    width: "100%",
  },
  btnGroup: {
    flexDirection: "row",
    marginTop: 30,
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  btn: {
    width: 100,
    padding: 10,
    borderRadius: 13,
    justifyContent: "center",
    alignItems: "center",
  },
  cancelbtn: {
    backgroundColor: "#916C6C",
  },
  addbtn: {
    backgroundColor: "#6B917F",
  },
});
