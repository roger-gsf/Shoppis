import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { FC, useContext } from "react";
import { ICartItem, ProductDTO } from "../types/Product";
import { CartContext } from "../contexts/CartContext";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StackCartList } from "../types/StackCart";
import { Feather } from "@expo/vector-icons";

// interface Item {
//   item: ProductDTO;
// }
// ProductCard: FC<Item> = ({ item })

interface Item {
  item: ICartItem
}

const CartCard: FC<Item> = ({ item }) => {
  const { cart, getCart, addProduct, removeProduct } = useContext(CartContext);
  const navigation = useNavigation<NavigationProp<StackCartList>>();
  const produto = item.product;

  return (
    <View>
      <Text>{item.product.title}!!!</Text>
      <Text>
        R$ {item.product.price}. Quantidade: {item.quantity}.
      </Text>
      <TouchableOpacity key={item.product.id} onPress={() => removeProduct(item.product.id)}>
          <Text>Remover {item.product.title} do carrinho?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
          navigation.navigate('OrderStatus', { produto: [produto] }); // Passando um array com um único produto
        }}>
          <Text>Ordem de status</Text><Feather name="anchor" size={24} color="black" />
        </TouchableOpacity>
      
    </View>
  );
};

export default CartCard;
