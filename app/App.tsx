import React from "react";
import Routes from "./src/routes";
import { RootSiblingParent } from "react-native-root-siblings";
import { UserProvider } from "./src/contexts/UserContext";
import { CartContextProvider } from "./src/contexts/CartContext";

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
