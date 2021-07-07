import React from "react";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from "react-native";

const Buttons = () => {
  return (
    <View style={styles.container}>
      <Button
        title="Left button"
        onPress={() => Alert.alert("Left button pressed")}
      />
      <Button
        title="Right button"
        onPress={() => Alert.alert("Left button pressed")}
      />
    </View>
  );
};

export default Buttons;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'center',
    backgroundColor: "#8D8DF0",
    padding: 15,
  },
});
