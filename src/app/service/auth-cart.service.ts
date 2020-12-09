import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthCartService {

  constructor(
    public angularFireAuth: AngularFireAuth
  ) { }

  public createUser(email: string, password: string) {
    return this.angularFireAuth.createUserWithEmailAndPassword(email, password);

  }
  public loginFireBase(email: string, password: string) {
    return this.angularFireAuth.signInWithEmailAndPassword(email, password);
  }
  public authDisable() {
    return this.angularFireAuth
  }
  public authEnable() {
    //return this.angularFireAuth.signInWithEmailAndPassword(email, password);;
  }

  public signOut() {
    return this.angularFireAuth.signOut();
  }
}
