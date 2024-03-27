import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  public age : number = 20;

  public name : string = "ganesh"

  public isIndian : boolean = true

  public ages:number[]=[10,20,30];

  public states:string[]=['ap','ts','tn'];

  public citys:string[]=['viz','hyd','bang']

  // public products:any=[
  //   {names:'pen',price:20},
  //   {names:'phone',phone:20000},
  //   {names:"laptop",laptop:50000}
  // ]

submit(){
  alert('submitted');
}

store(){
  alert('stored');
}

public phone:string="+91"


}
