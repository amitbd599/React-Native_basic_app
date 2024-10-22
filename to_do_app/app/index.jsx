import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useState } from "react";
import Header from "../components/Header";
import ToDoItems from "../components/ToDoItems";
import AddToDo from "../components/AddToDo";
import { TouchableOpacity } from "react-native";
import { TouchableWithoutFeedback } from "react-native-web";
import { Pressable } from "react-native";

const App = () => {
  let [todos, setTodos] = useState([
    { text: "Buy coffee", key: 1 },
    { text: "Create an app", key: 2 },
    { text: "Play on board", key: 3 },
  ]);

  let Press = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todos) => todos.key !== key);
    });
  };

  let submitHandler = (text) => {
    setTodos((prevTodos) => {
      return [...prevTodos, { text: text, key: Math.random().toString() }];
    });
  };
  return (
    <View style={style.container} onPress={() => alert("He")}>
      <Header />
      <View style={style.content}>
        <AddToDo submitHandler={submitHandler} />
        <FlatList
          style={style.list}
          data={todos}
          renderItem={({ item }) => <ToDoItems item={item} Press={Press} />}
        />
      </View>
    </View>
  );
};

let style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});

export default App;
