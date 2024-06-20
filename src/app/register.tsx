import { useState } from "react";
import { View, Image, StyleSheet, StatusBar, Alert } from "react-native";

import { FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router"; //como se fosse um link da web

import { themeStyle } from "@src/common/styles";

import { Input } from "@src/components/input";
import { Button } from "@src/components/button";
export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleRegister() {
    if (!name.trim() || !email.trim()) {
      return Alert.alert(
        "Inscrição inválida",
        "Preencha todos os campos para realizar a inscrição!"
      );
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Image
        source={require("@src/assets/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.viewInput}>
        <Input>
          <FontAwesome6
            name="user-circle"
            size={20}
            color={themeStyle.colors.gray[200]}
          />
          <Input.Field placeholder="Nome completo" onChangeText={setName} />
        </Input>
        <Input>
          <MaterialIcons
            name="alternate-email"
            size={20}
            color={themeStyle.colors.gray[200]}
          />
          <Input.Field
            placeholder="E-mail"
            keyboardType="email-address"
            onChangeText={setEmail}
          />
        </Input>
        <Button title="Realizar inscrição" onPress={handleRegister} />
        <Link href="/" style={styles.register}>
          Já possui ingresso?
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeStyle.colors.green[500],
    alignItems: "center",
    justifyContent: "center",
    padding: 32,
  },
  logo: {
    height: 86,
  },
  viewInput: {
    width: "100%",
    gap: 16,
    marginTop: 64,
  },
  register: {
    color: themeStyle.colors.gray[200],
    fontSize: 20,
    lineHeight: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 42,
  },
});
