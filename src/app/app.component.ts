import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  buttons: { path: string; text: string }[] = [
    {
      path: 'anything',
      text: 'Anything',
    },
    {
      path: 'first',
      text: 'First',
    },
    {
      path: 'second',
      text: 'Second',
    },
  ];
}
