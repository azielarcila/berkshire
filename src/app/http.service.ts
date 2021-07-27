import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient)  { }

  getBeer(){
    return this.http.get('https://api.openbrewerydb.org/breweries')
  }

  getEmployees(){
    return this.http.get('https://localhost:44346/api/employees')
  }

  createEmployee(data: any): Observable<any> {
    return this.http.post('https://localhost:44346/api/employees', data);
  }

}
