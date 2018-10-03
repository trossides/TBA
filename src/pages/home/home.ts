import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public desires = [];

  constructor(public navCtrl: NavController, private alertController: AlertController) {

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
            this.desires.push(desireText);
          }
        }
      ]
    });
    addDesireAlert.present();

  }

}
