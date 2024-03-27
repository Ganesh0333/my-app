import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BikesService } from '../bikes.service';

@Component({
  selector: 'app-create-bike',
  templateUrl: './create-bike.component.html',
  styleUrls: ['./create-bike.component.css']
})
export class CreateBikeComponent {
  constructor(private _bikeService:BikesService){
    
  }
  public bikeForm:FormGroup = new FormGroup(
    {
      Vehicle :new FormControl(),
      manufacturer : new FormControl(),
      model : new FormControl(),
      color :  new FormControl(),
      type :  new FormControl(),
      fuel :  new FormControl(),
      image :  new FormControl(),

  
    }
  )
  submit(){
    console.log(this.bikeForm.value);
    this._bikeService.createbike(this.bikeForm.value).subscribe(
      (data:any)=>{
        alert("created sucessfully")
        this.bikeForm.reset()
      },
      (err:any)=>{
        alert("creation failed")
      }
    )
  }
}
