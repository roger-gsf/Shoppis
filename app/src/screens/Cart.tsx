import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useContext, useEffect } from "react";
import { CartContext } from "../contexts/CartContext";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { ICartItem } from "../types/Product";
import { StackCartList } from "../types/StackCart";

const Cart = () => {
  const { cart, getCart } = useContext(CartContext);
  const navigation = useNavigation<NavigationProp<StackCartList>>();

  useEffect(() => {
    getCart();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        renderItem={({ item }: { item: ICartItem }) => (
          <View style={styles.product}>
            <Text>{item.product.title}</Text>
            <Text>Quantidade: {item.quantity}</Text>
          </View>
        )}
        keyExtractor={(item) => item.product.id.toString()}
      />

      {!!cart && cart.length > 0 ? (
        <TouchableOpacity
          style={styles.paymentButton}
          onPress={() => {
            navigation.navigate("Payment", { produto: cart });
          }}
        >
          <Text style={styles.buttonText}>Ir para o pagamento</Text>
        </TouchableOpacity>
      ) : (
        <Text
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "100%",
          }}
        >
          Sem itens no carrinho de compras.
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    backgroundColor: "#fff",
  },
  product: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  paymentButton: {
    backgroundColor: "#0038b1",
    padding: 15,
    marginTop: 20,
    alignItems: "center",
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default Cart;
