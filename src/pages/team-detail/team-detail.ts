import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { TournamentProvider } from '../../providers/tournament/tournament';
import { filter } from 'lodash';

/**
 * Generated class for the TeamDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-team-detail',
  templateUrl: 'team-detail.html',
})
export class TeamDetailPage {

  tournaments: any;
  filteredTournaments: any;
  myInput: string;
  shouldShowCancel = true;

  constructor(private tournamentProvider: TournamentProvider,
              private loadingController: LoadingController,
              public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    var loader = this.loadingController.create({
      content: 'Loading.......'
    });
    loader.present();

    this.tournamentProvider.getAll().subscribe( data => {
      this.tournaments = data;
      this.filteredTournaments = data;
      console.log(data);
      loader.dismiss();
    });
  }

  doRefresh(refresher){
    this.tournamentProvider.getAll()
        .subscribe((data)=> {
          this.tournaments = data;
          this.filteredTournaments = data;
          this.myInput = "";
          refresher.complete();
        })
  }

  onInput(event){
    this.filteredTournaments = filter(this.tournaments, (tournament) => {
      return (tournament.name.indexOf(this.myInput) !== -1);
    });
  }

  onCancel(event){
    this.filteredTournaments = this.tournaments;
  }

}
