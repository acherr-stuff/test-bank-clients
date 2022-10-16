import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClientsTablePageComponent} from "./components/pages/clients-table-page/clients-table-page.component";
import {ClientsBlockPageComponent} from "./components/pages/clients-block-page/clients-block-page.component";

const routes: Routes = [
  { path: '',  pathMatch: 'full', redirectTo: 'table-view'},
  { path: 'table-view', component:  ClientsTablePageComponent },
  { path: 'block-view', component:  ClientsBlockPageComponent },
  { path: '**',  pathMatch: 'full', redirectTo: 'table-view'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
