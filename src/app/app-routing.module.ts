import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// Componentes
import { LoginComponent } from './components/login/login.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

// Guards
import { AuthGuard } from './utils/auth.guard';
import { DashboardLogoutComponent } from './components/dashboard-logout/dashboard-logout.component';
import { PageCarritoComponent } from './components/page-carrito/page-carrito.component';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { HorariosComponent } from './components/horarios/horarios.component';
import { PlanificacionComponent } from './components/planificacion/planificacion.component';
import { TarifasComponent } from './components/tarifas/tarifas.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { QuienesSomosLogoutComponent } from './components/quienes-somos-logout/quienes-somos-logout.component';
import { HorariosLogoutComponent } from './components/horarios-logout/horarios-logout.component';
import { PlanificacionLogoutComponent } from './components/planificacion-logout/planificacion-logout.component';
import { TarifasLogoutComponent } from './components/tarifas-logout/tarifas-logout.component';
import { ContactoLogoutComponent } from './components/contacto-logout/contacto-logout.component';
import { TiendaLogoutComponent } from './components/tienda-logout/tienda-logout.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboardLogout', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signIn', component: SignInComponent },
  { path: 'dashboardLogout', component: DashboardLogoutComponent},
  { path: 'carrito', component: PageCarritoComponent},
  { path: 'admin', component: DashboardAdminComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'quienes-somos', component: QuienesSomosComponent},
  { path: 'horarios', component: HorariosComponent},
  { path: 'planificacion', component: PlanificacionComponent},
  { path: 'tarifas', component: TarifasComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: 'tienda', component: TiendaComponent},
  { path: 'quienes-somosLogout', component: QuienesSomosLogoutComponent},
  { path: 'horariosLogout', component: HorariosLogoutComponent},
  { path: 'planificacionLogout', component: PlanificacionLogoutComponent},
  { path: 'tarifasLogout', component: TarifasLogoutComponent},
  { path: 'contactoLogout', component: ContactoLogoutComponent},
  { path: 'tiendaLogout', component: TiendaLogoutComponent},
  { path: 'tiendaLogout/:categoryId', component: TiendaLogoutComponent},
  { path: 'tienda/:categoryId', component: TiendaComponent},
  { path: '**', redirectTo: 'dashboardLogout', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
