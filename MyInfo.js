import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import About from "./About";

const MyInfo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.nameText}>Hello, My name is Guido!!!</Text>
      <Text style={styles.pronounText}>(He/Him)</Text>
      <About/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 5
  },
  nameText: {
    fontSize: 30,
    fontWeight: "bold"
  },
  pronounText: {
    paddingTop: 5,
    fontSize: 20,
  }
});

export default MyInfo;
