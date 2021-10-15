import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './core/app-component/app.component';
import { TemplateModule } from './core/template/template.module';
import { ClientsModule } from './core/clients/clients.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateModule,
    ClientsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
