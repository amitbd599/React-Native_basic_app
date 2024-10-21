import { View, Text, ScrollView, Image, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../assets/constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link, router } from "expo-router";
import { createUser } from "../../lib/appwrite";
const SignUp = () => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const submit = async () => {
    if (form.username === "" || form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all fields");
    }

    console.log(form);

    setSubmitting(true);
    try {
      const result = await createUser(form.email, form.password, form.username);
      // setUser(result);
      // setIsLogged(true);

      router.replace("/home");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setSubmitting(false);
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
            Sign up
          </Text>

          <FormField
            title="User Name"
            placeholder="Enter user name"
            value={form.username}
            handelChangeText={(e) => {
              setForm({
                ...form,
                username: e,
              });
            }}
            otherStyle="mt-7"
            keyboardType="email-address"
          />
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
            title={"Sign Up"}
            handlePress={() => {
              submit();
            }}
            containerStyle={"w-full mt-7"}
            testStyle={""}
            isLoading={false}
          />
          <View className="justify-center pt-5 flex-row">
            <Text className="text-lg text-gray-100 font-semibold">
              Already have an account?{" "}
              <Link href="/sign-in" className="text-secondary">
                Login
              </Link>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
