import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReloadActivityService {

  constructor(private _httpClient:HttpClient) {}

  getreload(){
    return this._httpClient.get("https://www.boredapi.com/api/activity")
  }
}
