import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainTabPage } from './main-tab';
import { TeamDetailPage } from '../team-detail/team-detail';
import { StandingPage } from '../standing/standing';

@NgModule({
  declarations: [
    MainTabPage,
    TeamDetailPage,
    StandingPage
  ],
  imports: [
    IonicPageModule.forChild(MainTabPage)
  ],
  entryComponents: [
    TeamDetailPage,
    StandingPage
  ]
})
export class MainTabPageModule {}
