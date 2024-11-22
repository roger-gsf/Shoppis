import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React, { FC, useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { axiosInstance } from "../utils/axios";
import { ProductDTO } from "../types/Product";
import { useNavigation, useRoute } from "@react-navigation/native";

const ProductDetails = () => {
  const route = useRoute();

  const {produto} = route.params as {produto: ProductDTO};

  const {  addProduct } = useContext(CartContext);

  return (
    <View style={styles.container}>
        <View key={produto.id} style={styles.container}>
          <Image style={styles.image} source={{ uri: produto.image }} />
          <Text style={styles.productName}>{produto.title}</Text>
          <Text style={styles.textAlign}>{produto.description}</Text>
          <View style={styles.containerCart}>
            <Text>R$ {produto.price}</Text>
            <TouchableOpacity style={styles.button} onPress={() => addProduct(produto)}>
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
