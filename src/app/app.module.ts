import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

// Modulos
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';

// Componentes
import { LoginComponent } from './components/login/login.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { AddTokenInterceptor } from './utils/add-token.interceptor';
import { DashboardLogoutComponent } from './components/dashboard-logout/dashboard-logout.component';
import { NavbarLogoutComponent } from './components/navbar-logout/navbar-logout.component';
import { CartComponent } from './components/cart/cart.component';
import { PageCarritoComponent } from './components/page-carrito/page-carrito.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { HorariosComponent } from './components/horarios/horarios.component';
import { PlanificacionComponent } from './components/planificacion/planificacion.component';
import { TarifasComponent } from './components/tarifas/tarifas.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignInComponent,
    DashboardComponent,
    NavbarComponent,
    SpinnerComponent,
    DashboardLogoutComponent,
    NavbarLogoutComponent,
    CartComponent,
    PageCarritoComponent,
    SearchBarComponent,
    DashboardAdminComponent,
    QuienesSomosComponent,
    HorariosComponent,
    PlanificacionComponent,
    TarifasComponent,
    ContactoComponent,
    TiendaComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }), // ToastrModule added
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AddTokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
