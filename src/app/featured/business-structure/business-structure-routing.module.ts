import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessStructureComponent } from './components/business-structure/business-structure.component';


const routes: Routes = [
  {
    path: '',
    component: BusinessStructureComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessStructureRoutingModule { }
