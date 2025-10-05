import { Component, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignProject } from '../shared/models/design-project.model';
import { Input, Output } from '@angular/core';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-card.html',
  styleUrls: ['./item-card.css']
})
export class ItemCard {
  @Input() project!: DesignProject;

  @Output() selectProject: EventEmitter<DesignProject> = new EventEmitter<DesignProject>();
  
  onSelect() {
    this.selectProject.emit(this.project);
  }
}
