import { Component, OnInit } from '@angular/core';
import {ClientsDataService} from "../../services/clients-data.service";
import {Client} from "../../clients";

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss']
})
export class ClientsListComponent implements OnInit {

  clientsData: Client[]

  constructor(
      private clientsDataService: ClientsDataService
  ) {
    this.clientsDataService.clientsData$.subscribe( value => {
      this.clientsData = value;
    })
  }

  ngOnInit(): void {
  }

  deleteItem(id: string) {
    this.clientsDataService.deleteClient(id);
  }

}
