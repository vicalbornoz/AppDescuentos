import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { LoginProvider } from '../../providers/login/login';
import { HomePage } from '../home/home';
import { Platform } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, afDB: AngularFireDatabase, private afAuth: AngularFireAuth, public loginProv: LoginProvider, private fb: Facebook, private platform: Platform) {
  }

  signInWithFacebook() {
    if(this.platform.is('cordova')){
      this.fb.login(['email', 'public_profile']).then(res => {
        const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
        firebase.auth().signInWithCredential(facebookCredential).then(
          user=>{
          console.log(user);
          this.loginProv.cargarUsuario(user.displayName, user.email, user.photoURL, user.uid , 'facebook');
          this.navCtrl.setRoot(TabsPage);
        });
      }).catch(e=>console.log('Error con el login') + JSON.stringify(e));
    }else{
      this.afAuth.auth
        .signInWithPopup(new firebase.auth.FacebookAuthProvider())
        .then(res =>{
          console.log(res);
          let usuario = res.user;
          this.loginProv.cargarUsuario(usuario.displayName, usuario.email, usuario.photoURL, usuario.uid , 'facebook');
          this.loginProv.traer_imagen(res.additionalUserInfo.profile);
          this.navCtrl.setRoot(TabsPage);
      });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
