import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
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

  showContent(index: number) {
    // Primero ocultamos todos los textos desplegables
    const allTextElements = document.querySelectorAll('.desplegable');
    allTextElements.forEach(element => {
      element.classList.remove('mostrar');
    });

    // Quitamos la clase 'activo' de todos los botones
    const allButtons = document.querySelectorAll('.botones h4');
    allButtons.forEach(button => {
      button.classList.remove('activo');
    });

    // Mostramos el texto correspondiente y añadimos la clase 'activo' al botón
    const selectedTextElement = document.getElementById(`txts_${index}`);
    const selectedButton = document.getElementById(`mostrar_${index}`);
    
    if (selectedTextElement) {
      selectedTextElement.classList.add('mostrar');
    }
    if (selectedButton) {
      selectedButton.classList.add('activo');
    }
  }

}
