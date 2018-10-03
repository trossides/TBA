import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the DesireProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DesireProvider {
  private desires = [];

  constructor(public http: Http) {
    console.log('Hello DesireProvider Provider');
  }

  getDesires(){
    return this.desires;
  }

  addDesire(desire){
    this.desires.push(desire);
  }

}
