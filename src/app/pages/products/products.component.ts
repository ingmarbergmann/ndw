import { Component, OnInit } from '@angular/core';
import {LoadgeojsonService} from "@shared/services/loadgeojson.service";
import {AutomatService} from "@shared/services/automat.service";
import {GeoService} from "@shared/services/geo.service";
import * as firebase from "firebase";
import {GeoFire} from "geofire";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {FormControl} from "@angular/forms";
import {ViewEncapsulation} from "@angular/cli/lib/config/schema";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductsComponent implements OnInit {

  zoom = 12;
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
  };
  markers: any[] = [];

  firebaseRef = firebase.database().ref();
  geoFire = new GeoFire(this.firebaseRef);
  geoFireRef = this.geoFire.ref();
  automatsGeoPoints = {};

  categories = [
    { title: "Getränke", description: "Bier, Saft, Wasser, Cola" },
    { title: "Essen", description: "Wurst, Brot, Tiefkühlware" },
    { title: "Milchprodukte", description: "Milch, Sauersahne, Eier, Käse" },
  ];
  myControl = new FormControl();
  autocomplete: string[] = ['One', 'Two', 'Three'];

  constructor(private loadgeojsonService:LoadgeojsonService,
              private automatService:AutomatService,
              private geoService: GeoService) { }

  private unsubscribe$: Subject<void> = new Subject();

  getAutomatsGeoJson() {
    this.loadgeojsonService.getAutomatsGeoJson().subscribe((automatsGeoJson) => {

      //todo DONT UNCOMMENT THIS SHIT
      // let i = 0;
      // automatsGeoJson.features.forEach(feature => {
      //   i++;
      //   if(i < 60 || i > 70) return;
      //   let automat:Automat = new Automat();
      //   console.log(automat);
      //   automat.properties = feature.properties;
      //   automat.id = feature.id;
      //   automat.coordinates = new GeoPoint(feature.geometry.coordinates[1],feature.geometry.coordinates[0]);
      //   if(this.automatsGeoPoints[`automat_${automat.id}`]) {
      //     console.log('point is there')
      //     return;
      //   }
      //   this.automatService.saveAutomat(automat);
      //   this.automatsGeoPoints[`automat_${automat.id.replace('\/','_')}`] = [feature.geometry.coordinates[1],feature.geometry.coordinates[0]];
      //   //this.geoService.setLocation(`automat_${automat.id.replace('\/','_')}`, [feature.geometry.coordinates[1],feature.geometry.coordinates[0]])
      // });

      // let feature = automatsGeoJson.features[6];
      // let automat:Automat = new Automat();
      // console.log(automat)
      // automat.properties = feature.properties;
      // automat.id = feature.id;
      // automat.coordinates = new GeoPoint(feature.geometry.coordinates[1],feature.geometry.coordinates[0]);
      //
      // if(this.automatsGeoPoints[`automat_${automat.id}`]) {
      //   console.log('point is there')
      //   return;
      // }
      // this.automatService.saveAutomat(automat);
      // this.automatsGeoPoints[`automat_${automat.id.replace('\/','_')}`] = [feature.geometry.coordinates[1],feature.geometry.coordinates[0]];
      this.geoFire.set(this.automatsGeoPoints);
    })
  }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition(position => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    });
    this.automatService.getAutomats().pipe(takeUntil(this.unsubscribe$)).subscribe(automats => {
      console.log(automats);
      automats.forEach(automat => {
        let markerName = automat.properties && automat.properties.name || automat.id;
        this.addMarker(automat.coordinates.latitude,automat.coordinates.longitude,automat.id, markerName)
      })
    });
    //this.getAutomatsGeoJson();
  }

  public onToTop(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  addMarker(lat: number, lng: number, title: string, label: string) {
    this.markers.push({
      position: {
        lat,
        lng,
      },
      label: {
        color: 'red',
        text: label,
      },
      title,
      options: { animation: google.maps.Animation.BOUNCE },
    })
  }

  ngOnDestroy(): void  {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}