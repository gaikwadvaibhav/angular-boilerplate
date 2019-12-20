import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminOverviewRoutingModule } from './admin-overview-routing.module';
import { AdminOverviewComponent } from './components/admin-overview/admin-overview.component';


@NgModule({
  declarations: [AdminOverviewComponent],
  imports: [
    CommonModule,
    AdminOverviewRoutingModule
  ]
})
export class AdminOverviewModule { }
