import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BurningProvider } from "../../providers/burning/burning"

/**
 * Generated class for the DeleteDesiresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-delete-desires',
  templateUrl: 'delete-desires.html',
})
export class DeleteDesiresPage {
  public deletedDesires = [];

  constructor(private burningProvider: BurningProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.deletedDesires = this.burningProvider.getDeletedDesires();
  }

}
