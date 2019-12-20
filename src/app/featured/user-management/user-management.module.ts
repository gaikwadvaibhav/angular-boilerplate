import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { MyTaskComponent } from './components/my-task/my-task.component';
import { UserManagementComponent } from './components/user-management/user-management.component';


@NgModule({
  declarations: [MyTaskComponent, UserManagementComponent],
  imports: [
    CommonModule,
    UserManagementRoutingModule
  ]
})
export class UserManagementModule { }
