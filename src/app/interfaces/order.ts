export interface Order {
    orderDate: Date;
    totalAmount: number;
    userId: number;
    orderLines: OrderLine[];
}

export interface OrderLine {
    productId: number;
    quantity: number;
    price: number;
}