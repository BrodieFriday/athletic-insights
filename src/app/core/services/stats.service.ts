import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(private http: HttpClient) { }

  private header = {
    headers: new HttpHeaders()
      .set('Authorization',  `bbbe9314-ec43-4cc6-a82a-f7d384163f09`)
  }

  getTeams(): Observable<any> {
    return this.http.get('https://api.balldontlie.io/nfl/v1/teams', this.header);
  }

  getGames(): Observable<any> {
    return this.http.get('https://api.balldontlie.io/nfl/v1/games', this.header);
  }
}
