import { Component, OnInit} from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { ItemCard } from '../item-card/item-card';
import { DesignProject } from '../shared/models/design-project.model';
import { FormsModule } from '@angular/forms';
import { Data } from '../../app/services/data'
import { AsyncPipe } from '@angular/common';
import { Observable, BehaviorSubject } from 'rxjs';
import { switchMap, debounceTime, distinctUntilChanged, startWith } from 'rxjs/operators';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-items-list',
  imports: [NgFor, ItemCard, FormsModule, AsyncPipe, RouterModule, CommonModule],
  standalone: true,
  templateUrl: './items-list.html',
  styleUrls: ['./items-list.css'],
})
export class ItemsList implements OnInit {
  searchText: string = '';
  designProjects$!: Observable<DesignProject[]>;

  
  constructor(public data: Data) {}

  onSearch(term: string): void {
    this.data.getFilteredProject(term);
  }

  ngOnInit() {
    this.designProjects$ = this.data.designProjects$;
    this.data.getItems();
  }
}
