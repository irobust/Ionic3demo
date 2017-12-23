import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { WelcomePage } from '../welcome/welcome';
import { MainTabPage } from '../main-tab/main-tab';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToWelcomePage(){
    this.navCtrl.push(WelcomePage, { msg: 'Hello World!' });
  }

  goToMainTabPage(){
    this.navCtrl.push(MainTabPage);
  }

}
