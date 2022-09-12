import { ScrollView, StyleSheet, View, Text } from "react-native";
import React from "react";

const Orders = () => {
  let orders = [
    {
      id: "1",
      description: "product 1",
      price: "999",
    },
    {
      id: "2",
      description: "product 2",
      price: "899",
    },
    {
      id: "3",
      description: "product 3",
      price: "1099",
    },
    {
      id: "4",
      description: "product 4",
      price: "699",
    },
    {
      id: "5",
      description: "product 5",
      price: "299",
    },
  ];

  return (
    <ScrollView style={styles.orderList}>
      {orders.map((order) => {
        return (
          <View key={order.id} style={styles.orderBox}>
            <Text>{order.description}</Text>
            <Text>{order.price}</Text>
          </View>
        );
      })}
    </ScrollView>
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
});

export default Orders;
