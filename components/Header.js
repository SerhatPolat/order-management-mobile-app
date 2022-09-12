import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const Header = ({ name, onLogout }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text1}>
        <Icon name="user-circle-o" size={25} color="#6d2776" /> {name}
      </Text>
      <Pressable style={styles.logoutBtn} onPress={onLogout}>
        <Icon name="sign-out" size={30} color="#000" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fff",
    position: "absolute",
    flexDirection: "row",
    top: 0,
    paddingHorizontal: 20,
    paddingTop: 80,
    paddingBottom: 40,
    width: "100%",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  text1: {
    fontSize: 25,
    fontWeight: "bold",
  },
  logoutBtn: {
    position: "absolute",
    bottom: 40,
    right: 20,
  },
});

export default Header;
