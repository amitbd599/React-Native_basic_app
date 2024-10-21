import { Text, Pressable } from "react-native";
import React from "react";

const CustomButton = ({
  title,
  handlePress,
  containerStyle,
  testStyle,
  isLoading,
}) => {
  return (
    <Pressable
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-secondary  rounded-xl min-h-[62px] justify-center items-center ${containerStyle} ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
    >
      <Text className={`text-primary font-semibold text-lg ${testStyle}`}>
        {title}
      </Text>
    </Pressable>
  );
};

export default CustomButton;
