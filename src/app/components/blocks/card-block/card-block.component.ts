import { Component } from '@angular/core';

@Component({
  selector: 'app-card-block',
  templateUrl: './card-block.component.html',
  styleUrls: ['./card-block.component.scss']
})
export class CardBlockComponent {
  titleCard = 'Dezentrale Versorgung des Nötigsten';
  //numberCard = 8;
  subTitleCard = 'Wie kann man dezentrale Lösungen schaffen, damit die Menschen mit weniger Risiko an alle lebensnotwendigen Artikel kommen? Sie können lokale Erzeuger geholfen werden, damit Ihre Produkte direkt verkafut werden?';
  contentCard = 'Der Supermarktbesuch ist aktuell eines der größten Risiken um sich selbst mit dem Virus zu infizieren oder um andere Menschen zu infizieren. Durch Lebensmittelautomaten kann der Kontakt zu anderen Menschen minimiert werden.';
  angularImage1: string;
  angularImage2: string;
  angularImage3: string;

  constructor() {
    this.angularImage1 = '/assets/img/bauer.png';
    this.angularImage2 = '/assets/img/angular2.png';
    this.angularImage3 = '/assets/img/angular2.png';}

}
