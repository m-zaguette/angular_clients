import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './core/app-component/app.component';
import { TemplateModule } from './core/template/template.module';
import { ClientsModule } from './core/clients/clients.module';
import { ClientsService } from './services/clients.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    ClientsModule,
  ],
  providers: [
    ClientsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
