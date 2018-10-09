import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';

import { BurningProvider } from '../../providers/burning/burning';
import { DeleteDesiresPage } from "../delete-desires/delete-desires";
/**
 * Generated class for the BurningDesirePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-burning-desire',
  templateUrl: 'burning-desire.html',
})
export class BurningDesirePage {
  public burnings =[];

  constructor(private toastController: ToastController, private burningProvider: BurningProvider, public navCtrl: NavController, public navParams: NavParams, private alertController: AlertController) {
    this.burnings = this.burningProvider.getBurnings();
  }

  deleteDesire(burningIndex) {
    this.burningProvider.deleteDesire(burningIndex);
  }

  goToDeletePage(){
    this.navCtrl.push(DeleteDesiresPage);
  }

  openBurningAlert(){
    let addBurningAlert = this.alertController.create({
      title: "Add A Burning Desire",
      message: "Enter Your Burning Desire",
      inputs: [
        {
          type: "text",
          name: "addBurningInput"
        }
      ],
      buttons: [
        {
          text: "Cancel"
        },
        {
          text: "Add Burning Desire",
          handler: (inputData)=> {
            let burningText;
            burningText = inputData.addBurningInput;
            this.burningProvider.addBurning(burningText);

            addBurningAlert.onDidDismiss(()=> {
                let addDesireToast = this.toastController.create({
                  message: "Burning Desire Added",
                 duration: 2000
                });
                addDesireToast.present();              
            });

          }
        }
      ]
    });
    addBurningAlert.present();

  }

  editBurning(burningIndex){
    let editBurningAlert = this.alertController.create({
      title: "Edit A Burning Desire",
      message: "Edit Your Burning Desire",
      inputs: [
        {
          type: "text",
          name: "editBurningInput",
          value: this.burnings[burningIndex]
        }
      ],
      buttons: [
        {
          text: "Cancel"
        },
        {
          text: "Edit Burning Desire",
          handler: (inputData)=> {
            let burningText;
            burningText = inputData.editBurningInput;
            this.burningProvider.editBurning(burningText, burningIndex);

            editBurningAlert.onDidDismiss(()=> {
                  let editBurningToast = this.toastController.create({
                  message: "Burning Desire Edited",
                  duration: 2000
                });
                editBurningToast.present();
            });
            
          }
        }
      ]
    });
    editBurningAlert.present();
  }

}
