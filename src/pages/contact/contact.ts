import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginProvider, Credenciales } from '../../providers/login/login';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  usuario: Credenciales = {};

  constructor(public navCtrl: NavController, public loginProv:LoginProvider) {
      this.usuario = this.loginProv.usuario;
  }

}

export interface Credenciales{
  nombre?:string;
  email?:string;
  imagen?:string;
  uid?:string;
  provider?:string;
}
