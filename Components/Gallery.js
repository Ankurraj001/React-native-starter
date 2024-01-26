import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, Text, View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { getImages } from "../store/actions/galleryAction";
import { ScrollView } from "react-native-web";

const Gallery = () => {
  const dispatch = useDispatch();
  const { images } = useSelector((state) => state.gallery);

  useEffect(() => {
    dispatch(getImages());
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>Gallery App</Text>
        {images?.map((item) => {
          return (
            <Image
              style={{ height: 200, width: 200 }}
              source={{
                uri: item.thumbnailUrl,
              }}
            />
          );
        })}
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
};

export default Gallery;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
