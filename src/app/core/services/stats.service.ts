import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    var header = {
      headers: new HttpHeaders()
        .set('Authorization',  `bbbe9314-ec43-4cc6-a82a-f7d384163f09`)
    }
    return this.http.get('https://api.balldontlie.io/nfl/v1/teams', header);
  }

}
