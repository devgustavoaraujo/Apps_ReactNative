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
  ActivityIndicator,
} from "react-native";
import { useState } from "react";
import { ResultCard } from "../src/components/resultCard/index";
import { Button } from "../src/components/button/index.js";
import { styles } from "./AppStyles.js";
import { currencies } from "../src/constants/currencies.js";
import { Input } from "../src/components/input/index.js";
import { exchangeRateApi } from "../src/services/api";
import { converteCurrency } from "../src/utils/convertCurrency";

export default function Home() {
  const [amount, setAmount] = useState(Number);
  const [fromCurrency, setfromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState("");
  const [exchangeRate, setexchangeRate] = useState(null);

  async function fetchExchangeRate() {
    try {
      if (!amount) return;

      const data = await exchangeRateApi(fromCurrency);
      const rate = data.rates[toCurrency];
      const convertedAmount = converteCurrency(amount, rate);
      setexchangeRate(rate);
      setResult(convertedAmount);
    } catch (err) {
      alert("Erro, Tente Novamente!");
    }
  }

  function swapCurrency() {
    setfromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setResult("");
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
                <Button
                  currency={currency}
                  key={currency.code}
                  onPress={() => setfromCurrency(currency.code)}
                  isSelected={fromCurrency === currency.code}
                />
              ))}
            </View>

            <Input label="Valor: " value={amount} onChangeText={setAmount} />
            <TouchableOpacity style={styles.swapButton}>
              <Text style={styles.swapButtonText} onPress={swapCurrency}>
                ↑↓
              </Text>
            </TouchableOpacity>

            <Text style={styles.label}>Para: </Text>
            <View style={styles.currencyGrid}>
              {currencies.map((currency) => (
                <Button
                  variant="secondary"
                  currency={currency}
                  key={currency.code}
                  onPress={() => setToCurrency(currency.code)}
                  isSelected={toCurrency === currency.code}
                />
              ))}
            </View>
          </View>
          <TouchableOpacity onPress={fetchExchangeRate} style={styles.convertButton}>
            {loading ? <ActivityIndicator color="white" /> : <Text style={styles.swapButtonText}>Converter</Text>}
          </TouchableOpacity>
        </View>
        <ResultCard
          currencies={currencies}
          toCurrency={toCurrency}
          fromCurrency={fromCurrency}
          result={result}
          exchangeRate={exchangeRate}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
