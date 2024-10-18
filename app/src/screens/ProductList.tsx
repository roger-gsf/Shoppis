import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import ProductCard from "../components/ProductCard";
import { ProductDTO } from "../types/Product";

const ProductList = () => {
  const [produtos, setProdutos] = useState<ProductDTO[]>([]);
  const { theme, colorFonte } = useContext();

  return (
    <View>
      <Text>ProductList</Text>
      <FlatList
        style={{ alignSelf: "center", flex: 1 }}
        data={produtos}
        renderItem={({ item }) => <ProductCard produto={item} />}
        keyExtractor={(produto) => produto.id.toString()}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: produtos.length === 0 ? "center" : undefined,
          alignItems: produtos.length === 0 ? "center" : undefined,
        }}
        ListEmptyComponent={<Text>NADA ENCONTRADOOOO!!!!</Text>}
      />
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({});