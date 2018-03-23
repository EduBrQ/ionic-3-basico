import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FeedPage } from '../pages/feed/feed';
import { IntroPage } from '../pages/intro/intro';
import { HttpModule }  from "@angular/http";
import { MovieProvider } from '../providers/movie/movie';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FeedPage,
    IntroPage,
    TabsPage

    
  ],
  imports: [
    BrowserModule,
    HttpModule,  //ionic generate provider - tem que rodar esse comando depois p criar um provedor
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FeedPage,
    IntroPage,
    TabsPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MovieProvider
  ]
})
export class AppModule {}
