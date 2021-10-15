import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    HomeComponent,
    FooterComponent,
    ContentComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    HomeComponent,
    FooterComponent,
    ContentComponent,
  ]
})
export class TemplateModule { }
