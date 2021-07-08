import React, { useState } from "react";

import {
  StyleSheet,
  View,
  Text,
  Alert,
  Modal,
  Pressable,
} from "react-native";

export const Modals = ({ modalName, obj }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const Item = ({ name }) => (
    <View>
      <Text>{name}</Text>
    </View>
  );
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>

            {obj.map((hotDog, i) => (
              <View key={obj[i].id}>
                <Text style={styles.nameMap}>{obj[i].name}</Text>
                <Text style={styles.valueMap}>{obj[i].value}</Text>
              </View>
            ))}

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <View>
          <Text style={styles.textStyle}>{modalName}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
    nameMap: {
        backgroundColor: '#6F78F5',
        color: 'white',
        textAlign: 'center',
        padding: 10,
        fontSize: 18,
        fontWeight: 'bold'
    },
    valueMap: {
        backgroundColor: 'white',
        padding: 10,
        fontWeight: 'bold'

    },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    margin: 10,
  },
  buttonOpen: {
    backgroundColor: "#0615EE",
  },
  buttonClose: {
    backgroundColor: "#0615EE",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
