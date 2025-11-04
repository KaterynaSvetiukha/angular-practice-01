import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Data } from '../../services/data';
import { CommonModule } from '@angular/common';

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
    imageUrl: new FormControl('', Validators.required),
    special: new FormControl(false),
    short_sub: new FormControl('', [Validators.required, Validators.minLength(10)]),
    price: new FormControl('', [Validators.required, Validators.minLength(1)]),
  });

  onSubmit() {
    if (this.newProject.valid) {
      this.data.addItem(this.newProject.value);
      alert('The item was added successfully');
      this.newProject.reset();
    } else {
      this.newProject.markAllAsTouched();
    }
  }
}
