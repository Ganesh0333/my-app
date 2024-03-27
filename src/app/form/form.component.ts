import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscriber } from 'rxjs';
import { FormService } from '../form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  constructor(private _formService:FormService){

  }
  public accountForm:FormGroup = new FormGroup(
    {
      account_name : new FormControl(),
      available_balance : new FormControl(),
      account_number : new FormControl(),
      city : new FormControl(),
      profie_picture : new FormControl(),
      id : new FormControl() 
    }
  )
  submit(){
    this._formService.submitForm(this.accountForm.value).subscribe(
      (data:any)=>{
        alert("created sucessfully")
      },
      (err:any)=>{
        alert("creation failed")
      }
    )
    console.log(this.accountForm.value)
    }
    
  }

