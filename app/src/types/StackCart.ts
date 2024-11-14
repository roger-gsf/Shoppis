import { ICartItem } from "./Product";

export type StackCartList = {
  Cart: undefined;
  OrderStatus: {
    produtos: ICartItem[];
  };
  Payment: {
    produtos: ICartItem[];
  };
};
