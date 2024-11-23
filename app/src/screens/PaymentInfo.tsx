import React = require("react")
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from "react-native"

const PaymentInfo = () => {

    return (
        <View style={styles.mainContainer}>

            <View style={styles.containerInfo}>
                
                <View style={styles.containerBlock}>
                    <Text style={styles.headerText}> Endereço de entrega</Text>

                    <TextInput style={styles.input} placeholder="Endereço" maxLength={40}/> 
                    
                    <View style={styles.flex}>
                        <TextInput style={styles.input} placeholder="Cidade" maxLength={21}/>
                        <TextInput style={styles.input} placeholder="Estado" maxLength={21}/>
                    </View>

                </View>
                
                <View style={styles.containerBlock}>
                    <Text style={styles.headerText}> Dados do pagamento</Text>

                    <TextInput style={styles.input} placeholder="Número do cartão" maxLength={21} keyboardType='numeric' /> 

                    <View style={styles.flex}>
                        <TextInput style={styles.input} placeholder="Data de validade" maxLength={8}/> 
                        <TextInput style={styles.input} placeholder="CVV" maxLength={2}/> 
                    </View>
                </View>

                    <Image resizeMode="contain" style={styles.imageCard} source={require('../../src/assets/credit-card.png')} />
                    <TouchableOpacity style={styles.button}> <Text style={styles.buttonText}>Finalizar pedido</Text> </TouchableOpacity>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    
    imageCard: {
        width: '100%'
    },

    containerInfo: {
        width: '80%',
        display: 'flex',
        gap: 25
    },

    mainContainer: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }, 

    containerBlock: {
        display: 'flex',
        gap: 13
    },

    headerText: {
        fontWeight: 'bold',
        fontSize: 17,
        marginBottom: 20
    },

    input: {
        borderWidth: 2,
        padding: 6,
        borderRadius: 10,
        width: '100%',
        
    },

    flex: {
        display: 'flex',
        flexDirection: 'row',
        gap: 15
    },

    button: {
        backgroundColor: '#4B3588',
        height: 40,
        width: 180,
        borderRadius: 8,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '17%',
        marginBottom: 15
    }, 

    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    }
})


export default PaymentInfo;
