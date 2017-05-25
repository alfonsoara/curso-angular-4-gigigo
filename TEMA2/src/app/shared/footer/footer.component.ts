import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.styl']
})
export class FooterComponent implements OnInit {

  public nameCompany:string = 'Gigigo';
  public address1:string = 'Horacio 340b, Polanco';
  public address2:string = 'Chapultepec Morales';
  public phone:number = 55555555;

  constructor() { }

  ngOnInit() {
  }

}
