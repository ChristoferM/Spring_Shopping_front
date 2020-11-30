import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/domain/user';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user:User;
  
  public showMsg:boolean=false;
  public messages:string[]=[""];

  constructor(private router:Router,
    private authService:AuthService) { }

  ngOnInit(): void {
    
    
    this.user= new User("admin","password");
  }

  public ingresar():void{
    console.log('METODO INGRESAR ');
    
    this.authService.loginUser(this.user).subscribe(
      
      data=>{
        console.log('DATA ');
        localStorage.setItem("usuario",JSON.stringify(this.user));
        localStorage.setItem("token",data.token);
        console.log('token grabado es'+localStorage.getItem('token'));
        this.router.navigate(['/product-list']);

    },err=>{
      console.log('ERROR');
      console.log(err)
      this.showMsg=true;
      this.messages=["Usuario o clave no son validos"];
    });


    if(this.user.username==="admin" && this.user.password==="password"){
      localStorage.setItem("usuario",JSON.stringify(this.user));
      console.log('token grabado es'+localStorage.getItem('token'));
      this.router.navigate(['/product-list']);
    }else{
      this.showMsg=true;
      this.messages=["Usuario no encontrado"];
    }

  }

}
