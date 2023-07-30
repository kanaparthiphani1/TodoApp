import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.outerHeadCont}>
      <View style={styles.logoCont}>
        <Image style={styles.image} source={require("../assets/logo.png")} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  outerHeadCont: {
    width: "100%",
    height: 55,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems: "center",
    marginBottom: 30,
    marginTop: 10,
  },
  logoText: {
    fontSize: 30,
    fontWeight: "800",
    color: "#CAD5E2",
  },
  image: {
    width: 70,
    height: 70,
  },
});
