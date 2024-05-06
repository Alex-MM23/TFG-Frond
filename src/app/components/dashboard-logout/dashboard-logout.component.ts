import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-dashboard-logout',
  templateUrl: './dashboard-logout.component.html',
  styleUrls: ['./dashboard-logout.component.css']
})
export class DashboardLogoutComponent implements OnInit {
  listProduct: Product[] = []

  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this._productService.getProducts().subscribe(data => {
      this.listProduct = data;
    })
  }

}
