import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React, { FC, useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { axiosInstance } from "../utils/axios";
import { ProductDTO } from "../types/Product";
import { useNavigation, useRoute } from "@react-navigation/native";

const ProductDetails = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { produto } = route.params as { produto: ProductDTO[] };

  const { cart, getCart, addProduct, removeProduct } = useContext(CartContext);

  const getData = async (input: string) => {
    try {
      const response = await axiosInstance.get<ProductDTO>(`/products/${input}`);
      addProduct(response.data);
    } catch (error) {
      console.log("Erro ao fazer fetching data:", error);
    }
  };

  return (
    <View style={styles.container}>
      {produto.map(produtoItem => (
        <View key={produtoItem.id} style={styles.container}>
          <Image style={styles.image} source={{ uri: produtoItem.image }} />
          <Text style={styles.productName}>{produtoItem.title}</Text>
          <Text style={styles.textAlign}>{produtoItem.description}</Text>
          <View style={styles.containerCart}>
            <Text>R$ {produtoItem.price}</Text>
            <TouchableOpacity style={styles.button} onPress={() => getData(produtoItem.id.toString())}>
              <Text>Adicionar produto no carrinho</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "95%",
    marginVertical: 8,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "center",
    padding: 20,
    borderRadius: 5,
    gap: 15,
    textAlign: "center",
  },

  containerCart: {
    display: "flex",
    flexDirection: "row",
    gap: 15,
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 15,
  },

  text: {
    textAlign: "center",
  },

  productName: {
    textAlign: "center",
    fontWeight: "bold",
  },

  textAlign: {
    textAlign: "center"
  },

  button: {
    width: "100%"
  }
});
