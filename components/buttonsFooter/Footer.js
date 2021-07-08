import React from "react";
import { Modals } from "./Modals";
import contact from "./data/contact";
import projects from "./data/projects";
import { StyleSheet, View } from "react-native";

export const Footer = () => {
  return (
    <View style={styles.container}>
      <Modals modalName="Contact Me" obj={contact} />
      <Modals modalName="Projects" obj={projects} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#6F78F5",
    padding: 15,
  },
});
