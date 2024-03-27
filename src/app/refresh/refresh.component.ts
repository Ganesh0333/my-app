import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { RefreshService } from '../refresh.service';

@Component({
  selector: 'app-refresh',
  templateUrl: './refresh.component.html',
  styleUrls: ['./refresh.component.css']
})
export class RefreshComponent {
  public refresh:any={};
  constructor (private _refreshService:RefreshService){
    _refreshService.getrefresh().subscribe(
      (data:any)=>{this.refresh=data},
      (err:any)=>{
        alert("internal server error")
      }
    )
  }

  buttonRefresh(){
    this._refreshService.getrefresh().subscribe(
      (data:any)=>{this.refresh=data},
      (err:any)=>{
        alert("internal server error")
      }
    )
  }
}
