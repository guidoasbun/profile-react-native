import React from "react";
import { View, Image, StyleSheet } from "react-native";

const ProfileImage = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("./assets/profileImage.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 70,
    paddingBottom: 35,
    backgroundColor: '#E75454'
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 50,
  },
});
export default ProfileImage;
