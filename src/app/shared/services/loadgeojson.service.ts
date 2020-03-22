import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoadgeojsonService {

  constructor(protected _httpClient: HttpClient) { }

  readonly BASE_URL = 'https://raw.githubusercontent.com/schneefux/nurdaswichtigste-map/gh-pages/lebensmittelautomaten.geojson';

  getAutomatsGeoJson(): Observable<any> {
    return this._httpClient.get<any>(this.BASE_URL);
  }
}
