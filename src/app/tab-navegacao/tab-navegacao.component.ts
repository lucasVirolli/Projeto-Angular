import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab-navegacao',
  templateUrl: './tab-navegacao.component.html',
  styleUrls: ['./tab-navegacao.component.scss']
})
export class TabNavegacaoComponent implements OnInit {

  //tabs
  sessaoSelecionada: string = '';
  homePageSelecionado: boolean = true;
  novidadesSelecionado: boolean = false;
  colaresSelecionado: boolean = false;
  brincosSelecionado: boolean = false;
  aneisSelecionado: boolean = false;
  pulseirasSelecionado: boolean = false;
  outletSelecionado: boolean = false;

  //routes
  navLinks: any[];
  activeLinkIndex = -1;

  constructor(private router: Router) {
    this.navLinks = [
      {
        label: 'Novidades',
        link: './novidades',
        index: 0
      }, {
        label: 'Colares',
        link: './colares',
        index: 1
      }, {
        label: 'Brincos',
        link: './brincos',
        index: 2
      },
      {
        label: 'Anéis',
        link: './anéis',
        index: 3
      },
      {
        label: 'Pulseiras',
        link: './pulseiras',
        index: 4
      },
      {
        label: 'Outlet',
        link: './outlet',
        index: 5
      }
    ];
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });

    // console.log(this.homePageSelecionado)


  }



  capturaSessaoSelecionado(event: any){
    this.sessaoSelecionada = event.target.textContent.trim()

    this.sessaoSelecionada != 'Novidades' ? this.novidadesSelecionado = false : this.novidadesSelecionado = true;
    this.sessaoSelecionada != 'Colares' ? this.colaresSelecionado = false : this.colaresSelecionado = true;
    this.sessaoSelecionada != 'Brincos' ? this.brincosSelecionado = false : this.brincosSelecionado = true;
    this.sessaoSelecionada != 'Anéis' ? this.aneisSelecionado = false : this.aneisSelecionado = true;
    this.sessaoSelecionada != 'Pulseiras' ? this.pulseirasSelecionado = false : this.pulseirasSelecionado = true;
    this.sessaoSelecionada != 'Outlet' ? this.outletSelecionado = false : this.outletSelecionado = true;

    if(
        !this.novidadesSelecionado ||
        !this.colaresSelecionado ||
        !this.brincosSelecionado ||
        !this.aneisSelecionado ||
        !this.pulseirasSelecionado ||
        !this.outletSelecionado
      ){
        this.homePageSelecionado = false;
      }
  }

  acessaHomePage(event: any){
    if(this.homePageSelecionado == false){
      this.homePageSelecionado = true
    }
    if(this.homePageSelecionado){
      this.novidadesSelecionado = false;
      this.colaresSelecionado = false;
      this.brincosSelecionado = false;
      this.aneisSelecionado = false;
      this.pulseirasSelecionado = false;
      this.outletSelecionado = false;
    }
  }

}
