import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import { ICartItem, ProductDTO } from "../types/Product";
import { CartContext } from "../contexts/CartContext";
import CartCard from "../components/CartCard";
import { axiosInstance } from ".././utils/axios";

const Cart = () => {
  const { cart, getCart, addProduct, removeProduct } = useContext(CartContext);

  // useEffect(() => {

  // });

  // const SmallVideo = ({ title, subtitle, image }: SmallVideoProbs) => {
  //   return (
  //     <View style={styles.container}>
  //       <Image source={{ uri: image }} style={styles.img} />

  //       <View style={{ flexDirection: "column", margin: 20 }}>
  //         <Text style={styles.title}>{title}</Text>

  //         <Text style={styles.subtitle}>{subtitle}</Text>
  //       </View>
  //     </View>
  //   );
  // };

  // <SmallVideo
  //       title="Titulo1"
  //       subtitle="Subtitulo1"
  //       image="https://robohash.org/robozao"
  //     />

  const getData = async (input: string) => {
    console.log("a");
    try {
      const response = await axiosInstance.get<ProductDTO>(
        "/products/" + input
      );
      console.log("O produto:", response.data);
      addProduct(response.data);
    } catch (error) {
      console.log("Erro ao fazer fetching data:", error);
    }
  };

  // Enviar as informações dentro de um objeto do tipo
  return (
    <View>
      <Text>Lo Carto!!!</Text>
      <TouchableOpacity onPress={() => getData("1")}>
        <Text>Adicionar algo no carrinho</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={getCart}>
        <Text>Atualizar carrinho</Text>
      </TouchableOpacity>
      <FlatList
        style={{ alignSelf: "center", flex: 1 }}
        data={cart}
        renderItem={CartCard} // ({ item }) => <CartCard produto={item} />
        keyExtractor={(item) => item.product.id.toString()}
        ListEmptyComponent={<Text>NADA ENCONTRADOOOO!!!!</Text>}
      />
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({});
