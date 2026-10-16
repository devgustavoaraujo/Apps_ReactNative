import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { styles } from "./Styles.js";
import { numbersButton } from "../src/constants/buttonsConst.js";
import { Button, CodeButton } from "../src/components/button/buttons.js";
import { Display } from "../src/components/display/index.js";
export default function App() {
  return (
    <View style={styles.container}>
      <Text></Text>
      <StatusBar style="light" />
      <Display></Display>
      <View style={stylesconst.buttonsContainer}>
        <View style={stylesconst.numbersButtons}>
          {numbersButton.map((number) => (
            <Button key={number.values} number={number}></Button>
          ))}
          {numbersButton.map((operators) => (
            <CodeButton key={operators.codes} operators={operators}></CodeButton>
          ))}
        </View>
      </View>
    </View>
  );
}

const stylesconst = StyleSheet.create({
  numbersButtons: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    justifyContent: "center",
  },
  buttonsContainer: {},
});
