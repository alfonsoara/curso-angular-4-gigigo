import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})
export class HomeComponent implements OnInit {

  public title:string = 'Esto es home';
  public subtitle:string = 'Esto es home y aqui puedes ver nada'

  constructor() { }

  ngOnInit() {

  }

}
