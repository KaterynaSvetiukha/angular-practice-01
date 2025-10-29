import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Data } from '../../services/data';
import { DesignProject } from '../../shared/models/design-project.model';

@Component({
  selector: 'app-item-details',
  imports: [RouterModule, CommonModule],
  standalone: true,
  templateUrl: './item-details.html',
  styleUrl: './item-details.css',
})
export class ItemDetails implements OnInit {
  project?: DesignProject;

  constructor(private route: ActivatedRoute, private dataService: Data) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.dataService.designProjects$.subscribe((progects) => {
        this.project = progects.find(p => p.id === id);
      })
    }
  }
}
