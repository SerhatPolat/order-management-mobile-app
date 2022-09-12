import { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import Login from "./components/login";

export default function App() {
  const [username, setUsername] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  if (!loggedIn) {
    return (
      <View style={styles.container}>
        <Login
          onUsernameChange={(newText) => setUsername(newText)}
          onBtnPress={() => {
            setLoggedIn(true);
          }}
        />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text>{username} logged in!!!</Text>
        <Pressable
          onPress={() => {
            setLoggedIn(false);
          }}
        >
          <Text>Logout</Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#301933",
    alignItems: "center",
    justifyContent: "center",
  },
});
