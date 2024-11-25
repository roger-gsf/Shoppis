import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
// import { Image } from "react-native";

const MenuHeader = () => {
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("CartDetail")}>
      <MaterialIcons
        name="shopping-cart"
        size={36}
        color="#000"
        style={{ marginRight: 35 }}
      />

      {/* <Image
        style={{ width: 32, height: 32, marginRight: 40 }}
        source={require('../assets/shopping-cart.png')}
      /> */}

    </TouchableOpacity>
  );
};
export default MenuHeader;
