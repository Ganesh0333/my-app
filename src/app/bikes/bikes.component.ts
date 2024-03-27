import { Component } from '@angular/core';
import { BikesService } from '../bikes.service';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent {

  public term:string = "";
  public pageNo:number = 0;
  public column:string = "";
  public order:string = "";
  public bikes:any=[];

  public queries:any = {
    filter:"",
    limit:10,
    pageNo:0,
    sortBy:"",
    order:""
  }
  constructor(private _bikesService:BikesService){
    _bikesService.getbikes().subscribe(
      (data:any)=>{
        this.bikes = data;
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
  }

  filterBikes(){
    this._bikesService.getfilteredbikes(this.term).subscribe(
      (data:any)=>{this.bikes = data},
      (err:any)=>{alert('internal server error')},

    )
  }

  getPagedBikes(){
    this._bikesService.getpagedbikes(this.pageNo).subscribe(
      (data:any)=>{this.bikes = data},
      (err:any)=>{alert('internal server error')},

    )
  }

  getSortedbikes(){
    this._bikesService.getSortedbikes(this.column,this.order).subscribe(
      (data:any)=>{this.bikes = data},
      (err:any)=>{alert('internal server error')},

    )
  }

  deleteBike(id:string){
    this._bikesService.deleteBike(id).subscribe(
      (data:any)=>{
        alert("deleted successfully");
        location.reload();
      },

      (err:any)=>{alert('internal server error')},

    )
  }

  loadData(){
    this._bikesService.loadData(this.queries).subscribe(
      (data:any)=>{
        this.bikes = data;
      },
      (err:any)=>{
        alert("internal server error")
      }
    )
    }
  }

