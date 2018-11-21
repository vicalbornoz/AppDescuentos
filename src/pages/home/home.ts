import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginProvider, Credenciales } from '../../providers/login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public loginProv:LoginProvider) {
  }

}
