import { View, Text, Image } from "react-native";
import React from "react";
import { images } from "../assets/constants";
import CustomButton from "./CustomButton";
import { router } from "expo-router";
const EmptyState = ({ title, subTitle }) => {
  return (
    <View className="justify-center items-center px-4">
      <Image
        source={images.empty}
        className="w-[270px] h-[215px]"
        resizeMode="contain"
      />
      <Text className="font-semibold text-sm text-gray-300">{subTitle}</Text>
      <Text className="text-2xl font-semibold text-white mt-2">{title}</Text>
      <CustomButton
        title={"Create a new video"}
        handlePress={() => {
          router.push("/create");
        }}
        containerStyle={"w-full mt-7"}
        testStyle={""}
        isLoading={false}
      />
    </View>
  );
};

export default EmptyState;
