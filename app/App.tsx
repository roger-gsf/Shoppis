import { RootSiblingParent } from "react-native-root-siblings";
import Routes from "./src/routes";
import React from "react";
import { UserProvider } from "./src/contexts/UserContext";
import { CartContextProvider } from "./src/contexts/CartContext";
import Completion from "./src/screens/Completion";
import PixPayment from "./src/screens/PixPayment";

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
