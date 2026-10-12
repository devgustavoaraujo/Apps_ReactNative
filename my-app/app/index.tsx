import { Background } from "@react-navigation/elements";
import { DarkTheme } from "@react-navigation/native";
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from "react-native";

export default function Home() {
  return (
    <View style={style.container}>
      <View>
        <StatusBar barStyle={"light-content"} />
        <Text style={style.text}> Conversor de Moedas</Text>
        <Text style={{ color: "white" }}>Converta o Valor em Diferente Moedas</Text>
      </View>
      <View>
        <Text style={{ color: "white" }}>De: </Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#00080E",
    alignItems: "center",
    paddingVertical: 68,
  },
  text: {
    color: "#fff",
  },
});
