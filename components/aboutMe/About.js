import React from "react";
import { Text, StyleSheet, View } from "react-native";

export const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.aboutText}>
        Full Stack Developer currently a Snap Engineering Academy scholar,
        working on cutting edge software development technologies. Graduate of
        the University Of California Irvine full stack development program,
        developed skills in Mongo db, Express, React Js, Node Js and many other
        technologies. Worked on various group projects, some as group lead, to
        create applications that demonstrate my full stack development
        abilities.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    justifyContent: "center",
  },
  aboutText: {
    fontSize: 20,
    alignItems: "flex-start",
  },
});

