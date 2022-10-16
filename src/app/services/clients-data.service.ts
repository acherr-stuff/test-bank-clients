import { Injectable } from '@angular/core';
import clients from '../../data/person.json';
import {Client} from "../clients";
import {BehaviorSubject, Subject} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ClientsDataService {

  clientsData$ = new BehaviorSubject(this.getDataFromJSON())

  constructor() {}

  getData(): Client[] {
    return this.clientsData$.getValue()
  }

  getDataFromJSON(): Client[] {
    const clientsList: Client[] =  JSON.parse(JSON.stringify(clients)).clients;
    return clientsList
  }

  deleteClient(id: string) {
    const newData = this.clientsData$.getValue().filter(item => item.card !== id)
    this.clientsData$.next(newData)
  }

  addNewClient(client: Client) {
    const newData = [...this.clientsData$.getValue(), client];
    this.clientsData$.next(newData);
  }
}
