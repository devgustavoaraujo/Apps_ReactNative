import { Background } from "@react-navigation/elements";
import { DarkTheme } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { ResultCard } from "../src/components/resultCard/index";
import { Button } from "../src/components/button/index.js";
import { styles } from "./AppStyles.js";
import { currencies } from "../src/constants/currencies.js";
import { Input } from "../src/components/input/index.js";
import { exchangeRateApi } from "../src/services/api";
export default function Home() {
  async function fetchExchangeRate() {
    const data = await exchangeRateApi("BRL");
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <ScrollView style={styles.ScrollView}>
        <View style={styles.content}>
          <StatusBar barStyle={"light-content"} />
          <View style={styles.header}>
            <Text style={styles.title}> Conversor de Moedas</Text>
            <Text style={styles.subTitle}>Converta o Valor em Diferente Moedas</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.label}>De: </Text>
            <View style={styles.currencyGrid}>
              {currencies.map((currency) => (
                <Button currency={currency} key={currency.code} onPress={""} />
              ))}
            </View>
            <Input label="Valor: " />
            <TouchableOpacity style={styles.swapButton}>
              <Text style={styles.swapButtonText}>↑↓</Text>
            </TouchableOpacity>

            <Text style={styles.label}>Para: </Text>
            <View style={styles.currencyGrid}>
              {currencies.map((currency) => (
                <Button variant="secondary" currency={currency} key={currency.code} onPress={""} />
              ))}
            </View>
          </View>
          <TouchableOpacity onPress={fetchExchangeRate} style={styles.convertButton}>
            <Text style={styles.swapButtonText}>Converter</Text>
          </TouchableOpacity>
        </View>
        <ResultCard />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
