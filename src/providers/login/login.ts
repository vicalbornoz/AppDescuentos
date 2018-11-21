import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { map } from 'rxjs/operators';
import { from } from 'rxjs';

@Injectable()
export class LoginProvider {

  usuario: Credenciales = {};

  constructor(public http: Http) {

  }

  cargarUsuario(nombre:string, email:string, imagen:string, uid:string, provider:string){
    this.usuario.nombre = nombre;
    this.usuario.email = email;
    this.usuario.imagen = imagen;
    this.usuario.uid = uid;
    this.usuario.provider = provider;
  }

  traer_imagen(usuarioInfo:any){
    let usuarioID = usuarioInfo.id;
    this.usuario.imagen = "https://graph.facebook.com/"+usuarioID+"/picture?type=large";
  }
}

export interface Credenciales{
  nombre?:string;
  email?:string;
  imagen?:string;
  uid?:string;
  provider?:string;
}
