import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
/*  Variavel ou propiedade*/
  public nome_usuario:string = "Manuel Figueiredo"

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  /* criando uma Função*/
  public somar(num1:number, num2:number): void{
   // alert(num1 * num2);
  }
    /*executa a função e apresenta quando a pagina é carregada*/
  ionViewDidLoad() {
   // this.somar(4,5);

  }

}
