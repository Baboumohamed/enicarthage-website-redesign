import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterLink, LucideAngularModule],
  template: `
    <div class="min-h-screen flex items-center justify-center bg-primary-50 dark:bg-primary-900">
      <div class="container-custom text-center py-20">
        <lucide-icon name="AlertTriangle" class="w-24 h-24 text-accent-600 dark:text-accent-400 mx-auto mb-6"></lucide-icon>
        <h1 class="text-6xl font-bold text-primary-900 dark:text-primary-50 mb-4">404</h1>
        <h2 class="text-3xl font-semibold text-primary-700 dark:text-primary-300 mb-4">Page Not Found</h2>
        <p class="text-lg text-primary-600 dark:text-primary-400 mb-8 max-w-md mx-auto">
          Sorry, the page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        <a
          routerLink="/"
          class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-600 hover:bg-accent-700 text-white rounded-lg font-semibold transition-all duration-250 hover:scale-105 active:scale-95"
        >
          Back to Home
          <lucide-icon name="ArrowRight" class="w-5 h-5"></lucide-icon>
        </a>
      </div>
    </div>
  `,
  styles: []
})
export class NotFoundComponent {}
