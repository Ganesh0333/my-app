import { Component } from '@angular/core';
import { ReloadActivityService } from '../reload-activity.service';

@Component({
  selector: 'app-reload-activity',
  templateUrl: './reload-activity.component.html',
  styleUrls: ['./reload-activity.component.css']
})
export class ReloadActivityComponent {

public reload:any={};
constructor (private _ReloadActivityService:ReloadActivityService){
  _ReloadActivityService.getreload().subscribe(
    (data:any)=>{this.reload=data},
    (err:any)=>{alert("internal server error")},
  )
}


}
