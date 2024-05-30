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
  isDragging = false;
  startPos = 0;
  prevTranslate = 0;
  currentTranslate = 0;
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
    this.initCarousel();
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.teamMembers.length;
    this.setCarouselPosition();
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.teamMembers.length) % this.teamMembers.length;
    this.setCarouselPosition();
  }

  initCarousel() {
    const carouselContainer = document.querySelector('.carousel-container') as HTMLElement;
    if (carouselContainer) {
      carouselContainer.addEventListener('mousedown', this.startDrag.bind(this));
      carouselContainer.addEventListener('mouseup', this.endDrag.bind(this));
      carouselContainer.addEventListener('mouseleave', this.endDrag.bind(this));
      carouselContainer.addEventListener('mousemove', this.drag.bind(this));
    }
  }
  
  startDrag(event: MouseEvent) {
    this.isDragging = true;
    this.startPos = event.clientX;
    this.prevTranslate = this.currentTranslate;
  }
  
  endDrag() {
    this.isDragging = false;
  }
  
  drag(event: MouseEvent) {
    if (this.isDragging) {
      const currentPosition = event.clientX;
      this.currentTranslate = this.prevTranslate + currentPosition - this.startPos;
      this.setCarouselPosition();
    }
  }
  
  setCarouselPosition() {
    const carousel = document.querySelector('.carousel') as HTMLElement;
    if (carousel) {
      const translateX = -this.currentSlide * carousel.clientWidth + this.currentTranslate;
      carousel.style.transform = `translateX(${translateX}px)`;
    }
  }

  getProducts() {
    this._productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  addToCart(product: Product) {
    this._productService.addProduct(product);
  }

  showContent(index: number) {
    // Your implementation of showContent function
  }
}


