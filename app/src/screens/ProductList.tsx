import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { ProductDTO } from "../types/Product";
import { CartContext } from "../contexts/CartContext";
import { axiosInstance } from ".././utils/axios";
import { SafeAreaProvider } from "react-native-safe-area-context";

const ProductList = () => {
  const [produtos, setProdutos] = useState<ProductDTO[]>();
  const { cart, getCart, addProduct, removeProduct } = useContext(CartContext);

  useEffect(() => {
    getData();
  });

  // <View>
  //     <Text>Lo Carto!!!</Text>
  //     <TouchableOpacity onPress={() => getData("1")}>
  //       <Text>Adicionar algo no carrinho</Text>
  //     </TouchableOpacity>
  //     <TouchableOpacity onPress={getCart}>
  //       <Text>Atualizar carrinho</Text>
  //     </TouchableOpacity>
  //     <FlatList
  //       style={{ alignSelf: "center", flex: 1 }}
  //       data={cart}
  //       renderItem={CartCard} // ({ item }) => <CartCard produto={item} />
  //       keyExtractor={(item) => item.product.id.toString()}
  //       ListEmptyComponent={<Text>NADA ENCONTRADOOOO!!!!</Text>}
  //     />
  //   </View>

  const getData = async () => {
    try {
      const response = await axiosInstance.get<ProductDTO[]>("/products");
      setProdutos(response.data);
    } catch (error) {
      console.log("Erro ao fazer fetching data:", error);
    }
  };

  return (
    <SafeAreaProvider>
      <ScrollView showsVerticalScrollIndicator={true} style={styles.scrollView}>
        <SafeAreaView>
          <FlatList
            style={{
              marginLeft: "4.5%",
            }}
            data={produtos}
            renderItem={({ item }) => <ProductCard item={item} />}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{
              flexGrow: 1,
            }}
            ListEmptyComponent={<Text>Nenhum produto encontrado.</Text>}
          />
        </SafeAreaView>
      </ScrollView>
    </SafeAreaProvider>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#dbdbdb",
  },
});
