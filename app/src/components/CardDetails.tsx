import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ProductDTO } from "../types/Product";
import React, { FC } from "react";
// import React, { startTransition } from "react";

interface Item {
    item: ProductDTO;
  }
  


  const CardDetails: FC<Item> = ({ item }) => {    
    return (
        <>
        <View style={style.container}>
        
        <Image style={style.image} source={{ uri: item.image }} />
        
        <Text style={style.productName}>{item.title}</Text>

        <Text style={style.textAlign}>{item.description}</Text>
        
        <View style={style.containerCart}>
        <Text>R$ {item.price}</Text>
        <TouchableOpacity style={style.button}> <Text>Adicionar ao carrinho</Text></TouchableOpacity>
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
    },

    button: {
        width: "100%"
    }
  });
  



export default CardDetails;