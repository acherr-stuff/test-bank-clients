import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Client} from "../../clients";

@Component({
  selector: '[app-clients-item]',
  templateUrl: './clients-item.component.html',
  styleUrls: ['./clients-item.component.scss']
})
export class ClientsItemComponent implements OnInit {

  @Input() client: Client;
  @Output() delete: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
