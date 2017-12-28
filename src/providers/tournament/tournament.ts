import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseURL } from '../../app-settings';

/*
  Generated class for the TournamentProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TournamentProvider {

  constructor(public http: HttpClient) {
    console.log('Hello TournamentProvider Provider');
  }

  getAll(){
    return this.http.get(BaseURL + 'tournaments');
  }

  getByYear(year: number){
    return this.http.get(BaseURL + 'tournaments/year/'+ year);
  }

}
