// Montar componentes por pedaços
import { ReactNode } from "react";
import { TextInput, View, StyleSheet, TextInputProps } from "react-native";
import { themeStyle } from "@src/common/styles";
function Input({ children }: { children: ReactNode }) {
  return <View style={styles.container}>{children}</View>;
}

function Field({ ...rest }: TextInputProps) {
  return (
    <TextInput
      style={styles.input}
      placeholderTextColor={themeStyle.colors.gray[200]}
      {...rest}
    />
  );
}

Input.Field = Field;

export { Input };

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 75,
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    padding: 16,
    borderColor: themeStyle.colors.gray[300],
    borderWidth: 1.4,
    borderRadius: 10,
  },
  input: {
    flex: 1,
    color: themeStyle.colors.white,
    fontSize: 22,
    fontFamily: themeStyle.fontFamily.regular,
  },
});
