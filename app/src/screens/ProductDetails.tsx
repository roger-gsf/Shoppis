import { StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";
import React from "react";
import CardComponent from "../components/CardComponent";

const ProductDetails = () => {
  return (
    <View>
      {/* <Text>ProductDetails</Text> */}
        <CardComponent />

        <TouchableOpacity>Adicionar ao carrinho</TouchableOpacity>
      
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({});
