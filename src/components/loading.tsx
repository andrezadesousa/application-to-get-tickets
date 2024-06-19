import { ActivityIndicator } from "react-native";
import { StyleSheet } from "react-native";
import { themeStyle } from "@src/common/styles";

export function Loading() {
  return <ActivityIndicator style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeStyle.colors.green[500],
    alignItems: "center",
    justifyContent: "center",
    color: themeStyle.colors.orange[500],
  },
});
