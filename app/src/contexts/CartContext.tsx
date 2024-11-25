import React, { ReactNode, createContext, useContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ICartItem, ProductDTO } from "../types/Product";
import { showError } from "../utils/Toast";
import { Platform } from "react-native";

type CartContextProps = {
  cart: ICartItem[];
  getCart: () => void;
  addProduct: (product: ProductDTO) => void;
  removeProduct: (id: number) => void; // Ou remover enviando o produto todo e desestruturar na função
  deleteCart: () => Promise<void>;
};

type CartProviderProps = {
  children: ReactNode;
};

export const CartContext = createContext<CartContextProps>(
  {} as CartContextProps
);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<ICartItem[]>([]);

  const storeCart = async (value: ICartItem[]) => {
    try {
      const jsonValue = JSON.stringify(value);
      if (Platform.OS !== "web") {
        await AsyncStorage.setItem("@cart", jsonValue);
      } else if (Platform.OS == "web") {
        window.localStorage.setItem("@cart", jsonValue);
      }
    } catch (error) {
      showError("Não foi possível salvar o carrinho");
    }
  };

  const deleteCart = async () => {
    try {
      setCart([]);
      if (Platform.OS !== "web") {
        await AsyncStorage.removeItem("@cart");
      } else if (Platform.OS == "web") {
        window.localStorage.removeItem("@cart");
      }
    } catch (error) {
      showError("Não foi possível salvar o carrinho");
    }
  };

  const getCart = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@cart");
      const cartData = jsonValue !== null ? JSON.parse(jsonValue) : [];
      setCart(cartData);
    } catch (error) {
      showError("Não foi possível recuperar o carrinho");
    }
  };

  const addProduct = (value: ProductDTO) => {
    const existingProduct = cart.find(({ product }) => value.id === product.id);
    if (existingProduct) {
      const newCart = cart.map((item) =>
        item.product.id === existingProduct.product.id
          ? { ...item, quantity: item.quantity ? item.quantity + 1 : 1 }
          : item
      );

      setCart(newCart);
      storeCart(newCart);
    } else {
      const newCart = [...cart];
      const data: ICartItem = { product: value, quantity: 1 };
      newCart.push(data);
      setCart(newCart);
      storeCart(newCart);
    }
  };

  const removeProduct = (id: number) => {
    /*
     Pega o array que contém os produtos que estão no carrinho
     Deixa passar somente os itens que atendem a condição
     Atribui à variável os item que passaram na condição
    */
    const newCart = cart.filter((c) => c.product.id !== id);
    // Salva no state (memória provisória enquanto o app está executando)
    setCart(newCart);
    // Salva na memória permanente do aparelho
    storeCart(newCart);
  };

  return (
    <CartContext.Provider
      value={{ cart, getCart, addProduct, removeProduct, deleteCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
