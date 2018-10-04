import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DesireProvider } from "../../providers/desire/desire"

/**
 * Generated class for the ArchivedDesiresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-archived-desires',
  templateUrl: 'archived-desires.html',
})
export class ArchivedDesiresPage {
  public archivedDesires = [];

  constructor(private desireProvider: DesireProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.archivedDesires = this.desireProvider.getArchivedDesires();
  }

}
