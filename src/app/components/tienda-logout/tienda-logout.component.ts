import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/interfaces/category';
import { Product } from 'src/app/interfaces/product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-tienda-logout',
  templateUrl: './tienda-logout.component.html',
  styleUrls: ['./tienda-logout.component.css']
})
export class TiendaLogoutComponent implements OnInit {

  products: Product[] = [];
  categories: Category[] = [];

  constructor(private _productService: ProductService, private categoryService: CategoryService, private router: Router) { }

  ngOnInit(): void {
    this.getProducts();
    this.getAllCategories();
  }

  getProducts() {
    this._productService.getProducts().subscribe(data => {
      this.products = data;
    })
  }

  addToCart(product: Product) {

    this._productService.addProduct(product)
  }

  getProductsByCategory(categoryId: number): void {
    this._productService.getProductsByCategory(categoryId).subscribe(products => {
      this.products = products;
    });
  }

  getAllCategories(): void {
    this.categoryService.getCategory().subscribe(data => {
      this.categories = data;
    });
  }

  verTodosProductos(): void {
    this.getProducts();
  }

  verProductosPorCategoria(categoryId: number): void {
    if (categoryId !== undefined) {
      this.getProductsByCategory(categoryId);
    }
  }

  handleKeyDown(event: KeyboardEvent, categoryId: number): void {
    if (event.key === 'Enter') {
      if (categoryId !== undefined) {
        this.verProductosPorCategoria(categoryId);
      }
    }
  }

  login() {
    this.router.navigate(['/login'])
  }

}
