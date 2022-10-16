import { Component, OnInit } from '@angular/core';
import {ClientsDataService} from "../../../../services/clients-data.service";
import {Client} from "../../../../clients";

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-table-list.component.html',
  styleUrls: ['./clients-table-list.component.scss']
})
export class ClientsTableListComponent  {

  clientsData: Client[]

  constructor(
      private clientsDataService: ClientsDataService
  ) {
    this.clientsDataService.clientsData$.subscribe( value => {
      this.clientsData = value;
      console.log((this.clientsData))
    })
  }

  deleteItem(id: string) {
    this.clientsDataService.deleteClient(id);

  }

  addNewClient(event$) {
    this.clientsDataService.addNewClient(event$)
  }

}
