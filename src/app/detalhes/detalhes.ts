import { Component } from '@angular/core';
import { NavController} from '@ionic/angular';
import {Location} from '@angular/common';

@Component({
  selector: 'page-detalhes',
  templateUrl: 'detalhes.html'
})
export class DetalhesPage {

  constructor(public navCtrl: NavController,
    private _location: Location
) {

  }

  backToHome(){
    this._location.back();
  }

}
