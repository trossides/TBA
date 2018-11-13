import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';

import { DesireProvider } from '../providers/desire/desire';
import { ArchivedDesiresPage } from "../pages/archived-desires/archived-desires";
import { BurningDesirePage } from "../pages/burning-desire/burning-desire";
import { BurningProvider } from '../providers/burning/burning';
import { DeleteDesiresPage } from "../pages/delete-desires/delete-desires";
import { OneSignal } from '@ionic-native/onesignal';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ArchivedDesiresPage,
    BurningDesirePage,
    DeleteDesiresPage,
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ArchivedDesiresPage,
    BurningDesirePage,
    DeleteDesiresPage,
  ],
  providers: [
    DesireProvider,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BurningProvider,
    OneSignal
    
  ]
})
export class AppModule {}
