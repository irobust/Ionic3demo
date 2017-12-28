import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { WelcomePage } from '../welcome/welcome';
import { MainTabPage } from '../main-tab/main-tab';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  base64Image: any;

  constructor(private camera: Camera, public navCtrl: NavController) {

  }

  goToWelcomePage(){
    this.navCtrl.push(WelcomePage, { msg: 'Hello World!' });
  }

  goToMainTabPage(){
    this.navCtrl.push(MainTabPage);
  }

  capture(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64:
     this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }

}
