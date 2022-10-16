import { Component, OnInit } from '@angular/core';
import {ClientsDataService} from "../../../../services/clients-data.service";
import {Client} from "../../../../clients";

@Component({
  selector: 'app-clients-block-list',
  templateUrl: './clients-block-list.component.html',
  styleUrls: ['./clients-block-list.component.scss']
})
export class ClientsBlockListComponent implements OnInit {

  clientsData: Client[]

  constructor(
      private clientsDataService: ClientsDataService
  ) {
    this.clientsDataService.clientsData$.subscribe( value => {
      this.clientsData = value;
    })
  }

  deleteItem(id: string) {
    this.clientsDataService.deleteClient(id);
  }

  addNewClient(event$) {
    this.clientsDataService.addNewClient(event$)
  }

  ngOnInit(): void {
  }

}
