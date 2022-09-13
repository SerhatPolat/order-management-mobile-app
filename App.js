import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Login from "./components/Login";
import Header from "./components/Header";
import Orders from "./components/Orders";

export default function App() {
  const [username, setUsername] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  if (!loggedIn) {
    return (
      <View style={styles.container}>
        <Login
          onUsernameChange={(x) => setUsername(x)}
          onBtnPress={() => {
            setLoggedIn(true);
          }}
        />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Header
          onLogout={() => {
            setLoggedIn(false);
          }}
          name={username}
        />

        <Orders />
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
