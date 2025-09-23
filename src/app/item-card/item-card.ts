import { Component } from '@angular/core';
import { DesignProject } from '../shared/models/design-project.model';
import { Input } from '@angular/core';

@Component({
  selector: 'app-item-card',
  imports: [],
  standalone: true,
  templateUrl: './item-card.html',
  styleUrl: './item-card.css'
})
export class ItemCard {
  @Input() project!: DesignProject;
}
