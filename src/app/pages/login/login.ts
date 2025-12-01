import { Component } from '@angular/core';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ɵInternalFormsSharedModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {
  form!: FormGroup;
  errorMessage: string = '';

  createForm(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  constructor(private authService: Auth, private router: Router, private fb: FormBuilder) {
    this.createForm();
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.errorMessage = 'Please fill in the form correctly';
      return;
    }

    this.authService.login(this.form.value).subscribe({
      next: () => {
        this.router.navigate(['/']); // перенаправляем пользователя на главную страницу (/)
      },
      error: () => {
        this.errorMessage = 'Invalid email or password';
      },
    });
  }
}
