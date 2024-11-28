import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";

const Payment = () => {
  const [paymentStatus, setPaymentStatus] = useState<boolean>(true);
  const navigation = useNavigation<any>();

  const handlePaymentPix = () => {
    setPaymentStatus(false);
    navigation.navigate("PixPayment");
  };

  const handlePaymentCredit = () => {
    setPaymentStatus(false);
    navigation.navigate("PaymentInfo");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha a forma de pagamento</Text>

      <TouchableOpacity
        style={styles.pixPayment}
        onPress={() => handlePaymentPix()}
      >
        <Text style={styles.buttonText}>Pagamento via PIX</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.creditCardPayment}
        onPress={() => handlePaymentCredit()}
      >
        <Text style={styles.buttonText}>Pagamento via Cartão de Crédito</Text>
      </TouchableOpacity>

      {paymentStatus ? (
        <Text style={styles.statusMessage}>{paymentStatus}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
  },
  pixPayment: {
    backgroundColor: "#008C77",
    padding: 15,
    marginBottom: 10,
    alignItems: "center",
    borderRadius: 8,
  },
  creditCardPayment: {
    backgroundColor: "#4B3588",
    padding: 15,
    marginBottom: 10,
    alignItems: "center",
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  statusMessage: {
    marginTop: 20,
    fontSize: 16,
    color: "green",
  },
});

export default Payment;
