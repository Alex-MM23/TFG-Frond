import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-page-carrito',
  templateUrl: './page-carrito.component.html',
  styleUrls: ['./page-carrito.component.css']
})
export class PageCarritoComponent implements OnInit {

  myCart$ = this.storeService.myCart$;

  viewCart: boolean = false;

  constructor(private storeService: ProductService, private router: Router) { }

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

  pgdest() {
    this.router.navigate(['/dashboard'])
  }

  ngOnInit(): void {
  }

}
