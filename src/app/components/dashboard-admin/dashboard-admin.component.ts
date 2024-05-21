import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/interfaces/category';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {

  categoryForm: FormGroup;
  loading: boolean = false;

  constructor(private fb: FormBuilder,
              private toastr: ToastrService,
              private categoryService: CategoryService) {
    this.categoryForm = this.fb.group({
      title: ['', Validators.required],
      description: ['']
    });
  }

  createCategory() {
    if (this.categoryForm.invalid) {
      this.toastr.error('Todos los campos son obligatorios', 'Error');
      return;
    }

    const category: Category = this.categoryForm.value;
    this.loading = true;

    this.categoryService.createCategory(category).subscribe({
      next: (data) => {
        this.loading = false;
        this.toastr.success('Categoría creada con éxito', 'Éxito');
        this.categoryForm.reset();
      },
      error: (err) => {
        this.loading = false;
        this.toastr.error('Error al crear la categoría', 'Error');
      }
    });
  }
  
  ngOnInit(): void {
  }

}
