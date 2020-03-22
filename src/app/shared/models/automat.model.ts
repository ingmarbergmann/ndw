import * as firebase from "firebase";
import GeoPoint = firebase.firestore.GeoPoint;

export class Automat {
  public properties: any;
  public coordinates: GeoPoint;
  public id: string;
}
