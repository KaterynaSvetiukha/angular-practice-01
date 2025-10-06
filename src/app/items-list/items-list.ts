import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { ItemCard } from '../item-card/item-card';
import { DesignProject } from '../shared/models/design-project.model';
import { FormsModule } from '@angular/forms';
import { Data } from '../../app/services/data'

@Component({
  selector: 'app-items-list',
  imports: [NgFor, ItemCard, ItemCard, FormsModule],
  standalone: true,
  templateUrl: './items-list.html',
  styleUrl: './items-list.css',
})
export class ItemsList implements OnInit {
  searchText: string = '';

  designProjects: DesignProject[] = [];

  constructor(private data: Data) {}

  ngOnInit(): void {
    this.designProjects = this.data.getItems();
  }

  onProjectSelected(project: DesignProject) {
    console.log('Chose project:', project);
  }

  getFilteredProject():DesignProject[] {
    const text = this.searchText.toLowerCase();

    return this.designProjects.filter(
      (project) =>
        project.title.toLowerCase().includes(text) ||
        project.description.toLowerCase().includes(text)
    );
  }
}
