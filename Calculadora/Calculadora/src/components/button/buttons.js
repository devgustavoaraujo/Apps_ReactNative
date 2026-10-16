import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./style.js";
export function Button({ number }) {
  return (
    <TouchableOpacity style={styles.buttonNumbers}>
      <Text style={styles.buttonText}>{number.values}</Text>
    </TouchableOpacity>
  );
}

export function CodeButton({ operators }) {
  return (
    <TouchableOpacity style={styles.buttonCodes}>
      <Text style={styles.codeText}>{operators.codes}</Text>
    </TouchableOpacity>
  );
}
