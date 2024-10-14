import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';  // Importar para que routerLink funcione
import { NavbarComponent } from './navbar.component';

@NgModule({
  
  imports: [
    CommonModule,
    RouterModule // Necesario para que routerLink funcione en el navbar
  ],
})
export class NavbarModule { }