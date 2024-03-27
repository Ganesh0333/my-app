import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-task',
  templateUrl: './form-task.component.html',
  styleUrls: ['./form-task.component.css']
})
export class FormTaskComponent {
  
  public candidate :FormGroup=new FormGroup({
    name:new FormControl(),
    experience1:new FormControl(),
    experience2:new FormGroup({
      company1:new FormControl(),
      experience3:new FormControl(),
      pacakge1:new FormControl()
  
    }),

    skills:new FormArray([])


  })

  get skillsFormArray(){
     return this.candidate.get("skills") as FormArray
  }

  add1(){
    this.skillsFormArray.push(
    new FormGroup({
      name2:new FormControl(),
      rating1: new FormControl(),
      experirnce1: new FormControl()
    })
    )
  }

  submit1(){
    console.log(this.candidate)
  }
}
