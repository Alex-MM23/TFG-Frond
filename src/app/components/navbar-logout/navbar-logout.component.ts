import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-logout',
  templateUrl: './navbar-logout.component.html',
  styleUrls: ['./navbar-logout.component.css']
})
export class NavbarLogoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.router.navigate(['/login'])
  }

  sign_in() {
    this.router.navigate(['/signIn'])
  }

}
