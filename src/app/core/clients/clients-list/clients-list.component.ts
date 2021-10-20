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
  selectedClient: Client = new Client();
  successMessage: String = new String();
  failMessage: String = new String();

  constructor( private service: ClientsService) { 
  }

  ngOnInit(): void {
    this.service.getClients().subscribe(response => this.arrayClients = response);
  }

  prepareDelete(client: Client){
    this.selectedClient = client;
  }

  deleteClient(){
    this.service.delete(this.selectedClient)
    .subscribe( () => {
      this.successMessage = "Cliente Deletado com sucesso!";
      this.ngOnInit();
    }, () => {
      this.failMessage = "Ocorreu um erro ao Deletar o cliente";
    });
    ;
  }
}
