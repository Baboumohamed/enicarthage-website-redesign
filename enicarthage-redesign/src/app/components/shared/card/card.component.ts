import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

export type CardVariant = 'news' | 'event' | 'department' | 'service' | 'basic';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, RouterLink, LucideAngularModule],
  template: `
    <div class="card-base p-6 rounded-lg overflow-hidden group hover:shadow-lg transition-all duration-300 h-full flex flex-col">
      <!-- Image -->
      <div *ngIf="image" class="mb-4 overflow-hidden rounded-lg">
        <img
          [src]="image"
          [alt]="title"
          class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <!-- Icon (for services/departments) -->
      <div *ngIf="icon && !image" class="mb-4 text-blue-600 dark:text-blue-400">
        <lucide-icon [name]="icon" class="w-8 h-8"></lucide-icon>
      </div>

      <!-- Badge (for events/news) -->
      <div *ngIf="badge" class="mb-3">
        <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100">
          {{ badge }}
        </span>
      </div>

      <!-- Title -->
      <h3 class="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-250">
        {{ title }}
      </h3>

      <!-- Metadata (for news/events) -->
      <div *ngIf="meta" class="flex items-center gap-4 mb-3 text-sm text-slate-600 dark:text-slate-400">
        <span *ngIf="meta.date" class="flex items-center gap-1">
          <lucide-icon name="Calendar" class="w-4 h-4"></lucide-icon>
          {{ meta.date | date: 'MMM dd, yyyy' }}
        </span>
        <span *ngIf="meta.author" class="flex items-center gap-1">
          <lucide-icon name="User" class="w-4 h-4"></lucide-icon>
          {{ meta.author }}
        </span>
      </div>

      <!-- Description -->
      <p class="text-slate-700 dark:text-slate-300 text-sm mb-4 flex-grow line-clamp-3">
        {{ description }}
      </p>

      <!-- Stats (for departments) -->
      <div *ngIf="stats" class="grid grid-cols-2 gap-4 mb-4 py-4 border-t border-slate-200 dark:border-slate-700">
        <div *ngFor="let stat of stats" class="text-center">
          <p class="text-lg font-bold text-blue-600 dark:text-blue-400">{{ stat.value }}</p>
          <p class="text-xs text-slate-600 dark:text-slate-400">{{ stat.label }}</p>
        </div>
      </div>

      <!-- CTA Button -->
      <a
        *ngIf="ctaLabel && ctaLink"
        [routerLink]="ctaLink"
        class="inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-500 text-white rounded-lg font-medium transition-colors duration-250 text-sm mt-auto"
      >
        {{ ctaLabel }}
        <lucide-icon name="ArrowRight" class="w-4 h-4"></lucide-icon>
      </a>
    </div>
  `,
  styles: []
})
export class CardComponent {
  @Input() variant: CardVariant = 'basic';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() image?: string;
  @Input() icon?: string;
  @Input() badge?: string;
  @Input() ctaLabel?: string;
  @Input() ctaLink?: string;
  @Input() meta?: { date?: string; author?: string; location?: string };
  @Input() stats?: Array<{ label: string; value: string }>;
}
