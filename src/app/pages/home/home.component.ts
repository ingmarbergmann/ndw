import { Component } from '@angular/core';
import {LoadgeojsonService} from "@shared/services/loadgeojson.service";
import {Automat} from "@shared/models/automat.model";
import GeoPoint = firebase.firestore.GeoPoint;
import * as firebase from "firebase";
import {GeoFire, GeoFireTypes} from "geofire";
import {AutomatService} from "@shared/services/automat.service";
import {MapMarker} from "@angular/google-maps";

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styles: [`
  button {
    position: fixed;
    bottom: 70px;
    float: right;
    right: 10px;
    z-index: 10;
  }`]
})

export class HomeComponent {

  zoom = 12;
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
  };
  markers: any[] = [];

  constructor(private loadgeojsonService:LoadgeojsonService,
              private automatService:AutomatService) {
  }

  //firebaseRef = firebase.database().ref();
  // geoFire = new GeoFire(this.firebaseRef);
  // geoFireRef = this.geoFire.ref();

  getAutomatsGeoJson() {
    this.loadgeojsonService.getAutomatsGeoJson().subscribe((automatsGeoJson) => {
      let automatsGeoPoints = {};

      //todo DONT UNCOMMENT THIS SHIT
      //
      // automatsGeoJson.features.forEach(feature => {
      //   let automat:Automat = new Automat();
      //   automat.properties = feature.properties;
      //   automat.id = feature.id;
      //   automat.coordinates = new GeoPoint(feature.geometry.coordinates[0],feature.geometry.coordinates[1]);
      //   this.automatService.saveAutomat2(automat);
      //   automatsGeoPoints[`automat_${automat.id}`] = feature.geometry.coordinates;
      // });

      // let feature = automatsGeoJson.features[0];
      //   let automat:Automat = new Automat();
      //   automat.properties = feature.properties;
      //   automat.id = feature.id;
      //   automat.coordinates = new GeoPoint(feature.geometry.coordinates[0],feature.geometry.coordinates[1]);
      //   this.automatService.saveAutomat(automat);
      //   automatsGeoPoints[`automat_${automat.id}`] = feature.geometry.coordinates;
      // this.geoFireRef.set(automatsGeoJson);
    })
  }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition(position => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    });
    this.automatService.getAutomats().subscribe(automats => {
      console.log(automats);
      //automats.forEach(automat => this.addMarker(automat.coordinates[0],automat.coordinates[1],automat.id))
      let automat = automats[0];
      if(!automat.coordinates) return;
      this.addMarker(automat.coordinates.latitude,automat.coordinates.longitude,automat.id)
    })
    //this.getAutomatsGeoJson();
  }

  public onToTop(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  addMarker(lat: number, lng: number, title: string) {
    this.markers.push({
      position: {
        lat,
        lng,
      },
      label: {
        color: 'red',
        text: title + ' - label',
      },
      title,
      options: { animation: google.maps.Animation.BOUNCE },
    })
  }

}
