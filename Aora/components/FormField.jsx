import { View, Text, TextInput, Pressable, Image } from "react-native";
import React, { useState } from "react";
import { icons } from "../assets/constants";
const FormField = ({
  title,
  value,
  placeholder,
  handelChangeText,
  otherStyle,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`space-y-2 ${otherStyle}`}>
      <Text className="text-base text-gray-100">{title}</Text>
      <View className="flex-row items-center w-full h-16 px-4 bg-gray-950 border-2 border-gray-500 rounded-2xl focus:border-secondary ">
        <TextInput
          className="flex-1 flex-row text-white font-semibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handelChangeText}
          secureTextEntry={title === "Password" && !showPassword}
        />

        {title === "Password" && (
          <Pressable
            onPress={() => {
              setShowPassword(!showPassword);
            }}
          >
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default FormField;
