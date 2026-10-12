import { styles } from "./styles.js";
import { TouchableOpacity, Text } from "react-native";
export function Button({ variant = "primary", onPress, currency }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, variant === "primary" ? styles.buttonPrimary : styles.buttonSecondary]}
    >
      <Text style={styles.buttonText}>{currency.code}</Text>
    </TouchableOpacity>
  );
}
