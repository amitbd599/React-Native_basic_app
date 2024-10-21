import { Text, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const ToDoItems = ({ item, Press }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        Press(item.key);
      }}
    >
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  );
};

let styles = StyleSheet.create({
  item: {
    padding: 10,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
  },
});

export default ToDoItems;
