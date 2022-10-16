import { Component, OnInit } from '@angular/core';
import {ClientsDataService} from "../../../../services/clients-data.service";
import {Client} from "../../../../clients";
import {FormControl, FormGroup} from "@angular/forms";

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
      console.log((this.clientsData))
    })
  }

  ngOnInit(): void {
  }

  deleteItem(id: string) {
    this.clientsDataService.deleteClient(id);

  }

  addNewClient(event$) {
    this.clientsDataService.addNewClient(event$)
  }

}
