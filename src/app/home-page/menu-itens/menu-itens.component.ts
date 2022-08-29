import { Component, Input, OnInit, Output , OnDestroy, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-menu-itens',
  templateUrl: './menu-itens.component.html',
  styleUrls: ['./menu-itens.component.scss']
})
export class MenuItensComponent implements OnInit {

  elementoAtualCarousel: number = 1;
  ultElementoCarousel: number = 0;
  primElementoCarousel: number = 1;
  intervalCarousel: any;
  calculoScrollBy:number = 0;



  imagensCarousel = [
    {
      id: 1,
      local: '../../assets/homerSimpsons.jpg',
      exibir: true
    },
    {
      id: 2,
      local: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      exibir: false
    },
    {
      id: 3,
      local: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      exibir: false
    },
  ]
  novidades = [

    {
      id: 1,
      local: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      exibirCarousel: true
    },
    {
      id: 2,
      local: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      exibirCarousel: true
    },
    {
      id: 3,
      local: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      exibirCarousel: true
    },
    {
      id: 4,
      local: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      exibirCarousel: true
    },
    {
      id: 5,
      local: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      exibirCarousel: true
    },
    {
      id: 6,
      local: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      exibirCarousel: true
    },
    {
      id: 7,
      local: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      exibirCarousel: true
    },
    {
      id: 8,
      local: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      exibirCarousel: true
    },
    {
      id: 9,
      local: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      exibirCarousel: true
    },
    {
      id: 10,
      local: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      exibirCarousel: true
    },
    {
      id: 11,
      local: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      exibirCarousel: true
    },
    {
      id: 12,
      local: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      exibirCarousel: true
    },
    {
      id: 13,
      local: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      exibirCarousel: true
    },
    {
      id: 14,
      local: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      exibirCarousel: true
    },
    {
      id: 15,
      local: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      exibirCarousel: true
    }
  ]

  constructor() { }

  ngOnInit(): void {
    this.ultElementoCarousel = this.imagensCarousel.length;
    this.startInterval();
  }

  startInterval(){
    this.intervalCarousel = setInterval(() => {
      this.incrementaCarousel();
    }, 5000);
  }

  decrementaCarousel() {

    clearInterval(this.intervalCarousel)
    this.startInterval()

    if(this.elementoAtualCarousel == 1){
      this.elementoAtualCarousel = this.ultElementoCarousel
    }else{
      this.elementoAtualCarousel--;
    }

    this.changeExibir();

  }

  incrementaCarousel() {

    clearInterval(this.intervalCarousel)
    this.startInterval()

    if(this.elementoAtualCarousel == this.ultElementoCarousel){
      this.elementoAtualCarousel = this.primElementoCarousel
    }else{
      this.elementoAtualCarousel++;
    }

    this.changeExibir();

  }

  changeExibir(){

    for(let imagem of this.imagensCarousel){
      if(imagem.exibir == true){
        imagem.exibir = false;
      }
      if(this.elementoAtualCarousel == imagem.id){
        imagem.exibir = true;
      }
    // console.log(imagem)

    }
  }

  decrementaCarouselProdutos() {

        console.log(document.querySelector('.produtosCarousel-wrapper')?.scrollLeft)

    const tamanhoTela = document.documentElement.clientWidth

    if(tamanhoTela >= 500 && tamanhoTela <= 600){
      this.calculoScrollBy = -282;
    }

    if(tamanhoTela >= 601 && tamanhoTela <= 884){
      this.calculoScrollBy = -560;
    }

    if(tamanhoTela >= 885 && tamanhoTela <= 1162){
      this.calculoScrollBy = -842;
    }

    if(tamanhoTela >= 1163 && tamanhoTela <= 1445){
      this.calculoScrollBy = -1122;
    }

    if(tamanhoTela >= 1446 && tamanhoTela <= 1732){
      this.calculoScrollBy = -1404;
    }

    if(tamanhoTela >= 1733){
      this.calculoScrollBy = -1680;
    }

    document.querySelector('.produtosCarousel-wrapper')?.scrollBy(this.calculoScrollBy,0)

  }

  incrementaCarouselProdutos() {

    // console.log(document.querySelector('.produtosCarousel-wrapper')?.scrollLeft)

    const tamanhoTela = document.documentElement.clientWidth

    if(tamanhoTela >= 500 && tamanhoTela <= 600){
      this.calculoScrollBy = 282;
    }

    if(tamanhoTela >= 601 && tamanhoTela <= 884){
      this.calculoScrollBy = 560;
    }

    if(tamanhoTela >= 885 && tamanhoTela <= 1162){
      this.calculoScrollBy = 842;
    }

    if(tamanhoTela >= 1163 && tamanhoTela <= 1445){
      this.calculoScrollBy = 1122;
    }

    if(tamanhoTela >= 1446 && tamanhoTela <= 1732){
      this.calculoScrollBy = 1404;
    }

    if(tamanhoTela >= 1733){
      this.calculoScrollBy = 1680;
    }

    // console.log(calculoScrollBy)
    // console.log(tamanhoTela)

    document.querySelector('.produtosCarousel-wrapper')?.scrollBy(this.calculoScrollBy,0)

    // console.log(document.querySelector('.produtosCarousel-wrapper')?.scrollLeft)


  }

}
