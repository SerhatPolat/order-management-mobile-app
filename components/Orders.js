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
      {
        description: descriptionInput,
        price: priceInput,
        date: new Date().toLocaleString(),
      },
      ...orders,
    ]);

    setDescriptionInput("");
    setPriceInput("");

    setModalVisible(false);
  }

  function handleDelete(date) {
    const newOrderList = orders.filter((order) => order.date !== date);

    setOrders(newOrderList);
  }

  return (
    <>
      <ScrollView style={styles.orderList}>
        {orders.map((order) => {
          return (
            <View key={order.date}>
              <View style={styles.orderBoxTop}>
                <Text style={styles.text2}>{order.description}</Text>
                <Text style={styles.text2}>${order.price}</Text>
                <Pressable
                  onPress={() => {
                    handleDelete(order.date);
                  }}
                  style={styles.deleteBtn}
                >
                  <Icon name="trash-o" size={30} color="#000" />
                </Pressable>
              </View>
              <View style={styles.orderBoxBottom}>
                <Text style={styles.text1}>{order.date}</Text>
              </View>
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
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  orderBoxTop: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderColor: "#6d2776",
    borderWidth: 2,
    padding: 10,
  },
  orderBoxBottom: {
    backgroundColor: "#6d2776",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  plusBtn: {
    backgroundColor: "#6d2776",
    height: 70,
    width: 70,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
    borderColor: "#fff",
    borderWidth: 2,
    position: "absolute",
    right: 30,
    bottom: 30,
    shadowColor: "#6d2776",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
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
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
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
  text2: {
    fontWeight: "bold",
  },
  closeBtn: {
    position: "absolute",
    right: 10,
    top: 5,
  },
  deleteBtn: {
    position: "absolute",
    right: 10,
    top: 10,
  },
});

export default Orders;
