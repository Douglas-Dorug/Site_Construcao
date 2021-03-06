import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BoxVidroComponent } from './pages/servicos/box-vidro/box-vidro.component';
import { EspelhosComponent } from './pages/servicos/espelhos/espelhos.component';
import { GramaComponent } from './pages/servicos/grama/grama.component';
import { MoveisComponent } from './pages/servicos/moveis/moveis.component';
import { PeliculaVidroComponent } from './pages/servicos/pelicula-vidro/pelicula-vidro.component';
import { PortasJanelasComponent } from './pages/servicos/portas-janelas/portas-janelas.component';
import { ServicosComponent } from './pages/servicos/servicos.component';
import { TelaProtecaoComponent } from './pages/servicos/tela-protecao/tela-protecao.component';
import { ToldosComponent } from './pages/servicos/toldos/toldos.component';
import { VaraisTetoComponent } from './pages/servicos/varais-teto/varais-teto.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'servicos', component: ServicosComponent
  },
  {
    path: 'servicos/telas', component: TelaProtecaoComponent
  },
  {
    path: 'servicos/boxVidro', component: BoxVidroComponent
  },
  {
    path: 'servicos/espelhos', component: EspelhosComponent
  },
  {
    path: 'servicos/portasEJanelas', component: PortasJanelasComponent
  },
  {
    path: 'servicos/toldos', component: ToldosComponent
  },
  {
    path: 'servicos/varaisTeto', component: VaraisTetoComponent
  },
  {
    path: 'servicos/gramaSintetica', component: GramaComponent
  },
  {
    path: 'servicos/moveis', component: MoveisComponent
  },
  {
    path: 'servicos/peliculaVidro', component: PeliculaVidroComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
