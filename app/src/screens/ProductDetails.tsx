import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React, { FC, useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { axiosInstance } from "../utils/axios";
import { ProductDTO } from "../types/Product";
import { useNavigation, useRoute } from "@react-navigation/native";

const ProductDetails = () => {
  const route = useRoute();

  const produtoItem = route.params as ProductDTO;

  const {  addProduct } = useContext(CartContext);

  return (
    <View style={styles.container}>
        <View key={produtoItem.id} style={styles.container}>
          <Image style={styles.image} source={{ uri: produtoItem.image }} />
          <Text style={styles.productName}>{produtoItem.title}</Text>
          <Text style={styles.textAlign}>{produtoItem.description}</Text>
          <View style={styles.containerCart}>
            <Text>R$ {produtoItem.price}</Text>
            <TouchableOpacity style={styles.button} onPress={() => addProduct(produtoItem)}>
              <Text>Adicionar produto no carrinho</Text>
            </TouchableOpacity>
            
          </View>
        </View>
 
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
