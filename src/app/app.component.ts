import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { firebaseKeys } from './firebase.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  public ngOnInit(): void {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseKeys);
    }
  }
}
