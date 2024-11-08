import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import { ProductDTO } from "../types/Product";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StackProductList } from "../types/StackProductList";
import { Feather } from "@expo/vector-icons";

interface Item {
  item: ProductDTO;
}

// const ProductCard: FC<Item> = ({ item }) => {
// const navigation = useNavigation<NavigationProp<StackProductList>>();
// <TouchableOpacity
//     onPress={() => navigation.navigate("ProductDetails", item)}
//   >
// return (
//   <View style={styles.container}>
//     <Text>ProductCard</Text>
//     <Text>{item.title}!!!</Text>
//     <Text>
//       {item.price}, #{item.id}, {item.category}
//     </Text>
//     <Text>
//       Rate: {item.rating.rate}, Num-avaliações: {item.rating.count}
//     </Text>
//     <Text>{item.description}</Text>
//     <Image source={{ uri: item.image }} style={{ width: 200, height: 200 }} />
//   </View>
// );
// </TouchableOpacity>
// };

// export default ProductCard;

// const styles = StyleSheet.create({
//   container: {
//     margin: 20,
//   },
// });

// Products component
const ProductCard: FC<Item> = ({ item }) => {
  return (
    <View style={style.container}>
      <Image style={style.image} source={{ uri: item.image }} />
      <Text style={style.productName}>{item.title}</Text>
      <View style={style.containerCart}>
        <Text>R$ {item.price}</Text>
        <TouchableOpacity>
          <Feather name="shopping-cart" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductCard;

const style = StyleSheet.create({
  container: {
    display: "flex",
    width: "95%",
    marginVertical: 8,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "center",
    padding: 20,
    borderRadius: 5,
    gap: 15,
    textAlign: "center",
  },

  containerCart: {
    display: "flex",
    flexDirection: "row",
    gap: 15,
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 15,
  },

  text: {
    textAlign: "center",
  },

  productName: {
    textAlign: "center",
    fontWeight: "bold",
  },
});
