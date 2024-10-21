import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={style.header}>
      <Text style={style.text}>My ToDos</Text>
    </View>
  );
};

let style = StyleSheet.create({
  header: {
    backgroundColor: "#f59e0b",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default Header;
