import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import { ProductDTO } from "../types/Product";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StackProductList } from "../types/StackProductList";
import { Feather } from "@expo/vector-icons";

interface Item {
  produto: ProductDTO;
}

const ProductCard: FC<Item> = ({ produto }) => {
  const navigation = useNavigation<NavigationProp<StackProductList>>();

  return (
    <View style={style.container}>
      <Image style={style.image} source={{ uri: produto.image }} />
      <Text style={style.productName}>{produto.title}</Text>
      <View style={style.containerCart}>
        <Text>R$ {produto.price}</Text>
        <TouchableOpacity onPress={() => {
          navigation.navigate('ProductDetails', { produto: [produto] }); // Passando um array com um único produto
        }}>
          <Feather name="shopping-cart" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductCard;

const style = StyleSheet.create({
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
});
