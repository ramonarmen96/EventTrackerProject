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
  create(game: Game) {
    return this.http.post<Game>(this.url, game).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('KABOOM');
      })
    );
  }
  update(editedGame: Game) {
     return this.http.put<Game>(`${this.url}/${editedGame.id}`, editedGame)
     .pipe( catchError((err:any) => {
      console.log(err);
      return throwError('Error updating todo in service');
     })
     );
    }
    // private getHttpOptions(): object {
    //   const credentials = this.auth.getCredentials();

    //   const httpOptions = {
    //     headers: new HttpHeaders({
    //       Authorization: `Basic ${credentials}`,
    //       'X-Requested-With': 'XMLHttpRequest'
    //     })
    //   };
    //   return httpOptions
    // }
    destroy(id: number) {
      return this.http.delete<Game>(`${this.url}/${id}`).pipe
      (
        catchError((err:any) => {
           console.log(err);
           return throwError('Error deleting game in service');
        }));

   }
   show(id): Observable<Game>{
    return this.http.get<Game>(this.url)
    .pipe(
      catchError((err:any) => {
         console.log(err);
         return throwError('Error getting games');
      })
     );
 }
  }
