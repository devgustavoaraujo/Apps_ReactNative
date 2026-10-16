import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./style.js";
export function Button({ numbers }) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>
        {numbers.values} {numbers.codes}
      </Text>
    </TouchableOpacity>
  );
}
