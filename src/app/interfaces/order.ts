export interface Order {
  orderDate: Date;
  totalAmount: number;
  userId: number;
  orderLines: OrderLine[];
}

export interface OrderLine {
  quantity: number;
  price: number;
  productId: number;
}
