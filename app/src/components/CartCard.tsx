import React, { FC, useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StackCartList } from "../types/StackCart";
import { Feather } from "@expo/vector-icons";
import {  Text, View, TouchableOpacity } from "react-native";
// import { StyleSheet, Image } from "react-native";
import { ICartItem } from "../types/Product";
// import { ProductDTO } from "../types/Product";

// interface Item {
//   item: ProductDTO;
// }
// ProductCard: FC<Item> = ({ item })

interface Item {
  item: ICartItem;
}

const CartCard: FC<Item> = ({ item }) => {
  const { removeProduct } = useContext(CartContext);
  const navigation = useNavigation<NavigationProp<StackCartList>>();
  // const navigation = useNavigation();
  const produto = item.product;

  return (
    <View>
      <Text>{item.product.title}!!!</Text>
      <Text>
        R$ {item.product.price}. Quantidade: {item.quantity}.
      </Text>
      <TouchableOpacity
        key={item.product.id}
        onPress={() => removeProduct(item.product.id)}
      >
        <Text>Remover {item.product.title} do carrinho?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("OrderStatus", {
            produto: produto,
            quantiy: item.quantity,
          }); // Passando um array com um único produto
        }}
      >
        <Text>Ordem de status</Text>
        <Feather name="anchor" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default CartCard;
