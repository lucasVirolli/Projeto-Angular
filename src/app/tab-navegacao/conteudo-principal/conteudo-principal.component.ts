import { AdminComponent } from './../../adm/admin.component';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { BrincosService } from 'src/services/brincos.service';
import { ColaresService } from 'src/services/colares.service';
import { Brincos, Colares } from '../produtos';

@Component({
  selector: 'app-conteudo-principal',
  templateUrl: './conteudo-principal.component.html',
  styleUrls: ['./conteudo-principal.component.scss']
})
export class ConteudoPrincipalComponent implements OnInit, OnChanges {

  @Input() novidadesSelecionado: boolean = false;
  @Input() colaresSelecionado: boolean = false;
  @Input() brincosSelecionado: boolean = false;
  @Input() aneisSelecionado: boolean = false;
  @Input() pulseirasSelecionado: boolean = false;
  @Input() outletSelecionado: boolean = false;

  @Input() novidadesAdminSelecionado: boolean = false;
  @Input() colaresAdminSelecionado: boolean = false;
  @Input() brincosAdminSelecionado: boolean = false;
  @Input() aneisAdminSelecionado: boolean = false;
  @Input() pulseirasAdminSelecionado: boolean = false;
  @Input() outletAdminSelecionado: boolean = false;

  //brincos
  brinco = {} as Brincos;
  brincos: Array<Brincos> = [];

  //colares
  colar = {} as Colares;
  colares: Array<Colares> = [];

  constructor(private brincosService: BrincosService, private colaresService: ColaresService) { }

  ngOnInit(): void {

    this.getBrincos()
  }

  ngOnChanges() {
    if (this.colaresSelecionado || this.colaresAdminSelecionado) {
      this.getColares()
    }else if (this.brincosSelecionado) {
      this.getBrincos()
    }
  }

  getBrincos() {
    this.brincosService.getBrincos().subscribe((brincos: Brincos[]) => {

      // console.log('br: ', brincos)
      this.brincos = brincos;
    })
  }

  getColares() {
    this.colaresService.getColares().subscribe((colares: Colares[]) => {

      // console.log('br: ', brincos)
      this.colares = colares;
    })
  }

}
