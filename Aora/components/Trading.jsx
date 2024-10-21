import { Text, FlatList, ImageBackground, Image } from "react-native";
import React, { useState } from "react";
import * as Animatable from "react-native-animatable";
import { TouchableOpacity } from "react-native";
import { icons } from "../assets/constants";
import { Video, ResizeMode } from "expo-av";
const zoomIn = {
  0: {
    scale: 0.9,
  },

  1: {
    scale: 1.1,
  },
};
const zoomOut = {
  0: {
    scale: 1.1,
  },

  1: {
    scale: 0.9,
  },
};

const TrendingItem = ({ activeItem, item }) => {
  const [play, setPlay] = useState(false);
  return (
    <Animatable.View
      className="mr-5"
      animation={activeItem === item.$id ? zoomIn : zoomOut}
      duration={500}
    >
      {play ? (
        <Video
          source={{ uri: item.video }}
          className="w-52 h-72 rounded-[35px] mt-3 bg-white/10"
          resizeMode={ResizeMode.CONTAIN}
          useNativeControls
          shouldPlay
          onPlaybackStatusUpdate={(status) => {
            if (status.didJustFinish) {
              setPlay(false);
            }
          }}
        />
      ) : (
        <TouchableOpacity
          className="relative justify-center items-center"
          activeOpacity={0.7}
          onPress={() => setPlay(true)}
        >
          <ImageBackground
            source={{ uri: item.thumbnail }}
            className="w-[220px] h-72 rounded-[20px] my-5 overflow-hidden shadow-lg shadow-black/40"
            resizeMode="cover"
          />
          <Image source={icons.play} className="w-12 h-12 absolute" />
        </TouchableOpacity>
      )}
    </Animatable.View>
  );
};
const Trading = ({ post }) => {
  const [active, setActive] = useState(post[1]);
  const viewAbleItemChange = ({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActive(viewableItems[0].key);
    }
  };
  return (
    <FlatList
      data={post}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => (
        <TrendingItem activeItem={active} item={item} />
      )}
      onViewableItemsChanged={viewAbleItemChange}
      viewabilityConfig={{
        itemVisiblePercentThreshold: 50,
        minimumViewTime: 500,
        waitForInteraction: true,
      }}
      contentOffset={{ x: 160 }}
      horizontal
    />
  );
};

export default Trading;
