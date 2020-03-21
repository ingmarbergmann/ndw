import { Component } from '@angular/core';

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

  ngOnInit() {
    navigator.geolocation.getCurrentPosition(position => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    })
  }

  public onToTop(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

}
