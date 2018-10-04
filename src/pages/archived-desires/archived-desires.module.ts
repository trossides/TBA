import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArchivedDesiresPage } from './archived-desires';

@NgModule({
  declarations: [
    ArchivedDesiresPage,
  ],
  imports: [
    IonicPageModule.forChild(ArchivedDesiresPage),
  ],
})
export class ArchivedDesiresPageModule {}
