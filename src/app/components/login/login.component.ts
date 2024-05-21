import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/interfaces/user';
import { ErrorService } from 'src/app/services/error.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  loading: boolean = false;

  constructor(private toastr: ToastrService,
    private _userService: UserService,
    private router: Router,
    private _errorService: ErrorService) { }

  ngOnInit(): void {
  }

  login() {

    // Validamos que el usuario ingrese datos
    if (this.username == '' || this.password == '') {
      this.toastr.error('Todos los campos son obligatorios', 'Error');
      return
    }

    // Creamos el body
    const user: User = {
      username: this.username,
      password: this.password,
      name: '',
      surname: '',
      email: ''
    }

    this.loading = true;
    this._userService.login(user).subscribe({
      next: (response) => {
        const { token, profileId } = response;
        localStorage.setItem('token', token);
        // Redirigir basado en el profileId
        if (profileId === 1) {
          this.router.navigate(['/admin']);
        } else if (profileId === 2) {
          this.router.navigate(['/dashboard']);
        }
      },
      error: (e: HttpErrorResponse) => {
        this._errorService.msjError(e);
        this.loading = false;
      }
    });
  }
}
