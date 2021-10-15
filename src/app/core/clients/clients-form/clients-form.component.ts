import { Component, OnInit } from '@angular/core';
import { Client } from './Models/client';

@Component({
  selector: 'app-clients-form',
  templateUrl: './clients-form.component.html',
  styleUrls: ['./clients-form.component.css']
})
export class ClientsFormComponent implements OnInit {
  client: Client;


  constructor() { 
    this.client = new Client();
    // this.client.id = 1;
    // this.client.signInDate = "15/10/2021";
    // this.client.name = "Giuliana";
    // this.client.cpf = "01234567890";
  }

  ngOnInit(): void {
  }

  saveClient(): void{
    console.log(this.client);
  }
}
