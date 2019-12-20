import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./featured/landing/landing.module').then(m => m.LandingModule)
      },
     {
       path: 'login',
       loadChildren: () => import('./featured/authentication/authentication.module').then(m => m.AuthenticationModule)
     }
    ]
  },
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./featured/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'admin-overview',
        loadChildren: () => import('./featured/admin-overview/admin-overview.module').then(m => m.AdminOverviewModule)
      },
      {
        path: 'user-management',
        loadChildren: () => import('./featured/user-management/user-management.module').then(m => m.UserManagementModule)
      },
      {
        path: 'business-structure',
        loadChildren: () => import('./featured/business-structure/business-structure.module').then(m => m.BusinessStructureModule)
      }
    ]
  },
  {
    path: '**',
    pathMatch: 'full',
    loadChildren: () => import('./featured/error/error.module').then(m => m.ErrorModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
