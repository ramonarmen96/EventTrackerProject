import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private baseUrl = 'http://localhost:8084/';
  private url = this.baseUrl + 'api/games';


  constructor(
private http: HttpClient
  ) { }

  index(): Observable<Game[]>{
    return this.http.get<Game[]>(this.url).pipe(
      catchError((err: any) => {
        console.error('Game Service error retrieving games' + err);
        return throwError(err);
      })
    )

  }
}
