import { ConteudoPrincipalComponent } from './../tab-navegacao/conteudo-principal/conteudo-principal.component';
import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  tpAcessorios: any;

  novidadesAdminSelecionado: boolean = false;
  colaresAdminSelecionado: boolean = false;
  brincosAdminSelecionado: boolean = false;
  aneisAdminSelecionado: boolean = false;
  pulseirasAdminSelecionado: boolean = false;
  outletAdminSelecionado: boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.tpAcessorios = this.fb.group({
      novidades: false,
      colares: false,
      brincos: false,
      aneis: false,
      pulseiras: false,
      outlet: false
    })

  }

  capturaCbSelecionados(event: any) {
    console.log(this.tpAcessorios.value)

    if(this.tpAcessorios.value.colares){
      this.colaresAdminSelecionado = true;
    }


    console.log('hihihi', this.colaresAdminSelecionado)
  }


}
