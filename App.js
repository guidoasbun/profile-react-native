import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { ProfileImage } from "./components/imageHeader/ProfileImage";
import { MyInfo } from "./components/aboutMe/MyInfo";
import { Footer } from './components/buttonsFooter/Footer' 

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <ProfileImage />
        <MyInfo />
        <Footer />
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
