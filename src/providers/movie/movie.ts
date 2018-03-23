
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class MovieProvider {
  private baseApiPath = "https://api.themoviedb.org/3"; // parte do http que sempre se repete//boa pratica de programacao :)
  
  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  }

  getLatestMovies() {
    return this.http.get(this.baseApiPath + "/movie/popular?api_key=1ae047d3b26a430f3386a019a1554f55");
  }
  //1ae047d3b26a430f3386a019a1554f55 -api key do movie db ?api_key=1ae047d3b26a430f3386a019a1554f55
}
