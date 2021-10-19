import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor( 
    private service: ClientsService,
    private activatedRoute: ActivatedRoute
    ) { 
  }

  ngOnInit(): void {
    let params = this.activatedRoute.params;
    let _values;
    let id: number = 0;
    params.subscribe( values => {
      _values = values;
      id = values.id;
    });
    if(id!=0){
      this.service.getClientById(id)
      .subscribe(
        response => this.client = response,
        errorResponse => this.client = new Client()
      );
    }
  }
  
  onSubmit(): void{
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
