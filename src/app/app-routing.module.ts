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

const routes: Routes = [
  { path: '', redirectTo: 'dashboardLogout', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signIn', component: SignInComponent },
  { path: 'dashboardLogout', component: DashboardLogoutComponent},
  { path: 'carrito', component: PageCarritoComponent},
  { path: 'admin', component: DashboardAdminComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: '**', redirectTo: 'dashboardLogout', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
