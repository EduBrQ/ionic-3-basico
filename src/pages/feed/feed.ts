import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

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
  providers: [
    MovieProvider
  ]
})
export class FeedPage {

  public objeto_feed = {  //abriu { entao é JSON, objeto.
    titulo: "Eduardo Borba",
    data: "November 5, 1955",
    descricao: "Estou criando um app incrível!",
    qntd_likes: 12,
    qntd_comments: 4,
    data_time_comment: "12th ago"

  }

  public lista_filmes = Array<any>();


  public nome_usuario:string = "José Eduardo Borba Queiróz";

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider: MovieProvider
    ) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad FeedPage');s
    this.movieProvider.getLatestMovies().subscribe(
      data=>{
        
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body)  // transforma de texto para JSON
        this.lista_filmes = objeto_retorno.results;
        
        console.log(objeto_retorno.results);
      }, error => {
        console.log(error);
      }
      
    )
  }

}
