import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/services/clients.service';
import { Client } from '../clients-form/Models/client';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {
  arrayClients: Client[] = [];

  constructor( private service: ClientsService) { 
  }

  ngOnInit(): void {
    this.service.getClients().subscribe(response => this.arrayClients = response);
  }
}
