import React  from 'react';
import { View, Image, Text, StyleSheet } from "react-native";


const CardComponent = ({ productImage, productName, productDescription, productPrice}:any) => {

    return (
        <View style={style.container}>
            {/* <Image source={{uri: productImage}} />
            <Text>{productName}</Text>
            <Text>{productDescription}</Text>
            <Text>{productPrice}</Text> */}

            <Image style={style.image} source={{uri: 'https://th.bing.com/th/id/OIP.mNaaJnjxNQ5hgXEaYrnG-QHaFn?rs=1&pid=ImgDetMain'}} />
            <Text>{productName}</Text>

            
        </View>
    )
}


const style = StyleSheet.create({
    container: {
        display: 'flex',
        width: 200,
        height: 200,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'red'
    },
    image:{
        width: 100,
        height: 100,
        marginTop: 15
    }
})



export default CardComponent;