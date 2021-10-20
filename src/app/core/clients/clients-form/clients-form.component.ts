import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { ClientsService } from 'src/app/services/clients.service';
import { Client } from './Models/client';

@Component({
  selector: 'app-clients-form',
  templateUrl: './clients-form.component.html',
  styleUrls: ['./clients-form.component.css']
})
export class ClientsFormComponent implements OnInit {
  client: Client = new Client();
  success: boolean = false;
  errors: String[] = [];
  id: number = 0;

  constructor( 
    private service: ClientsService,
    private activatedRoute: ActivatedRoute
    ) { 
  }

  ngOnInit(): void {
    let params: Observable<Params> = this.activatedRoute.params;
    params.subscribe( values => {
      this.id = values.id;
    });
    if(this.id!=0){
      this.service.getClientById(this.id)
      .subscribe(
        response => this.client = response,
        errorResponse => {this.client = new Client(); this.id = 0}
      );
    }
  }
  
  onSubmit(): void{
    if(this.id != 0){
      this.client.signInDate = '';
      this.service.update(this.client)
      .subscribe(response => {
        this.success = true;
        this.errors = [];
      }, errorResponse => {
        this.success = false;
        this.errors = ['Erro ao atualizar o cliente'];
      });
    }else{
      this.service.save(this.client).subscribe( response => {
      this.success = true;
      this.errors = [];
      this.client = response;
    }, errorResponse => {
      this.success = false;
      this.errors = errorResponse.error.errors;
    });
    }
  }
}
