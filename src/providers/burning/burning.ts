import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the BurningProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BurningProvider {
  private burnings = [];
  private deletedDesires = [];

  constructor(public http: Http) {
    console.log('Hello BurningProvider Provider');
  }

  deleteDesire(burningIndex){
    let desireToBeDeleted = this.burnings[burningIndex];
    this.burnings.splice(burningIndex, 1);
    this.deletedDesires.push(desireToBeDeleted);
  }

  getBurnings(){
    return this.burnings;
  }

  getDeletedDesires(){
    return this.deletedDesires;
  }

  addBurning(burning){
    this.burnings.push(burning);
  }

  editBurning(burning, burningIndex){
    this.burnings[burningIndex] = burning;
  }

}

