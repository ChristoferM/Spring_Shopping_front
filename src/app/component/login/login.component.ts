import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/domain/user';
import { AuthService } from 'src/app/service/auth.service';
import { AuthCartService } from 'src/app/service/auth-cart.service';
import { CustomerService } from 'src/app/service/customer.service';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { error } from 'protractor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: User;
  public user1: User;
  public _salida: boolean;

  public showMsg: boolean = false;
  public messages: string[] = [""];

  constructor(private router: Router,
    private authService: AuthService,
    public customerService: CustomerService,
    public firebase: AuthCartService) { }

  ngOnInit(): void {
    this.user = new User("Email", "password");
    localStorage.removeItem("perfil");
    localStorage.removeItem("usuario");
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("shpcId");
    localStorage.removeItem("carId");

  }

  /**
   * findEmailExit
   */
  public findEmailExit(): boolean {
    _enable: String;
    console.log('\n \n **************** funcion #3 findEmailExit ******************');

    console.log('BUSCANDO EL CORREO:\n ' + this.user.username + ' - ' + this.user.password + '\n');

    this.customerService.findById(this.user.username).subscribe(
      data => {

        console.log('**');
        console.log('\n Estado del Correo= ' + data.enable);
        if (data == null || data.enable != "Y") {
          console.log('USUARIO NO EXISTENTE EN LA BASE DE DATOS');
          localStorage.removeItem("usuario");
          localStorage.removeItem("token");
          localStorage.removeItem("email");

        } else {
          console.log('USUARIO APROVADO!!!!! \n');
          localStorage.setItem("email", this.user.username);

        }

      },
      error => {
        console.log("Error encontrando el correo : " + error.error);
        localStorage.removeItem("usuario");
        localStorage.removeItem("token");
        localStorage.removeItem("email");

      });
    console.log('Se guardo el correo: ' + localStorage.getItem("email"));

    if (localStorage.getItem("email") === null) {

      console.log('retrun false');
      return false;

    } else {

      console.log('retrun true');
      return true;
    }


  }


  public ingresar(): void {

    if (this.authFireBase() === true) {
      console.log('correo aceptado');
      if (this.user.username === 'admin@admin.ad') {
        localStorage.removeItem("perfil");
        localStorage.setItem("perfil", "admin");
      } else {
        localStorage.removeItem("perfil");
        localStorage.setItem("perfil", "usuario");
      }

    } else {
      console.log('correo no aceptado');

    }



  }

  private authFireBase(): boolean {
    console.log(this.user.username, this.user.password);
    this.firebase.loginFireBase(this.user.username, this.user.password)
      .then(
        value => {
          this._salida = true;

          console.log('Correo bien ' + this._salida);
          console.log(value);
          this.logInt();

        }
      )
      .catch(
        error => {
          this._salida = false;
          console.log('Correo mal');
          console.log(error);

        }
      );
    console.log('Salida ' + this._salida);
    return this._salida;
  }

  private logInt(): void {
    console.log('**************METODO INGRESAR \n ');
    console.log(this.user);
    this.user1 = new User("admin", "password");
    this.obtenerToken();
    console.log('token grabado es: ' + localStorage.getItem('token') + '\n');
    console.log('------------------------------------------------------------------- YA TIENE TOKEN');
    this.verificarCorreo();
    this.terminarLogin();
  }
  private obtenerToken() {
    console.log('\n \n **************** funcion  obtenerToken *******************');
    console.log(this.user1);


    this.authService.loginUser(this.user1).subscribe(
      data => {//localStorage.setItem("usuario", JSON.stringify(this.user));
        localStorage.setItem("token", data.token);
      }, err => {
        console.log('ERROR');
        console.log(err)
        localStorage.removeItem("usuario");
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        this.showMsg = true;
        this.messages = ["ERROR EN AUTENTICACION"];
      });
  }
  private terminarLogin() {
    console.log('\n \n **************** funcion #5 terminarLogin *******************');
    console.log('TOKEN : ->: ' + localStorage.getItem('token'));
    console.log('\n');
    console.log('vALIDANDO ADMIN PASSWORD EMAIL PARA INGRESO \n');
    if (this.user1.username === "admin" && this.user1.password === "password" && localStorage.getItem("email") != null) {
      console.log('TODO CORRECTO \n');
      localStorage.setItem("usuario", JSON.stringify(this.user1));
      console.log('token grabado es' + localStorage.getItem('token'));

      this.router.navigate(['/product-list']);
    } else {
      console.log('eRROR DE DATOS \n');
      this.showMsg = true;
      this.messages = ["Usuario no encontrado"];
    }
  }

  private verificarCorreo(): boolean {
    console.log('\n \n **************** funcion #2 VERIFICANDO CORREO*******************');

    if (this.findEmailExit() == false) {

      console.log('SALIDA = FALSE \n');
      console.log('-> ' + localStorage.getItem("usuario"));
      console.log('-> ' + localStorage.getItem("token"));
      console.log('-> ' + localStorage.getItem("email") + '\n');

      localStorage.removeItem("usuario");
      localStorage.removeItem("token");
      localStorage.removeItem("email");
    } else {
      console.log('SALIDA = TRUE');
      console.log('-> ' + localStorage.getItem("usuario"));
      console.log('-> ' + localStorage.getItem("token"));
      console.log('-> ' + localStorage.getItem("email"));
      this.router.navigate(['/product-list']);
    }
    return true;
  }
}
