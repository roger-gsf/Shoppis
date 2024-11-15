import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import { ICartItem } from "../types/Product";
import { useNavigation, useRoute } from "@react-navigation/native";

const OrderStatus = () => {
  const { produto } = useRoute().params as { produto: ICartItem[] };
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Status do Pedido</Text>
      <Text style={styles.successMessage}>Pagamento aprovado com sucesso!</Text>
      <FlatList
        data={produto}
        renderItem={({ item }: { item: ICartItem }) => (
          <View style={styles.product}>
            <Text>{item.product.title}</Text>
            <Text>Quantidade: {item.quantity}</Text>
          </View>
        )}
        keyExtractor={(item) => item.product.id.toString()}
      />
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
    fontWeight: "bold",
  },
  successMessage: {
    fontSize: 16,
    marginVertical: 10,
    color: "green",
  },
  product: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});

export default OrderStatus;
