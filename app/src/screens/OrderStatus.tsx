import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ProductDTO } from "../types/Product";
import { CartContext } from "../contexts/CartContext";

const OrderStatus = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { produto } = route.params as { produto: ProductDTO[] };

  const { cart, getCart, addProduct, removeProduct } = useContext(CartContext);
  
  return (
    <View>
      {produto.map(produtoItem => (
        <Text key={produtoItem.id}>
          <Text>Ordem de status de {produtoItem.title}!</Text>
        </Text>
      ))}
    </View>
  );
};

export default OrderStatus;

const styles = StyleSheet.create({});
