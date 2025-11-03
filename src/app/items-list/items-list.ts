import { Component} from '@angular/core';
import { NgFor } from '@angular/common';
import { ItemCard } from '../item-card/item-card';
import { DesignProject } from '../shared/models/design-project.model';
import { FormsModule } from '@angular/forms';
import { Data } from '../../app/services/data'
import { AsyncPipe } from '@angular/common';
import { Observable} from 'rxjs';


@Component({
  selector: 'app-items-list',
  imports: [NgFor, ItemCard, FormsModule, AsyncPipe],
  standalone: true,
  templateUrl: './items-list.html',
  styleUrls: ['./items-list.css'],
})
export class ItemsList {
  searchText: string = '';
  designProjects$!: Observable<DesignProject[]>

  constructor(public data: Data) {
    this.designProjects$ = this.data.designProjects$;
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
}
