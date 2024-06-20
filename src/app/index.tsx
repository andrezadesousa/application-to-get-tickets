import { useState } from "react";
import { View, Image, StyleSheet, StatusBar, Alert } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Link } from "expo-router"; //como se fosse um link da web

import { themeStyle } from "@src/common/styles";

import { Input } from "@src/components/input";
import { Button } from "@src/components/button";
export default function Home() {
  const [code, setCode] = useState("");

  function handleAccessCredential() {
    // verificar se o código não foi digitado
    // .trim remove os espaços
    if (!code.trim()) {
      return Alert.alert(
        "Ingresso inválida",
        "Por favor, informe o código do ingresso"
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
          <MaterialCommunityIcons
            name="ticket-confirmation-outline"
            size={20}
            color={themeStyle.colors.gray[200]}
          />
          <Input.Field
            placeholder="Código do ingresso"
            onChangeText={setCode}
          />
        </Input>
        <Button title="Acessar credencial" onPress={handleAccessCredential} />
        <Link href="/register" style={styles.register}>
          Ainda não possui ingresso?
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
