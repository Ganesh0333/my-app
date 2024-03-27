import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  public isHonda : boolean=false;
  public isVolvo :boolean=false;
  public isBmw : boolean=false;

  honda(){
  this.isBmw=false;
  this.isVolvo=false;
  this.isHonda=true;
  }
  
  volvo(){
    this.isBmw=false;
    this.isHonda=false;
    this.isVolvo=true;
  }

  bmw(){
    this.isBmw=true;
    this.isHonda=false;
    this.isVolvo=false;
    
  }

}
