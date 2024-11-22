import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity} from "react-native";


const PixPayment = () => {

    return (
        <View style={styles.container}>
            
            <View style={styles.containerBorder}>
                <Text style={styles.headingText}>ESCANEIE O QR CODE</Text>
                <View style={styles.containerImage}>
                    <Image style={styles.qrcode} source={require('../assets/qrcode.png')} />
                </View>

                <TouchableOpacity style={styles.button}> <Text style={styles.boldText}>LER QR CODE</Text> </TouchableOpacity>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({

    container: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 30,

    },

    pix: {
        width: 140,
        height: 50
    },
    
    qrcode: {
        width: 250,
        height: 240,
        marginTop: 120
    },

    headingText: {
        fontSize: 20,
        marginBottom: 30,
        fontWeight: 'medium'
    },

    containerImage: {
        display: 'flex',
        flexDirection: 'column',
        gap: 25,
        width: '80%',
        height: "60%",   
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,
        padding: 20,
        borderRadius: 20,
    },

    containerBorder: {
        backgroundColor: '#fff', 
        borderWidth: 2, 
        borderColor: '#000', 
        borderRadius: 20,
        shadowColor: '#000', 
        shadowOpacity: 0.2, 
        shadowRadius: 10, 
        shadowOffset: { width: 0, height: 4 }, 
        elevation: 5, 
        display: 'flex',
        gap: 25,
        width: '80%',
        height: "45%",   
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 60,
        padding: 20,
    },

    button: {
        backgroundColor: '#008C77',
        width: 200,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 120,
        height: 50,
        borderRadius: 10
    },

    boldText: {
        fontWeight: 'bold',
        color: 'white'
    }

})

export default PixPayment;