import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GeralService {

  constructor(private http : HttpClient) { }

  selectOne(id : string): Observable<any>{
    return this.http.get(`http://localhost:4000/user/empresa/${id}`);
  }
}
