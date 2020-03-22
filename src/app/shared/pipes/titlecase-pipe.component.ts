import { Component } from '@angular/core';

@Component({
  selector: 'app-titlecase-pipe',
  template: `
    <img [src]="angularImage" height="60px">
  `
})
export class TitleCasePipeComponent {
  public message = '';
  public angularImage: string = '/assets/img/hofomat_logo.png';
}
