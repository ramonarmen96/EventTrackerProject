import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game';
import { GameService } from 'src/app/services/game.service';
@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  games: Game[] = [];
  constructor(
    private gameSvc: GameService
  ) { }
  ngOnInit(): void {
    this.loadGames();
  }
loadGames(): void {
  this.gameSvc.index().subscribe(
    games => {
    this.games = games;
    },
    fail => {
      console.error('GameListComponent.loadGames() failed ');
      console.error(fail);
    }
  );
}
}
