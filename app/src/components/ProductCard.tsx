import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { FC, useContext } from "react";
import { ProductDTO } from "../types/Product";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StackProductList } from "../types/StackProductList";
import { Feather } from "@expo/vector-icons";
import { CartContext } from "../contexts/CartContext";
interface Item {
  produto: ProductDTO;
}

const ProductCard: FC<Item> = ({ produto }) => {
  const navigation = useNavigation<NavigationProp<StackProductList>>();

  const { addProduct } = useContext(CartContext);

  return (
    <View style={style.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("ProductDetails", { produto });
        }}
      >
        <Image style={style.image} source={{ uri: produto.image }} />
        <Text style={style.productName}>{produto.title}</Text>
        <View style={style.containerCart}>
          <Text>R$ {produto.price}</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          addProduct(produto);
        }}
      >
        <Feather name="shopping-cart" size={24} color="black" />
      </TouchableOpacity>
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
    alignSelf: "center",
  },

  text: {
    textAlign: "center",
  },

  productName: {
    textAlign: "center",
    fontWeight: "bold",
  },
});
