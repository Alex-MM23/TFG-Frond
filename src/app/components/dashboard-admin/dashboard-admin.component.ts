import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/interfaces/category';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/interfaces/user';
import { OrderService } from 'src/app/services/order.service';
import { Order, OrderLine } from 'src/app/interfaces/order';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from 'src/app/services/error.service';
import { OrderLineService } from 'src/app/services/orderLine.service';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {

  categoryForm: FormGroup;
  users: User[] = [];
  orders: Order[] = [];
  orderlines: OrderLine[] = []
  loading: boolean = false;
  title: string = '';
  description: string = '';

  constructor(private fb: FormBuilder,
              private toastr: ToastrService,
              private categoryService: CategoryService,
              private userService: UserService,
              private router: Router,
              private _errorService: ErrorService,
              private orderService: OrderService,
              private orderLineService: OrderLineService) {
    this.categoryForm = this.fb.group({
      title: ['', Validators.required],
      description: ['']
    });
  }

  ngOnInit(): void {
    this.getUser();
    this.getOrder();
    this.getOrderLine();
  }

  addCategory() {
    // Creamos el objeto
    const category: Category = {
      title: this.title,
      description: this.description
    };

    this.loading = true;

    this.categoryService.createCategory(category).subscribe({
      next: (v) => {
        this.toastr.success(`La Categoria ${this.title} fue registrada con éxito`);
        this.loading = false;

        // Limpiar los campos de entrada después de enviar
        this.title = '';
        this.description = '';

        // Opcional: cerrar el modal
        // this.closeModal();
      },
      error: (e: HttpErrorResponse) => {
        this.loading = false;
        this._errorService.msjError(e);
      }
    });
  }

  // closeModal() {
  //   const modalElement = document.getElementById('categoryModal');
  //   if (modalElement) {
  //      const modalInstance = new bootstrap.Modal(modalElement);
  //      modalInstance.hide();
  //   }
  // }
  
  getUser() {
    this.userService.getUser().subscribe(data => {
      this.users = data;
    })
  }

  getOrderLine() {
    this.orderLineService.getOrderLine().subscribe(data => {
      this.orderlines = data;
    })
  }

  getOrder() {
    this.orderService.getOrder().subscribe(data => {
      this.orders = data;
    })
  }

}
