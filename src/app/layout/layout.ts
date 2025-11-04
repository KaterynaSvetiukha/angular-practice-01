import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // імпортуємо RouterOutlet
import { ItemsList } from '../items-list/items-list';
import { Header } from './header/header';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.html',
  styleUrls: ['./layout.css'],
  standalone: true,
  imports: [RouterOutlet, ItemsList, Header, Footer]
})
export class LayoutComponent {
}
