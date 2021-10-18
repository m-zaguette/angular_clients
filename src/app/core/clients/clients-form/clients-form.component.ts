import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/services/clients.service';
import { Client } from './Models/client';

@Component({
  selector: 'app-clients-form',
  templateUrl: './clients-form.component.html',
  styleUrls: ['./clients-form.component.css']
})
export class ClientsFormComponent implements OnInit {
  client: Client;

  constructor( private service: ClientsService) { 
    this.client = service.getClient();
  }

  ngOnInit(): void {
  }
  
  onSubmit(): void{
    console.log(this.client);
    this.service.save(this.client).subscribe( response => {
      console.log(response);
    });
  }
}
