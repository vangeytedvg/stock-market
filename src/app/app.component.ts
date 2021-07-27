import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // These become visible in app.component.html
  title = 'stock-market';
  company = 'DenkaTech';
}
