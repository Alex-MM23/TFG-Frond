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
import { Product } from 'src/app/interfaces/product';
import { data } from 'jquery';
import { ProductCarrito } from 'src/app/interfaces/productCarrito';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {

  categoryForm: FormGroup;
  users: User[] = [];
  orders: Order[] = [];
  orderlines: OrderLine[] = [];
  categorys: Category[] = [];
  loading: boolean = false;
  // Category
  title: string = '';
  description: string = '';
  // Product
  name: string = '';
  descriptionProduct: string = '';
  price: number = 0;
  titleProduct: string = '';
  img: string = '';
  cantidad: number = 0;
  categoryId: number = 0;

  constructor(private fb: FormBuilder,
              private toastr: ToastrService,
              private categoryService: CategoryService,
              private productService: ProductService,
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
    this.getCategory();
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

  addProduct() {
    const product: ProductCarrito = {
      name: this.name,
      description: this.descriptionProduct,
      price: this.price,
      title: this.titleProduct,
      img: this.img,
      cantidad: this.cantidad,
      categoryId: Number(this.categoryId)
    };

    console.log(product);
    
    this.loading = true;

    this.productService.createProduct(product).subscribe({
      next: (v) => {
        this.toastr.success(`El producto ${this.titleProduct} fue registrado con éxito`);
        this.loading = false;

        // Limpiar los campos de entrada después de enviar
        this.name = '';
        this.descriptionProduct = '';
        this.price = 0;
        this.titleProduct = '';
        this.cantidad = 0;
        this.categoryId = 0;

        // Opcional: cerrar el modal
        // this.closeModal();
      },
      error: (e: HttpErrorResponse) => {
        this.loading = false;
        this.toastr.error('Error al registrar el producto');
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
  
  getCategory() {
    this.categoryService.getCategory().subscribe(data => {
      this.categorys = data;
    })
  }

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
