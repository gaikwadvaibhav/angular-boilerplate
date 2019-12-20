import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessStructureRoutingModule } from './business-structure-routing.module';
import { BusinessStructureComponent } from './components/business-structure/business-structure.component';


@NgModule({
  declarations: [BusinessStructureComponent],
  imports: [
    CommonModule,
    BusinessStructureRoutingModule
  ]
})
export class BusinessStructureModule { }
