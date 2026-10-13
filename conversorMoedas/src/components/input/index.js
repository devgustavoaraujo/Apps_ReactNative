import { View, Text, TextInput } from "react-native";
import { styles } from "./styles";
export function Input({ value, onChangeText, label }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <TextInput
        placeholder="0.00"
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        keyboardType="numeric"
      ></TextInput>
    </View>
  );
}
