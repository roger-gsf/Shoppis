import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useContext, useEffect } from "react";
import { ICartItem } from "../types/Product";
import { useNavigation, useRoute } from "@react-navigation/native";
import { CartContext } from "../contexts/CartContext";

const OrderStatus = () => {
 // const { produto } = useRoute().params as { produto: ICartItem[] };
 const { deleteCart } = useContext(CartContext);

 useEffect(() => {
  deleteCart()
 }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Status do Pedido</Text>
      <Text style={styles.successMessage}>Pagamento aprovado com sucesso!</Text>
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
