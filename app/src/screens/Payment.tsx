import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ICartItem } from "../types/Product";

const Payment = () => {
  const { produtos } = useRoute().params as { produtos: ICartItem[] };
  const [paymentStatus, setPaymentStatus] = useState("");
  const navigation = useNavigation();

  // Função para simular o pagamento
  const handlePayment = (method: "PIX" | "Cartão de Crédito") => {
    // Aqui você pode adicionar lógica para processar o pagamento
    setPaymentStatus(`Pagamento realizado com sucesso via ${method}`);

    // Depois de processar, redireciona para a tela de status do pedido
    navigation.navigate("OrderStatus", { produtos });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha a forma de pagamento</Text>

      <TouchableOpacity
        style={styles.pixPayment}
        onPress={() => handlePayment("PIX")}
      >
        <Text style={styles.buttonText}>Pagamento via PIX</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.creditCardPayment}
        onPress={() => handlePayment("Cartão de Crédito")}
      >
        <Text style={styles.buttonText}>Pagamento via Cartão de Crédito</Text>
      </TouchableOpacity>

      {paymentStatus ? <Text style={styles.statusMessage}>{paymentStatus}</Text> : null}
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
    backgroundColor: "#d55209",
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
