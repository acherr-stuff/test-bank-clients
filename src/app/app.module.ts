import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsTableListComponent } from './components/ui/table/clients-table-list-ui/clients-table-list.component';
import { ClientsTablePageComponent } from './components/pages/clients-table-page/clients-table-page.component';
import { ClientsTableItemComponent } from './components/ui/table/clients-table-item-ui/clients-table-item.component';
import {ClientsDataService} from "./services/clients-data.service";
import { ClientsItemAddComponent} from "./components/ui/clients-item-add-ui/clients-item-add.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ClientsBlockPageComponent } from './components/pages/clients-block-page/clients-block-page.component';
import { ClientsBlockListComponent } from './components/ui/block/clients-block-list-ui/clients-block-list.component';
import {RouterModule} from "@angular/router";
import { ClientBlockItemComponent } from './components/ui/block/client-block-item-ui/client-block-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientsTableListComponent,
    ClientsTablePageComponent,
    ClientsTableItemComponent,
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
