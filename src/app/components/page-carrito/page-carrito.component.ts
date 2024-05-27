import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { OrderService } from 'src/app/services/order.service';
import { ToastrService } from 'ngx-toastr';
import { Order } from 'src/app/interfaces/order';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-page-carrito',
  templateUrl: './page-carrito.component.html',
  styleUrls: ['./page-carrito.component.css']
})
export class PageCarritoComponent implements OnInit, OnDestroy {

  myCart$ = this.storeService.myCart$;
  private cartSubscription: Subscription | undefined;
  viewCart: boolean = false;

  constructor(
    private storeService: ProductService, 
    private orderService: OrderService, 
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.cartSubscription = this.myCart$.subscribe();
  }

  ngOnDestroy(): void {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }

  updateUnits(operation: string, id: number): void {
    const product = this.storeService.findProductById(id);
    if (product) {
      if (operation === 'minus' && product.cantidad > 0) {
        product.cantidad -= 1;
      }
      if (operation === 'add') {
        product.cantidad += 1;
      }
      if (product.cantidad === 0) {
        this.deleteProduct(id);
      }
    }
  }

  totalProduct(price: number, units: number): number {
    return price * units;
  }

  deleteProduct(id: number): void {
    this.storeService.deleteProduct(id);
  }

  totalCart(): number {
    return this.storeService.totalCart();
  }

  pagcarrito() {
    this.router.navigate(['/carrito'])
  }

  pgdest() {
    this.router.navigate(['/dashboard'])
  }
        
  payCart(): void {
    // Tomamos una instantánea del carrito actual
    const cartSnapshot = this.storeService.getCartSnapshot();
    const order: Order = {
      orderDate: new Date(),
      totalAmount: this.totalCart(),
      userId: 1,  // Asumiendo que tienes el userId disponible de alguna forma
      orderLines: cartSnapshot.map(item => ({
        productId: item.id,
        quantity: item.cantidad,
        price: item.price
      }))
    };

    this.orderService.createOrder(order).subscribe({
      next: () => {
        console.log('Order placed successfully');
        this.storeService.clearCart(); // Vaciar el carrito después de realizar el pedido
        this.toastr.success('Pedido Realizado Correctamente');
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.log(order)
        console.error('Error placing order:', err);
        this.toastr.error('Error al realizar pedido')
      }
    });
  }
}
