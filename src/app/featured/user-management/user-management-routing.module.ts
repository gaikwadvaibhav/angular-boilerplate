import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyTaskComponent } from './components/my-task/my-task.component';
import { UserManagementComponent } from './components/user-management/user-management.component';


const routes: Routes = [
  {
    path: '',
    component: MyTaskComponent
  },
  {
    path: 'user-management',
    component: UserManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class UserManagementRoutingModule { }
