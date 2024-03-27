import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  static getMaildatas() {
    throw new Error('Method not implemented.');
  }

  constructor(private _httpCLient:HttpClient) { }

  getmail():Observable<any>{
    return this._httpCLient.get("https://jsonplaceholder.typicode.com/todos");
  }
}
