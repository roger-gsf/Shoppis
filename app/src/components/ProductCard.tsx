import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { ProductDTO } from "../types/Product";

const ProductCard = ({ produto }: { produto: ProductDTO }) => {
  return (
    <View>
      <Text>ProductCard</Text>
      <Text>{produto.title}!!!</Text>
      <Text>
        {produto.price}, #{produto.id}, {produto.category}
      </Text>
      <Text>
        Rate: {produto.rating.rate}, Num-avaliações: {produto.rating.count}
      </Text>
      <Text>{produto.description}</Text>
      <Image
        source={{ uri: produto.image }}
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({});
