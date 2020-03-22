import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import {AngularFireDatabase} from "@angular/fire/database";
import {GeoFire} from "geofire";

@Injectable({
    providedIn: 'root'
})
export class GeoService {

    dbRef: any;
    geoFire: any;

    hits = new BehaviorSubject([]);

    constructor(private db: AngularFireDatabase) {
        /// Reference database location for GeoFire
        // this.dbRef = this.db.list('/locations');
        // this.geoFire = new GeoFire(this.dbRef.$ref);
    }

    /// Adds GeoFire data to database
    setLocation(key:string, coords: Array<number>) {
        this.geoFire.set(key, coords)
            .then(_ => console.log('location updated'))
            .catch(err => console.log(err))
    }

    /// Adds GeoFire data to database
    setLocations(locations: any) {
        this.geoFire.set(locations)
            .then(_ => console.log('location updated'))
            .catch(err => console.log(err))
    }


    /// Queries database for nearby locations
    /// Maps results to the hits BehaviorSubject
    getLocations(radius: number, coords: Array<number>) {
        this.geoFire.query({
            center: coords,
            radius: radius
        })
            .on('key_entered', (key, location, distance) => {
                let hit = {
                    location: location,
                    distance: distance
                }

                let currentHits = this.hits.value
                currentHits.push(hit)
                this.hits.next(currentHits)
            })
    }

}