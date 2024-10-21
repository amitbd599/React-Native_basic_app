import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { icons } from "../assets/constants";

const SearchInput = ({
  title,
  value,
  placeholder,
  handelChangeText,
  otherStyle,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className="flex-row items-center space-x-4 w-full h-16 px-4 bg-gray-950 border-2 border-gray-500 rounded-2xl focus:border-secondary ">
      <TextInput
        className="flex-1 flex-row text-white font-semibold text-base"
        value={value}
        placeholder={"Search for a video topic"}
        placeholderTextColor="#7b7b8b"
        onChangeText={handelChangeText}
      />

      <TouchableOpacity>
        <Image source={icons.search} className="w-5 h-5" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
