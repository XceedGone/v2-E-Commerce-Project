import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, timeout } from 'rxjs/operators';
 

@Injectable({
  providedIn: 'root'
})
export class AccessProvidersService {
  server : string = 'http://localhost/Project/backend/';
  headers : HttpHeaders;

  constructor(
        public http :  HttpClient
  ) {
        this.headers = new HttpHeaders();
        this.headers.append("Accept", 'application/json');
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Access-Control-Allow-Origin', '*');
  }
    // postData(data, file){
      //   let headers = new HttpHeaders({
      //       'Content-Type' : 'application/json; charset=UTF-8'
      //   });
      //   let options = {
      //       headers: headers 
      //   }
      //   return this.http.post(this.server + file, JSON.stringify(data), options).pipe(timeout(59000)).pipe(map(res => res));
      // }

      postData(data){
        return this.http.post('http://localhost/Project/backend/api.php', JSON.stringify(data), {responseType: 'text'});
      }
}
