import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Data } from '../../services/data';
import { CommonModule } from '@angular/common';
import { DesignProject } from '../../shared/models/design-project.model';

@Component({
  selector: 'app-item-form',
  imports: [CommonModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './item-form.html',
  styleUrl: './item-form.css',
})
export class ItemForm {
  constructor(private data: Data) {}

  public newProject = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', [Validators.required, Validators.minLength(100)]),
    tools: new FormControl('', Validators.required),
    imageUrl: new FormControl('', Validators.required),
    special: new FormControl(false),
    short_sub: new FormControl('', [Validators.required, Validators.minLength(10)]),
    price: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });

  onSubmit() {
    if (this.newProject.valid) {
      const formValue = this.newProject.value;

      const newProject: DesignProject = {
        id: Date.now().toString(),
        title: formValue.title!,
        description: formValue.description!,
        tools: formValue.tools
          ? typeof formValue.tools === 'string'
            ? formValue.tools.split(',').map((t) => t.trim())
            : formValue.tools
          : [],
        imageUrl: formValue.imageUrl!,
        special: formValue.special!,
        short_sub: formValue.short_sub!,
        price: formValue.price!.toUpperCase(),
      };

      this.data.addItem(newProject).subscribe(() => {
        alert('The item was added successfully');
        this.newProject.reset();
      });
    } else {
      this.newProject.markAllAsTouched();
    }
  }
}
