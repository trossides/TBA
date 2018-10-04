import { Component } from '@angular/core';
import { NavController, AlertController, reorderArray, ToastController } from 'ionic-angular';

import { DesireProvider } from '../../providers/desire/desire';
import { ArchivedDesiresPage } from "../archived-desires/archived-desires";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public desires = [];
  public reorderIsEnabled = false;
  public archivedDesiresPage = ArchivedDesiresPage;

  constructor(private toastController: ToastController, private desireProvider: DesireProvider, public navCtrl: NavController, private alertController: AlertController) {
    this.desires = this.desireProvider.getDesires();
  }

  archiveDesire(desireIndex) {
    this.desireProvider.archiveDesire(desireIndex);
  }

  goToArchivePage(){
    this.navCtrl.push(ArchivedDesiresPage);
  }

  toggleReorder(){
    this.reorderIsEnabled = !this.reorderIsEnabled;
  }

  itemReordered($event){
    reorderArray(this.desires, $event);
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

            addDesireAlert.onDidDismiss(()=> {
                let addDesireToast = this.toastController.create({
                  message: "Desire Added",
                  duration: 2000
                });
                addDesireToast.present();              
            });

          }
        }
      ]
    });
    addDesireAlert.present();

  }

  editDesire(desireIndex){
    let editDesireAlert = this.alertController.create({
      title: "Edit A Desire",
      message: "Edit Your Desire",
      inputs: [
        {
          type: "text",
          name: "editDesireInput",
          value: this.desires[desireIndex]
        }
      ],
      buttons: [
        {
          text: "Cancel"
        },
        {
          text: "Edit Desire",
          handler: (inputData)=> {
            let desireText;
            desireText = inputData.editDesireInput;
            this.desireProvider.editDesire(desireText, desireIndex);

            editDesireAlert.onDidDismiss(()=> {
                  let editDesireToast = this.toastController.create({
                  message: "Desire Edited",
                  duration: 2000
                });
                editDesireToast.present();
            });
            
          }
        }
      ]
    });
    editDesireAlert.present();
  }

}
