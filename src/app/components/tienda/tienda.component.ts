import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  products: Product[] = [];

  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this._productService.getProducts().subscribe(data => {
      this.products = data;
    })
  }

  addToCart(product: Product) {

    this._productService.addProduct(product)
  }

}
