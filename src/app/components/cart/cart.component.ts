import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { PaymentService } from 'src/app/services/payment.service';
import { Order, OrderLine } from 'src/app/interfaces/order';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  myCart$ = this.storeService.myCart$;

  viewCart: boolean = false;

  constructor(private storeService: ProductService,  private paymentService: PaymentService,private router: Router) { }

  updateUnits(operation: string, id: number) {

    const product = this.storeService.findProductById(id)
    if (product) {
      if (operation === 'minus' && product.cantidad > 0) {
        product.cantidad = product.cantidad - 1;
      }
      if (operation === 'add') {
        product.cantidad = product.cantidad + 1;

      }
      if (product.cantidad === 0) {
        this.deleteProduct(id)
      }
    }

  }
  totalProduct(price: number, units: number) {
    return price * units
  }
  deleteProduct(id: number) {
    this.storeService.deleteProduct(id);

  }
  totalCart() {
    const result = this.storeService.totalCart();
    return result;
  }

  pagcarrito() {
    this.router.navigate(['/carrito'])
  }

  payCart() {
    const orderLines: OrderLine[] = this.storeService.getCartItems().map(item => ({
      productId: item.id,
      quantity: item.cantidad,
      price: item.price
    }));

    const order: Order = {
      orderDate: new Date(),
      totalAmount: this.totalCart(),
      userId: 1, // Puedes obtener el ID del usuario desde la sesión o donde sea necesario
      orderLines: orderLines
    };

    this.paymentService.payCart(order).subscribe({
      next: () => {
        this.router.navigate(['/success']); // Redirecciona a la página de éxito después de pagar
      },
      error: (error) => {
        console.error('Error al pagar el carrito:', error);
      }
    });
  }

}
