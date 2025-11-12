import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Data } from '../../services/data';
import { DesignProject } from '../../shared/models/design-project.model';
import { take } from 'rxjs/operators';


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
      if (this.dataService['itemSubject'].getValue().length === 0) {
        this.dataService.getItems();
      }
        this.dataService.designProjects$
          .pipe(take(1))
          .subscribe((projects: DesignProject[]) => {
            this.project = projects.find((p: DesignProject) => p.id === id);
          });
    }
  }
}
