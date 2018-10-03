import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { DesireProvider } from '../../providers/desire/desire';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public desires = [];

  constructor(private desireProvider: DesireProvider, public navCtrl: NavController, private alertController: AlertController) {
    this.desires = this.desireProvider.getDesires();
  }

  openDesireAlert(){
    let addDesireAlert = this.alertController.create({
      title: "Add A Desire",
      message: "Enter Your Desire",
      inputs: [
        {
          type: "text",
          name: "addDesireInput"
        }
      ],
      buttons: [
        {
          text: "Cancel"
        },
        {
          text: "Add Desire",
          handler: (inputData)=> {
            let desireText;
            desireText = inputData.addDesireInput;
            this.desireProvider.addDesire(desireText);
          }
        }
      ]
    });
    addDesireAlert.present();

  }

}
