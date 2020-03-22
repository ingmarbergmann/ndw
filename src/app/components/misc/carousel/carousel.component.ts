import { Component } from '@angular/core';
import { Image } from '@shared';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})

export class CarouselComponent {
  public images = IMAGES;
  constructor() {
  }
}

const IMAGES: Image[] = [
  { 'title': 'Nutzern erlaubt, Lebensmittelautomaten einzutragen', 'url': '/assets/img/01_vendingMachines_no_login.png' },
  { 'title': 'Die Lebensmittelautomaten auf einer Karte, sowie in einer Liste anzeigen', 'url': '/assets/img/02_vendingMachines_login_screen.png' },
  { 'title': 'Bezahlmöglichkeit über die Webseite', 'url': '/assets/img/03_vendingMachines_search_result.png' },
  { 'title': 'Abholung der Ware über eindeutigen Code oder Login Daten', 'url': '/assets/img/04_vendingMachines_search_result_detail.png' },
  { 'title': 'Abholung der Ware über eindeutigen Code oder Login Daten', 'url': '/assets/img/05_vendingMachines_search_result_detail.png' },
  { 'title': 'Abholung der Ware über eindeutigen Code oder Login Daten', 'url': '/assets/img/06_vendingMachines_create_new_machine.png' },

];
