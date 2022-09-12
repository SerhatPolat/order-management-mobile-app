import { StyleSheet, View, Text, TextInput, Pressable } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const Login = ({ onUsernameChange, onBtnPress }) => {
  return (
    <View style={styles.container}>
      <Icon name="user-circle-o" size={80} color="#fff" />
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#fff"
        onChangeText={onUsernameChange}
      />
      <Pressable style={styles.loginBtn} onPress={onBtnPress}>
        <Text style={styles.btnText}>Login</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 280,
    alignItems: "center",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#6d2776",
    borderRadius: 20,
    padding: 10,
    marginVertical: 15,
    color: "#fff",
  },
  loginBtn: {
    width: "100%",
    backgroundColor: "#6d2776",
    borderRadius: 999,
    alignItems: "center",
    padding: 10,
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Login;
