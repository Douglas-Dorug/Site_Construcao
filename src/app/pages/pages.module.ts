import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicosComponent } from './servicos/servicos.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    ServicosComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
