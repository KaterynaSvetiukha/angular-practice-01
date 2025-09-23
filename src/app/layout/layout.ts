import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // імпортуємо RouterOutlet
import { ItemsList } from '../items-list/items-list';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.html',
  styleUrls: ['./layout.css'],
  standalone: true, // standalone компонент
  imports: [RouterOutlet, ItemsList]
})
export class LayoutComponent {
  appTitle = 'Web-дизайн';
}
