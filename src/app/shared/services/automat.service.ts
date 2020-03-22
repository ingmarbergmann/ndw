import { Injectable } from '@angular/core';
import {Automat} from "@shared/models/automat.model";
import {AngularFirestore, AngularFirestoreCollection, DocumentReference} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import * as firebase from "firebase";

@Injectable({
  providedIn: 'root'
})
export class AutomatService {
  private automatsCollection: AngularFirestoreCollection<Automat>;
  automats: Observable<Automat[]>;
  constructor(private firestore: AngularFirestore) {
    this.automatsCollection = this.firestore.collection<Automat>(`automats`);
    this.automats = this.automatsCollection.valueChanges();
  }

  public saveAutomat(automat: Automat): Promise<DocumentReference> {
    return this.automatsCollection.add({...automat});
  }

  public getAutomats(): Observable<Automat[]> {
    return this.automats;
  }
}
