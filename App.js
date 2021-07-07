import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import ProfileImage from "./ProfileImage";
import MyInfo from "./MyInfo";
import Buttons from "./Buttons";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <ProfileImage />
        <MyInfo />
        <Buttons />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
