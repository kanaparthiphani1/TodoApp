import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

const Footer = ({ setIsModalOpened }) => {
  return (
    <View style={styles.footerCont}>
      <Pressable onPress={() => setIsModalOpened(true)}>
        <View style={styles.addBtn}>
          <Ionicons name="add" size={34} color="black" />
        </View>
      </Pressable>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footerCont: {
    // flexDirection: "row",
    // justifyContent: "flex-end",
    // paddingHorizontal: 20,
    // alignItems: "center",
    // height: 90,
    // backgroundColor: "transparent",
    alignSelf: "flex-end",
    position: "absolute",
    bottom: 65,
    right: 20,
  },
  addBtn: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    paddingHorizontal: 20,
    backgroundColor: "#CAD5E2",
  },
});
