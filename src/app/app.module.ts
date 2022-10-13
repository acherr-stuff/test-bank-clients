import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsListComponent } from './components/clients-list/clients-list.component';
import { ClientsPageComponent } from './components/clients-page/clients-page.component';
import { ClientsItemComponent } from './components/clients-item/clients-item.component';
import {ClientsDataService} from "./services/clients-data.service";
import { ClientsItemAddComponent } from './components/clients-item-add/clients-item-add.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ClientsListComponent,
    ClientsPageComponent,
    ClientsItemComponent,
    ClientsItemAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ClientsDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
