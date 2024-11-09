import { ProductDTO } from "./Product";

export type StackCartList = {
  Cart: undefined;
  OrderStatus: {
    produto: ProductDTO[]
  }
  Payment: undefined;
};