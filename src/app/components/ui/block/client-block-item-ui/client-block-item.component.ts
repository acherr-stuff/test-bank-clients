import {Component, Input, OnInit} from '@angular/core';
import {Client} from "../../../../clients";

@Component({
  selector: 'app-client-block-item',
  templateUrl: './client-block-item.component.html',
  styleUrls: ['./client-block-item.component.scss']
})
export class ClientBlockItemComponent implements OnInit {

  @Input() client: Client;

  constructor() { }

  ngOnInit(): void {
  }

}
