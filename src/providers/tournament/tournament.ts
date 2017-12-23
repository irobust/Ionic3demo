import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the TournamentProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TournamentProvider {
  baseURL = "http://localhost:3000/";

  constructor(public http: HttpClient) {
    console.log('Hello TournamentProvider Provider');
  }

  getAll(){
    return this.http.get(this.baseURL + 'tournaments');
  }

  getByYear(year: number){
    return this.http.get(this.baseURL + 'tournaments/year/'+ year);
  }

}
