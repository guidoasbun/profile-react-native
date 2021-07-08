import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { About } from "./About";

export const MyInfo = () => {
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
    paddingTop: 12
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


