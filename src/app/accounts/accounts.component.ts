import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {
 
  public accounts:any=[];
  public term1:string = "";
  public pageNo:number=0;
  constructor(private _accountsService:AccountsService){
    _accountsService.getAccounts().subscribe(
      (data:any)=>{
        this.accounts = data;
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
  }

  filterAccounts(){
    this._accountsService.getFilteredAccount(this.term1).subscribe(
      (data:any)=>{this.accounts = data},
      (err:any)=>{alert("internal server error")},

    )
  }
  
  getPagedAccounts(){
    this._accountsService.getPagedAccounts(this.pageNo).subscribe(
      (data:any)=>{this.accounts = data},
      (err:any)=>{alert("internal server error")}

    )
  }
}

