import { View, Text, Button } from "react-native";
import React from "react";

const AboutScreen = ({ navigation, route }) => {
  let { data } = route.params;
  return (
    <View>
      <Text>about</Text>
      <Text>{data}</Text>
      <Button title='Go to Home' onPress={() => navigation.navigate("Home")} />
      <Button title='Go back' onPress={() => navigation.goBack()} />
    </View>
  );
};

export default AboutScreen;
