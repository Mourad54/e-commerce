import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private _http:HttpClient,private http: HttpClient) { }


    // Get Method For All Salaire
    getimage()
    {
      return this._http.get<any>("http://localhost:3000/image").pipe(map((res:any)=> {
        return res
      }))
    }


}
