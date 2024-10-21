import { View, Text, ScrollView, Image, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../assets/constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link, router } from "expo-router";
import { SignInAccount } from "../../lib/appwrite";
const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const submit = async () => {
    if (form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all fields");
    }

    // setSubmitting(true);
    try {
      const result = await SignInAccount(form.email, form.password);
      // setUser(result);
      // setIsLogged(true);

      router.replace("/home");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      // setSubmitting(false);
    }
  };
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center  h-full px-4">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />
          <Text className="text-[22px] font-semibold text-white mt-[32px]">
            Sign In
          </Text>

          <FormField
            title="Email"
            placeholder="Enter email"
            value={form.email}
            handelChangeText={(e) => {
              setForm({
                ...form,
                email: e,
              });
            }}
            otherStyle="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            placeholder="Enter password"
            value={form.password}
            handelChangeText={(e) => {
              setForm({
                ...form,
                password: e,
              });
            }}
            otherStyle="mt-7"
          />

          <CustomButton
            title={"Sign In"}
            handlePress={() => {
              submit();
            }}
            containerStyle={"w-full mt-7"}
            testStyle={""}
            isLoading={false}
          />
          <View className="justify-center pt-5 flex-row">
            <Text className="text-lg text-gray-100 font-semibold">
              Don’t have an account?{" "}
              <Link href="/sign-up" className="text-secondary">
                Sign Up
              </Link>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
