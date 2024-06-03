import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-navbar-logout',
  templateUrl: './navbar-logout.component.html',
  styleUrls: ['./navbar-logout.component.css']
})
export class NavbarLogoutComponent implements OnInit {

  viewCart: boolean = false;
  myCart$ = this.storeService.myCart$;
  categories: Category[] = [];

  constructor(private router: Router, private storeService: ProductService, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  onToggleCart() {
    this.viewCart = !this.viewCart

  };

  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }

  inicio() {
    this.router.navigate(['/dashboardLogout'])
  }

  QuienesSomos() {
    this.router.navigate(['/quienes-somosLogout'])
  }

  Horarios() {
    this.router.navigate(['/horariosLogout'])
  }

  Planificacion() {
    this.router.navigate(['/planificacionLogout'])
  }

  Tarifas() {
    this.router.navigate(['/tarifasLogout'])
  }

  Contacto() {
    this.router.navigate(['/contactoLogout'])
  }

  Tienda() {
    this.router.navigate(['/tiendaLogout'])
  }

  getCategories(): void {
    this.categoryService.getCategory().subscribe(categories => {
      this.categories = categories;
    });
  }

  verTodosProductos(): void {
    this.router.navigate(['/tiendaLogout']);
  }

  verProductosPorCategoria(categoryId: number): void {
    this.router.navigate(['/tiendaLogout', categoryId]);
  }

  login() {
    this.router.navigate(['/login'])
  }

  sign_in() {
    this.router.navigate(['/signIn'])
  }

}
