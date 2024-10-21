import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import React, { useState } from "react";

const AddToDo = ({ submitHandler }) => {
  let [text, setText] = useState("");
  let change = (val) => {
    setText(val);
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder='New todo...'
        onChangeText={change}
      />

      <Button
        title='Add to do'
        onPress={() => {
          submitHandler(text);
        }}
        color={"red"}
      />
    </View>
  );
};

let styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});

export default AddToDo;
