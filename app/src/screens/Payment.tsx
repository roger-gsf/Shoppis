import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { FC, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ICartItem } from "../types/Product";
interface Item {
  produto: ICartItem;
}
// const Payment: FC<Item> = ({ produto }) => {
const Payment = () => {
  const { produto } = useRoute().params as { produto: ICartItem[] };
  const [paymentStatus, setPaymentStatus] = useState("");
  const navigation = useNavigation<any>();

  // Função para simular o pagamento
  const handlePayment = (method: "PIX" | "Cartão de Crédito") => {
    // Aqui você pode adicionar lógica para processar o pagamento
    setPaymentStatus(`Pagamento realizado com sucesso via ${method}`);

    // Depois de processar, redireciona para a tela de status do pedido
    navigation.navigate("OrderStatus");
  };

  // const ProductCard: FC<Item> = ({ produto }) => {
  //   const navigation = useNavigation<NavigationProp<StackProductList>>();

  //   return (
  //     <View style={style.container}>
  //       <Image style={style.image} source={{ uri: produto.image }} />
  //       <Text style={style.productName}>{produto.title}</Text>
  //       <View style={style.containerCart}>
  //         <Text>R$ {produto.price}</Text>
  //         <TouchableOpacity onPress={() => {
  //           navigation.navigate('ProductDetails', { produto: [produto] }); // Passando um array com um único produto
  //         }}>
  //           <Feather name="shopping-cart" size={24} color="black" />
  //         </TouchableOpacity>
  //       </View>
  //     </View>
  //   );
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha a forma de pagamento</Text>

      <TouchableOpacity
        style={styles.pixPayment}
        onPress={() => handlePayment("PIX")}
      >
        <Text style={styles.buttonText}>Pagamento via PIX</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.creditCardPayment}
        onPress={() => handlePayment("Cartão de Crédito")}
      >
        <Text style={styles.buttonText}>Pagamento via Cartão de Crédito</Text>
      </TouchableOpacity>

      {paymentStatus ? (
        <Text style={styles.statusMessage}>{paymentStatus}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
  },
  pixPayment: {
    backgroundColor: "#008C77",
    padding: 15,
    marginBottom: 10,
    alignItems: "center",
    borderRadius: 8,
  },
  creditCardPayment: {
    backgroundColor: "#d55209",
    padding: 15,
    marginBottom: 10,
    alignItems: "center",
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  statusMessage: {
    marginTop: 20,
    fontSize: 16,
    color: "green",
  },
});

export default Payment;
