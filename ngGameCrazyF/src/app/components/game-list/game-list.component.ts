import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from 'src/app/models/game';
import { GameService } from 'src/app/services/game.service';
@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  selected = null;
  game
  games: Game[] = [];
  newGame: Game = new Game();
  editGame: Game = null;

  constructor(
    private gameSvc: GameService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.loadGames();
    // let id = this.route.snapshot.paramMap.get('id');
    // if(id){
    //   this.gameSvc.show(id).subscribe(
    //     todo => {
    //       this.selected = todo;
    //     },
    //     fail =>{
    //       console.error("TodoListComponent.ngOnInIt(): todo retrieve failed");
    //       console.error(fail);
    //       this.router.navigateByUrl('notFound')

    //     }
    //   )
    // }
    // this.reload();
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
setSelected(game: Game) {
  this.selected = game;
}
displayTodo(game: Game): void {
  this.selected = game;
}
addGame() {
  this.gameSvc.create(this.newGame).subscribe(
    data => {
      this.loadGames();
      this.newGame = new Game();
    },
    err => {
      console.log('Error loading games: ' + err);
    }
  );
}
setEditGame(): void {
  this.editGame = Object.assign({}, this.selected);
}
updateGame(editedGame: Game): void {
  this.gameSvc.update(editedGame).subscribe(
    data => {
      this.reload();
      // this.selected = editedTodo;
      // this.editTodo = null;
    },
    err => {
      console.log('Error updating todo: ' + err);
    }
  );
  // this.todos = this.todoService.index();
}
reload() {
  this.gameSvc.index().subscribe(
    data => {
      this.games = data;
    },
    err => {
      console.log('Error loading todos: ' + err);
    }
  );
}
deleteGame(id: number): void {
  // if (confirm('You sure about this?')) {
    // this.todos = this.todoService.index();
    // }
    this.gameSvc.destroy(id).subscribe(
      data =>{
        this.reload();
      },
      err => {
        console.log('Error deleting todo: ' + err);
      }
    );
}
}
