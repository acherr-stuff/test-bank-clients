import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsListComponent } from './components/ui/table/clients-list-ui/clients-list.component';
import { ClientsTablePageComponent } from './components/pages/clients-table-page/clients-table-page.component';
import { ClientsItemComponent } from './components/ui/table/clients-item-ui/clients-item.component';
import {ClientsDataService} from "./services/clients-data.service";
import { ClientsItemAddComponent } from './components/clients-item-add/clients-item-add.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ClientsBlockPageComponent } from './components/pages/clients-block-page/clients-block-page.component';
import { ClientsBlockListComponent } from './components/ui/block/clients-block-list-ui/clients-block-list.component';
import {RouterModule} from "@angular/router";
import { ClientBlockItemComponent } from './components/ui/block/client-block-item-ui/client-block-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientsListComponent,
    ClientsTablePageComponent,
    ClientsItemComponent,
    ClientsItemAddComponent,
    ClientsBlockPageComponent,
    ClientsBlockListComponent,
    ClientBlockItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [ClientsDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
