export interface Order {
  id?: number;
  orderDate: Date;
  totalAmount: number;
  userId: number;
  orderLines: OrderLine[];
}

export interface OrderLine {
  orderId?: number;
  quantity: number;
  price: number;
  productId: number;
}
