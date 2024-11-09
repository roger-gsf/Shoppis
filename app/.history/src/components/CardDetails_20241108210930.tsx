import React, { startTransition } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { ProductDTO } from "../types/Product";


interface Item {
    item: ProductDTO;
  }
  




  const CardDetails: FC<Item> = ({ item }) => {    return (
        <>
        <View style={style.container}>
        
        <Image style={style.image} source={{ uri: item.image }} />
        
        <Text style={style.productName}>{item.title}</Text>

        <Text style={style.textAlign}>{item.description}</Text>
        
        <View style={style.containerCart}>
        <Text>R$ {item.price}</Text>
        {/* <TouchableOpacity>
          <Feather name="shopping-cart" size={24} color="black" />
        </TouchableOpacity> */}
      </View>
    </View>
        </>
    )
}


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

    textAlign: {
        textAlign: "center"
    }
  });
  



export default CardDetails;