import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { ProductDTO } from "../types/Product";
import { axiosInstance } from ".././utils/axios";
import { SafeAreaProvider } from "react-native-safe-area-context";

const ProductList = () => {
  const [produtos, setProdutos] = useState<ProductDTO[]>();

  const getData = async () => {
    try {
      const response = await axiosInstance.get<ProductDTO[]>("/products");
      setProdutos(response.data);
    } catch (error) {
      console.log("Erro ao fazer fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <SafeAreaProvider>
      <ScrollView showsVerticalScrollIndicator={true} style={styles.scrollView}>
        <SafeAreaView>
          <FlatList
            style={{
              marginLeft: "4.5%",
            }}
            data={produtos}
            renderItem={({ item }) => <ProductCard produto={item} />}
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
