import { RootSiblingParent } from "react-native-root-siblings";
import Routes from "./src/routes";
import React from "react";
import { UserProvider } from "./src/contexts/UserContext";
import { CartContextProvider } from "./src/contexts/CartContext";
import PaymentInfo from "./src/screens/PaymentInfo";


export default function App() {
  return (
    <RootSiblingParent>
      <UserProvider>
        <CartContextProvider>
          <Routes />
        </CartContextProvider>
      </UserProvider>
    </RootSiblingParent>
  );
}
