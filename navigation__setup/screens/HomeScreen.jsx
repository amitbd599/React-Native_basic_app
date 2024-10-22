import { View, Text, Button } from "react-native";
import React from "react";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>home</Text>
      <Button
        title='Go to Details'
        onPress={() => navigation.navigate("About", { data: "details" })}
      />
    </View>
  );
};

export default HomeScreen;
