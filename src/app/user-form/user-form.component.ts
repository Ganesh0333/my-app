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

      cards:new FormArray([])
    })

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

    public radioForm=new FormGroup({
      radiio: new FormControl(),
      dayScholorship: new FormControl(),
      residential: new FormControl(),
      busFee:new FormControl(),
      hostelFee:new FormControl()
    })

    dayScholorship(){
      
    }

    
}
