import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useContext, useEffect } from "react";
import { CartContext } from "../contexts/CartContext";
import { useNavigation } from "@react-navigation/native";

const OrderStatus = () => {
  const { deleteCart } = useContext(CartContext);
  const navigation = useNavigation<any>();

  useEffect(() => {
    deleteCart();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
        <Image
          style={styles.image}
          source={require("../../src/assets/check-mark.png")}
        />

        <Text style={styles.headingFont}> Pedido finalizado! </Text>
        <Text> Aguarde as informações da entrega </Text>

        <TouchableOpacity
          style={styles.buttonFirstPage}
          onPress={() => {
            navigation.navigate("Cart");
          }}
        >
          <Text style={styles.buttonText}>Ir para a tela inicial</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // DEBUG: backgroundColor: 'red',
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: "25%",
  },

  containerText: {
    // DEBUG: backgroundColor: 'green',
    height: 400,
    width: "70%",
    display: "flex",
    alignItems: "center",
    gap: 30,
  },

  image: {
    width: 100,
    height: 100,
  },

  headingFont: {
    fontSize: 20,
    fontWeight: "bold",
  },

  buttonFirstPage: {
    height: 50,
    backgroundColor: "#3D737F",
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 50,
  },

  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
});

export default OrderStatus;
