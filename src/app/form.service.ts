import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private _httpClient:HttpClient) {}

  submitForm(data:any):Observable<any>{
   return this._httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/principals",data)
}
}