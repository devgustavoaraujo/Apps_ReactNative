import { View, TextInput, StyleSheet } from "react-native";

export function Display() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="0"></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "13%",
    width: "85%",
    marginBottom: 15,

    justifyContent: "center",
    alignItems: "flex-start",
    borderRadius: 10,
    padding: 20,

    borderWidth: 0.5,
    borderColor: "white",
    backgroundColor: "#edeff21d",
  },
  input: {
    color: "#f6f6f6",
    fontSize: 44,
    fontWeight: "600",
  },
});
