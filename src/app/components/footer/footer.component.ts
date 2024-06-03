import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { formFooter } from 'src/app/interfaces/formFooter';
import { ErrorService } from 'src/app/services/error.service';
import { FooterService } from 'src/app/services/formFooter.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  name: string = '';
  email: string = '';
  phone: number = 0;
  city: string = '';
  coment: string = '';
  loading: boolean = false;

  constructor(private footerService: FooterService, private _errorService: ErrorService, private fb: FormBuilder, private toastr: ToastrService,) { }

  ngOnInit(): void {
  }

  addCategory() {
    // Creamos el objeto
    const footer: formFooter= {
      name: this.name,
      phone: this.phone,
      email: this.email,
      coment: this.coment,
      city: this.city
    };

    this.loading = true;

    this.footerService.createCategory(footer).subscribe({
      next: (v) => {
        this.toastr.success(`Formulario rellenado con éxito`);
        this.loading = false;

        // Limpiar los campos de entrada después de enviar
        this.name = ''
        this.email = ''
        this.phone = 0
        this.city = ''
        this.coment = ''

        // Opcional: cerrar el modal
        // this.closeModal();
      },
      error: (e: HttpErrorResponse) => {
        this.loading = false;
        this._errorService.msjError(e);
      }
    });
  }

}
