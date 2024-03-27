import { Component } from '@angular/core';
import { BottomSheetComponent } from '../bottom-sheet/bottom-sheet.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-angular-material',
  templateUrl: './angular-material.component.html',
  styleUrls: ['./angular-material.component.css']
})
export class AngularMaterialComponent {
  hidden = false;

 
  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
  
  constructor(private _bottomSheet:MatBottomSheet){}
  openBottomSheet():void{
    this._bottomSheet.open(BottomSheetComponent)
  }

}

