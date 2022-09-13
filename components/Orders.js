import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Pressable,
  Modal,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const Orders = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [descriptionInput, setDescriptionInput] = useState("");
  const [priceInput, setPriceInput] = useState("");
  const [orders, setOrders] = useState([
    {
      description: "example order",
      price: "999",
      date: new Date().toLocaleString(),
    },
  ]);

  function addNewOrder() {
    setOrders([
      ...orders,
      {
        description: descriptionInput,
        price: priceInput,
        date: new Date().toLocaleString(),
      },
    ]);

    setDescriptionInput("");
    setPriceInput("");

    setModalVisible(false);
  }

  return (
    <>
      <ScrollView style={styles.orderList}>
        {orders.map((order) => {
          return (
            <View key={order.date} style={styles.orderBox}>
              <Text>{order.description}</Text>
              <Text>{order.price}</Text>
              <Text>{order.date}</Text>
            </View>
          );
        })}
      </ScrollView>

      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={styles.closeBtn}
              onPress={() => setModalVisible(false)}
            >
              <Icon name="times" size={30} color="#000" />
            </Pressable>
            <TextInput
              style={styles.input}
              placeholder="Description"
              placeholderTextColor="#000"
              value={descriptionInput}
              onChangeText={(x) => setDescriptionInput(x)}
            />
            <TextInput
              style={styles.input}
              placeholder="Price"
              placeholderTextColor="#000"
              value={priceInput}
              onChangeText={(y) => setPriceInput(y)}
            />
            <Pressable style={styles.addOrderBtn} onPress={addNewOrder}>
              <Text style={styles.text1}>Add Order</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Pressable style={styles.plusBtn} onPress={() => setModalVisible(true)}>
        <Icon name="plus" size={30} color="#fff" />
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  orderList: {
    backgroundColor: "#fff",
    position: "absolute",
    top: 180,
    bottom: 0,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 80,
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  orderBox: {
    width: "100%",
    borderRadius: 10,
    borderColor: "#6d2776",
    borderWidth: 2,
    padding: 10,
    marginBottom: 15,
  },
  plusBtn: {
    backgroundColor: "#6d2776",
    height: 70,
    width: 70,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
    position: "absolute",
    right: 30,
    bottom: 30,
    shadowColor: "#6d2776",
    elevation: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#301933",
    width: "80%",
    borderRadius: 10,
    padding: 30,
    paddingTop: 50,
    alignItems: "center",
    shadowColor: "#6d2776",
    elevation: 10,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#6d2776",
    borderRadius: 20,
    padding: 10,
    marginBottom: 15,
    color: "#000",
  },
  addOrderBtn: {
    backgroundColor: "#6d2776",
    borderRadius: 999,
    padding: 10,
    width: "80%",
    alignItems: "center",
  },
  text1: {
    color: "#fff",
    fontWeight: "bold",
  },
  closeBtn: {
    position: "absolute",
    right: 10,
    top: 5,
  },
});

export default Orders;
