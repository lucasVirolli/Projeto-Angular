import { Component, Input, OnChanges, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-grid-filtro-lateral',
  templateUrl: './grid-filtro-lateral.component.html',
  styleUrls: ['./grid-filtro-lateral.component.scss']
})
export class GridFiltroLateralComponent implements OnInit, OnChanges {

  tpMaterial: any;
  tpAcessorio: any;
  pedrasYOrN: any;
  tpPedras: any;

  @Input() novidadesSelecionado: boolean = false;
  @Input() colaresSelecionado: boolean = false;
  @Input() brincosSelecionado: boolean = false;
  @Input() aneisSelecionado: boolean = false;
  @Input() pulseirasSelecionado: boolean = false;
  @Input() outletSelecionado: boolean = false;

  exibirPedras: boolean = false;


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.tpAcessorio = this.fb.group({
      colares: false,
      brincos: false,
      aneis: false,
      pulseiras: false
    })

    this.tpMaterial = this.fb.group({
      ouro: false,
      banhadoOuro: false,
      folheadoOuro: false,
      prata: false
    });

    this.pedrasYOrN = this.fb.group({
      comPedras: false,
      semPedras: false
    })

    this.tpPedras = this.fb.group({
      esmeralda: false,
      perola: false,
      rubi: false,
      safira: false
    })

    // console.log(this.tpMaterial)
    // console.log(this.novidadesSelecionado)
    // console.log(this.pedrasYOrN)

  }

  capturaCbSelecionados(event: any) {
    console.log(this.tpMaterial.value)
    console.log(this.tpAcessorio.value)
    console.log(this.pedrasYOrN.value)
    console.log(this.tpPedras.value)



    this.pedrasYOrN.value.comPedras ? this.exibirPedras = true : this.exibirPedras = false;
    console.log('aqui' ,this.exibirPedras)

  }


}
