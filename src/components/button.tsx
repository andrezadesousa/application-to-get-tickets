import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { themeStyle } from "@src/common/styles";

type Props = TouchableOpacityProps & {
  title: string;
  isLoading?: boolean;
};

export function Button({ title, isLoading = false, ...rest }: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      disabled={isLoading}
      activeOpacity={0.7}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator color={themeStyle.colors.green[500]} />
      ) : (
        <Text style={styles.title}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 75,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: themeStyle.colors.orange[500],
    borderRadius: 12,
  },
  title: {
    color: themeStyle.colors.green[500],
    fontFamily: themeStyle.fontFamily.bold,
    fontSize: 20,
    lineHeight: 32,
    textTransform: "uppercase",
  },
});
