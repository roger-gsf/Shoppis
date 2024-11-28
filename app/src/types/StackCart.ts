import { ICartItem } from "./Product";

export type StackCartList = {
  Cart: undefined;
  OrderStatus: {
    produto: ICartItem[];
  };
  Payment: {
    produto: ICartItem[];
  };
  PaymentInfo: undefined;
  PixPayment: undefined;
};
