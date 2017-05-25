import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl']
})
export class LoginComponent implements OnInit {

  public nombre:string = 'Esau';
  public edad:number = 32;
  public mayorDeEdad: boolean = true;
  public trabajos:Array<any> = ['Programador', 32, 'esau'];
  comodin: any
  public apellido:string;

  constructor(

    private _route: Router,
    private _activeRoute: ActivatedRoute

  ) { }

  ngOnInit() {

    this.apellido = 'apellido del usuario'

  }


  entrarLogin(){

    this._route.navigate(['/home']);

    console.log('acción')

  }



}
