import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  RefreshControl,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { images } from "../../assets/constants";
import SearchInput from "../../components/SearchInput";
import Trading from "../../components/Trading";
import EmptyState from "../../components/EmptyState";
import { getAllPost, getLatestPosts } from "../../lib/appwrite";
import useAppWrite from "../../lib/useAppWrite";
import VideoCard from "../../components/VideoCard";
const Home = () => {
  const { data: posts, refetch } = useAppWrite(getAllPost);
  const { data: latestPosts } = useAppWrite(getLatestPosts);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };
  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <VideoCard video={item} />}
        ListHeaderComponent={() => (
          <View className="pt-[40px] my-6 px-4 space-y-6">
            <View className="justify-between items-start flex-row mb-6">
              <View>
                <Text className="font-semibold text-sm text-gray-300">
                  Welcome Back
                </Text>
                <Text className="text-2xl font-semibold text-white mt-2">
                  React Native
                </Text>
              </View>
              <View className="mt-2">
                <Image
                  source={images.logoSmall}
                  className="w-9 h-10"
                  resizeMode="contain"
                />
              </View>
            </View>
            <SearchInput />
            <View className="w-full flex-1 pt-5 pb-8">
              <Text className="text-gray-100 text-lg font-medium mb-3">
                Latest Videos
              </Text>
            </View>
            <Trading post={latestPosts} />
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos found!"
            subTitle="No video create yet."
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

export default Home;
