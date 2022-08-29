import { AdminComponent } from './adm/admin.component';
import { HomePageModule } from './home-page/home-page.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './home-page/home-page.component';
import { FreteBarComponent } from './home-page/frete-bar/frete-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { MaterialExampleModule } from 'src/material.module';
import { MenuItensComponent } from './home-page/menu-itens/menu-itens.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TabNavegacaoComponent } from './tab-navegacao/tab-navegacao.component';
import { GridFiltroLateralComponent } from './tab-navegacao/grid-filtro-lateral/grid-filtro-lateral.component';
import { ConteudoPrincipalComponent } from './tab-navegacao/conteudo-principal/conteudo-principal.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdmProdutosComponent } from './adm/adm-produtos/adm-produtos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FreteBarComponent,
    MenuItensComponent,
    GridFiltroLateralComponent,
    ConteudoPrincipalComponent,
    TabNavegacaoComponent,
    PageNotFoundComponent,
    AdminComponent,
    AdmProdutosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MaterialExampleModule,
    ReactiveFormsModule,
    HomePageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
