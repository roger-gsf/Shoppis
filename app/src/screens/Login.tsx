import { StyleSheet, TextInput, Text, TouchableOpacity } from "react-native";
import { UserContext } from "../contexts/UserContext";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import React, { useContext, useState } from "react";

const Login = () => {
  const { handleLogin } = useContext(UserContext);

  const [email, setEmail] = useState("karn.yong@melivecode.com");
  const [password, setPassword] = useState("melivecode");

  return (
    <SafeAreaView style={styles.container}>
      <FontAwesome6 name="lock" size={40} color="white" style={styles.logo} />

      <Text style={styles.title}>LOGIN</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        placeholder="Insira seu email"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholder="Insira sua senha"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleLogin(email, password)}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#07161B",
    padding: 10,
  },
  input: {
    width: "100%",
    height: 50,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
    color: "#fff",
    borderColor: "#ccc",
    borderRadius: 7,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#3D737F",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 12,
    borderRadius: 7,
  },
  buttonText: {
    color: "#fff",
  },
  title: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
  },

  logo: {
    marginBottom: 30,
  },
});

export default Login;
