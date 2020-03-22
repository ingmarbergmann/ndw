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
  { 'title': 'Login Bereich', 'url': '/assets/img/02_vendingMachines_login_screen.png' },
  { 'title': 'Bezahlmöglichkeit über die Webseite', 'url': '/assets/img/03_vendingMachines_search_result.png' },
  { 'title': 'Die Lebensmittelautomaten auf einer Karte, sowie in einer Liste anzeigen', 'url': '/assets/img/04_vendingMachines_search_result_detail.png' },
  { 'title': 'Suche', 'url': '/assets/img/05_vendingMachines_NEW_search.png' },
  { 'title': 'Suchergebnisse', 'url': '/assets/img/05_vendingMachines_search_result_detail.png' },
  { 'title': 'Neuen Lebenmittelautomaten hinzufügen', 'url': '/assets/img/06_vendingMachines_create_new_machine.png' }

];
