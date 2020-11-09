import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { WinnerMessage } from '../interfaces/winner.interface';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  socket: any;
  constructor(private afs: AngularFirestore, private router: Router) {
    console.log("Constructor for the Socket Service")
    this.socket = io()
    this.socket.on('new-message', m => {
      console.log(`Message from foo: ${m}`)
    })
    this.socket.emit('new-message', 'A message from foo')
  }

  SendWinner(wMsg: string) {
    let winMsg: WinnerMessage = {
      house: wMsg,
      email: 'email',
      date: new Date()
    }
    this.socket.emit('win-message', winMsg);
  }

  PlayerMove(square: number) {
    console.log(square);
    this.socket.emit('player-move', square);
  }
}
