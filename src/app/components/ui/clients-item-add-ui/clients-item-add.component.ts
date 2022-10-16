import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Client} from "../../../clients";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-clients-item-add',
  templateUrl: './clients-item-add.component.html',
  styleUrls: ['./clients-item-add.component.scss']
})
export class ClientsItemAddComponent implements OnInit {

  addClientForm: FormGroup;

  @Output() addClientEvent = new EventEmitter<any>();

  client: Client;

  constructor() { }

  ngOnInit(): void {
    this.addClientForm = new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      card: new FormControl('', Validators.required),
      date_of_birth: new FormControl(''),
      phone: new FormControl(''),
      email: new FormControl('', Validators.email),
      address: new FormControl(''),
      contracts_count: new FormControl('')
    });
  }

  get firstname() { return this.addClientForm.get('firstname'); }
  get lastname() { return this.addClientForm.get('lastname'); }
  get card() { return this.addClientForm.get('card'); }
  get email() { return this.addClientForm.get('email'); }


  onCreate() {
    this.addClientEvent.emit(this.addClientForm.getRawValue())
  }

}
