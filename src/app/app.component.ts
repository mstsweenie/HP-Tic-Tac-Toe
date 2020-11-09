import { Component, OnInit } from '@angular/core';
import { SocketService } from './services/socket.service';
import { AngularFirestore } from '@angular/fire/firestore';
//import { AuthenticationService } from './services/authentication.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  //  user;

  constructor(private db: AngularFirestore, private socketService: SocketService/*private auth: AuthenticationService*/) {
    //this.user = auth.authInfo;
  }

  ngOnInit() {
    const col = this.db.firestore.collection('Winners')
    const query = col.where('Gryffindor', '==', 'Potter');
    query.get().then(snapshot => {
      snapshot.docs.forEach(doc => {
        console.log(doc.id, doc.data());
      })
    });
  }

  //  login() {
  //    this.auth.login();
  //  }
  //
  //  logout() {
  //    this.auth.logout();
  //  }
}
