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
  private archivedDesires = [];

  constructor(public http: Http) {
    console.log('Hello DesireProvider Provider');
  }

  archiveDesire(desireIndex){
    let desireToBeArchived = this.desires[desireIndex];
    this.desires.splice(desireIndex, 1);
    this.archivedDesires.push(desireToBeArchived);
  }

  getDesires(){
    return this.desires;
  }

  getArchivedDesires(){
    return this.archivedDesires;
  }

  addDesire(desire){
    this.desires.push(desire);
  }

  editDesire(desire, desireIndex){
    this.desires[desireIndex] = desire;
  }

}
