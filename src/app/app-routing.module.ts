import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GridFiltroLateralComponent } from './tab-navegacao/grid-filtro-lateral/grid-filtro-lateral.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'novidades', component:  GridFiltroLateralComponent},
  { path: 'colares', component:  GridFiltroLateralComponent},
  { path: 'brincos', component:  GridFiltroLateralComponent},
  { path: 'anéis', component:  GridFiltroLateralComponent},
  { path: 'pulseiras', component:  GridFiltroLateralComponent},
  { path: 'outlet', component:  GridFiltroLateralComponent},

  { path: '**', component: PageNotFoundComponent }
];

export const appRouting = RouterModule.forRoot(routes);

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
