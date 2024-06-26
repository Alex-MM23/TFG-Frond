import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  viewCart: boolean = false;
  myCart$ = this.storeService.myCart$;

  constructor(private router: Router, private storeService: ProductService) { }

  ngOnInit(): void {
  }

  onToggleCart() {
    this.viewCart = !this.viewCart

  };

  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }

}
