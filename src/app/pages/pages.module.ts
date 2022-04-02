import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicosComponent } from './servicos/servicos.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BoxVidroComponent } from './servicos/box-vidro/box-vidro.component';
import { TelaProtecaoComponent } from './servicos/tela-protecao/tela-protecao.component';
import { VaraisTetoComponent } from './servicos/varais-teto/varais-teto.component';
import { EspelhosComponent } from './servicos/espelhos/espelhos.component';
import { PortasJanelasComponent } from './servicos/portas-janelas/portas-janelas.component';
import { ToldosComponent } from './servicos/toldos/toldos.component';



@NgModule({
  declarations: [
    ServicosComponent,
    HomeComponent,
    BoxVidroComponent,
    TelaProtecaoComponent,
    VaraisTetoComponent,
    EspelhosComponent,
    PortasJanelasComponent,
    ToldosComponent
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
