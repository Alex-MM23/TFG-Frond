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
  currentSlide = 0;
  teamMembers = [
    {
      img: '/assets/img/javi.png',
      username: '@javirun90',
      description: 'Emprendedor de la vida misma.<br>CEO BRAVE BULLS.<br>Amante de su trabajo y concienciado en su proyecto.'
    },
    {
      img: '/assets/img/dani.png',
      username: '@ocr_coach',
      description: 'Emprendedor de la vida misma.<br>OCR Elite Athlete<br>Gestión deportiva y fisioterapia<br>Entrenador OCR Madrid Río y Boadilla del Monte'
    },
    {
      img: '/assets/img/vanesa.png',
      username: '@vanefg7',
      description: 'Entrenadora OCR y competidora élite.<br>Al tanto para informaros de todo trás las pantallas junto a su mano derecha, Manuel.'
    },
    {
      img: '/assets/img/manu.png',
      username: '@manurun02',
      description: 'Community Manager de RRSS.'
    }
  ];
  
  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.teamMembers.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.teamMembers.length) % this.teamMembers.length;
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
