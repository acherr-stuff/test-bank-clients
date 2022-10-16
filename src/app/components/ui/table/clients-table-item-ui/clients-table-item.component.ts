import {Component, Input, OnInit} from '@angular/core';
import {Client} from "../../../../clients";

@Component({
  selector: '[app-clients-item]',
  templateUrl: './clients-table-item.component.html',
  styleUrls: ['./clients-table-item.component.scss']
})
export class ClientsTableItemComponent  {

  @Input() client: Client;
  constructor() {
  }

}
