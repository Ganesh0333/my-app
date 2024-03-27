import { Component } from '@angular/core';
import { FormArray, FormControl, FormControlName, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

    public userForm:FormGroup=new FormGroup({
      name: new FormControl(),
      age: new FormControl(),
      phone: new FormControl(),
      email:new FormControl(),
      address: new FormGroup({
        city:new FormControl(),
        pin:new FormControl()
      }),

      cards:new FormArray([]),
      type: new FormControl(),
     
    })

    constructor(){
      this.userForm.get('type')?.valueChanges.subscribe(
        (data:any)=>{
          if(data == 'dayScholor'){
            //add busfee
            this.userForm.addControl('busFee',new FormControl());
            //remove hostelfee
            this.userForm.addControl('hostelFee',new FormControl());
          }
          else{
            //add hostelfee
            this.userForm.addControl('hostelFee',new FormControl());
            //remove busfee
            this.userForm.removeControl('busFee');
          }
        }
      )
    }

    get cardsFormArray(){
      return this.userForm.get("cards") as FormArray;
    } 
    
    add(){
      this.cardsFormArray.push(
        new FormGroup({
          number:new FormControl(),
          expiry:new FormControl(),
          cvv:new FormControl()
        })

      )
    }

    submit(){
      console.log(this.userForm)
    }

    delete(i:number){
      this.cardsFormArray.removeAt(i);
    } 
}
