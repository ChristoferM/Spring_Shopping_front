import { Component } from '@angular/core';
import { AuthCartService } from './service/auth-cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'cart-front';
  private authCartService: AuthCartService;
  sesion = localStorage.getItem('perfil');
  public isAdmin(): boolean {
    if (localStorage.getItem('perfil') == 'admin') {
      return true;
    } else {
      return false;
    }
  }


  public isAuth(): boolean {
    return !!localStorage.getItem('usuario');
    /*
    --> Froma Tradicional de Hacrlo
    if(localStorage.getItem('usuario')){
      return true;
      else{
        return false;
      }
    }*/
  }

  public signOut(): void {
    this.authCartService.signOut()
      .then(
        (value) => {
          console.log('Cerrar Sesion En SignOut');
          console.log(value);

        }
      )
      .catch(
        e => {
          console.log('error En SignOut');
          console.log(e);
        }
      );
  }
}
