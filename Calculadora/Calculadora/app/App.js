import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { styles } from "./Styles.js";
import { numbersButton } from "../src/constants/buttonsConst.js";
import { Button } from "../src/components/button/buttons.js";
export default function App() {
  return (
    <View style={styles.container}>
      <Text></Text>
      <StatusBar style="light" />
      <Text> Hello World</Text>
      <View style={stylesconst.buttonsContainer}>
        <View style={stylesconst.numbersButtons}>
          {numbersButton.map((numbers) => (
            <Button key={[numbers.values, numbers.codes]} numbers={numbers}></Button>
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
