import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from '../services/user.service';
import { SocketService } from '../services/socket.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  squares: string[];
  xIsNext: boolean;
  winner: string;
  gameOver: boolean;
  tieGame: boolean;
  boardFull: boolean;
  ready = false;
  user;

  constructor(private userService: UserService, private auth: AngularFireAuth, private socketService: SocketService) {
    this.auth.user.subscribe(v => {
      this.user = v;
      this.ready = true
    });
  }

  ngOnInit() {
    this.newGame();
  }

  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
    this.boardFull = false;
    this.gameOver = false;
    this.tieGame = false;
  }

  logout() {
    this.userService.logout();
  }

  get player() {
    return this.xIsNext ? 'Potter' : 'Malfoy';
  }

  makeMove(idx: number) {
    console.log(idx);
    this.socketService.PlayerMove(idx);
    if (!this.gameOver) {
      if (!this.squares[idx]) {
        this.squares.splice(idx, 1, this.player);
        this.xIsNext = !this.xIsNext;
      }

      this.winner = this.calculateWinner();
      let boardFull = this.squares.every((val) => val !== null)
      if (boardFull || this.winner !== null) {
        console.log(this.winner)
        if (this.winner === 'Potter') {
          this.winner = 'Gryffindor';
        } else {
          this.winner = 'Slytherin';
        }
        this.socketService.SendWinner(this.winner)
        this.gameOver = true;
      }
      if (boardFull && this.winner === null) {
        this.tieGame = true;
      }
    }
  }

  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return null;
  }
}
