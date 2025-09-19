import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // імпортуємо RouterOutlet

@Component({
  selector: 'app-layout',
  templateUrl: './layout.html',
  styleUrls: ['./layout.css'],
  standalone: true, // standalone компонент
  imports: [RouterOutlet] // додаємо сюди
})
export class LayoutComponent {
  appTitle = 'Web-дизайн';
}
