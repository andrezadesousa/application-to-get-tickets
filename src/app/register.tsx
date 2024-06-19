import { View, Image, StyleSheet, StatusBar } from "react-native";

import { FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router"; //como se fosse um link da web

import { themeStyle } from "@src/common/styles";

import { Input } from "@src/components/input";
import { Button } from "@src/components/button";
export default function Register() {
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
          <Input.Field placeholder="Nome completo" />
        </Input>
        <Input>
          <MaterialIcons
            name="alternate-email"
            size={20}
            color={themeStyle.colors.gray[200]}
          />
          <Input.Field placeholder="E-mail" keyboardType="email-address" />
        </Input>
        <Button title="Realizar inscrição" />
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
