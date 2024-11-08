import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useUserContext } from "../contexts/UserContext";

const UserDetails = () => {
  const { userData, handleLogout } = useUserContext();

  return (
    <View style={styles.container}>
      {/* Standard avatar:
      <Image
        style={{ width: 150, height: 150 }}
        source={{
          uri: userData?.user.avatar,
        }}
      /> 
      */}

      <Image
        style={styles.image}
        source={require('../assets/ching-ling.png')}
      />

      <Text>
        {userData?.user.fname ?? ""} {userData?.user.lname ?? ""}
      </Text>
      <Text>{userData?.user.email ?? ""}</Text>
      <TouchableOpacity onPress={handleLogout} style={styles.exitButton}>
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8
  },
  image: {
    width: 150, 
    height: 150,
    borderRadius: 20
  },
  exitButton: {
    justifyContent: 'center',
    width: 145,
    height: 38,
    backgroundColor: 'gray',
    borderRadius: 8
  },
  buttonText: {
    textAlign: 'center',
  }
});
