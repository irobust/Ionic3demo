import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { WelcomePage } from '../pages/welcome/welcome';
import { WelcomePageModule } from '../pages/welcome/welcome.module';
import { MainTabPageModule } from '../pages/main-tab/main-tab.module';
import { TeamDetailPage } from '../pages/team-detail/team-detail';
import { StandingPage } from '../pages/standing/standing';
import { TournamentProvider } from '../providers/tournament/tournament';
import { HttpClientModule } from '@angular/common/http';
import { Camera } from '@ionic-native/camera';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    WelcomePageModule,
    MainTabPageModule,
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    WelcomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TournamentProvider,
    Camera
  ]
})
export class AppModule {}
