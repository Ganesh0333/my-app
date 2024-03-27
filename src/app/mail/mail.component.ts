import { Component } from '@angular/core';
import { MailService } from '../mail.service';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent {

public mails:any={};
constructor (private _mail:MailService){
  _mail.getmail().subscribe(
    (data:any)=>{
      this.mails=data;
    },
    (err:any)=>{ alert("internal server error")},

  )
}
}
