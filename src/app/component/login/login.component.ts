import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/domain/user';
import { AuthService } from 'src/app/service/auth.service';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: User;
  public user1: User;

  public showMsg: boolean = false;
  public messages: string[] = [""];

  constructor(private router: Router,
    private authService: AuthService,
    public customerService: CustomerService) { }

  ngOnInit(): void {
    this.user = new User("abaglowbn@furl.net", "password");
    localStorage.setItem("perfil", "usuario");
    localStorage.removeItem("usuario");
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("shpcId");
    localStorage.removeItem("carId");
    localStorage.removeItem("perfil");
    
  }

  /**
   * findEmailExit
   */
  public findEmailExit(): boolean {
    console.log('BUSCANDO EL CORREO:' + this.user.username + ' - ' + this.user.password + '\n');

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
        console.log("Error en FINDALL");
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
    console.log('METODO INGRESAR \n ');
    console.log(this.user);
    this.user1 = new User("admin", "password");

    this.authService.loginUser(this.user1).subscribe(
      data => {
        //localStorage.setItem("usuario", JSON.stringify(this.user));
        localStorage.setItem("token", data.token);
        console.log('token grabado es' + localStorage.getItem('token') + '\n');

        console.log('VERIFICANDO CORREO*******************');

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


      }, err => {
        console.log('ERROR');
        console.log(err)
        localStorage.removeItem("usuario");
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        this.showMsg = true;
        this.messages = ["Usuario o clave no son validos"];
      });

    console.log('2DA RECTIFICACIONES #1 \n');
    if (this.user1.username === "admin" && this.user1.password === "password" && localStorage.getItem("email") != null) {
      console.log('2DA RECTIFICACIONES #2 \n');
      localStorage.setItem("usuario", JSON.stringify(this.user1));
      console.log('token grabado es' + localStorage.getItem('token'));

      this.router.navigate(['/product-list']);
    } else {
      this.showMsg = true;
      this.messages = ["Usuario no encontrado"];
    }

  }

}
