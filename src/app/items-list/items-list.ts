import { Component, OnInit, OnDestroy} from '@angular/core';
import { NgFor } from '@angular/common';
import { ItemCard } from '../item-card/item-card';
import { DesignProject } from '../shared/models/design-project.model';
import { FormsModule } from '@angular/forms';
import { Data } from '../../app/services/data'
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-items-list',
  imports: [NgFor, ItemCard, FormsModule],
  standalone: true,
  templateUrl: './items-list.html',
  styleUrls: ['./items-list.css'],
})
export class ItemsList implements OnInit, OnDestroy {
  searchText: string = '';

  designProjects: DesignProject[] = [];

  private sub!: Subscription;

  constructor(public data: Data) {}

  ngOnInit(): void {
    this.sub = this.data.designProjects$.subscribe((projects) => {
      this.designProjects = projects;
    });
  }

  onProjectSelected(project: DesignProject) {
    console.log('Chose project:', project);
  }

  // getFilteredProject():DesignProject[] {
  //   const text = this.searchText.toLowerCase();

  //   return this.designProjects.filter(
  //     (project) =>
  //       project.title.toLowerCase().includes(text) ||
  //       project.description.toLowerCase().includes(text)
  //   );
  // }

  onSearch(term: string): void {
    this.data.getFilteredProject(term);
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
