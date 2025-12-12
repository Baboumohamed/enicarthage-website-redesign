import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container-custom section-padding">
      <h1 class="text-4xl md:text-5xl font-bold text-primary-900 dark:text-primary-50 mb-6">Contact Us</h1>
      <p class="text-lg text-primary-700 dark:text-primary-300">Coming soon...</p>
    </div>
  `,
  styles: []
})
export class ContactComponent {}
