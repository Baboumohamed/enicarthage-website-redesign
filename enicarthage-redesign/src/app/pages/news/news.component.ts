import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DataService } from '../../services/data.service';
import { LucideAngularModule } from 'lucide-angular';

declare const AOS: any;

interface NewsItem {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
  category: string;
}

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, RouterLink, LucideAngularModule],
  template: `
    <!-- Hero Section -->
    <section class="relative h-80 bg-cover bg-center overflow-hidden" style="background-image: url('assets/images/b8aa6b34f2afdeac45d507b195eef67b9adf3822.jpg')">
      <div class="absolute inset-0 bg-black/50"></div>
      <div class="relative z-10 container mx-auto px-4 lg:px-8 h-full flex items-center">
        <div>
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">Actualités</h1>
          <p class="text-xl text-white/90">Restez informé des dernières nouvelles de l'ENICarthage</p>
        </div>
      </div>
    </section>

    <!-- Content -->
    <main class="py-16">
      <div class="container mx-auto px-4 lg:px-8">
        <!-- Filters -->
        <div class="mb-12 flex flex-wrap gap-3" data-aos="fade-up">
          <button 
            (click)="selectedCategory = ''"
            [class.bg-accent-500]="selectedCategory === ''"
            [class.text-white]="selectedCategory === ''"
            [class.bg-gray-100]="selectedCategory !== ''"
            [class.text-gray-700]="selectedCategory !== ''"
            class="px-6 py-2 rounded-full font-semibold transition-colors"
          >
            Tous
          </button>
          <button 
            *ngFor="let category of categories"
            (click)="selectedCategory = category"
            [class.bg-accent-500]="selectedCategory === category"
            [class.text-white]="selectedCategory === category"
            [class.bg-gray-100]="selectedCategory !== category"
            [class.text-gray-700]="selectedCategory !== category"
            class="px-6 py-2 rounded-full font-semibold transition-colors"
          >
            {{ category }}
          </button>
        </div>

        <!-- News Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article 
            *ngFor="let article of filteredNews; let i = index"
            class="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            [attr.data-aos]="'fade-up'"
            [attr.data-aos-delay]="i * 100"
          >
            <!-- Image -->
            <div class="overflow-hidden relative h-48">
              <img 
                [src]="'assets/images/' + getNewsImage(i)"
                [alt]="article.title"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div class="absolute top-4 right-4">
                <span class="inline-block px-3 py-1 bg-accent-500 text-white text-xs font-bold rounded-full">
                  {{ article.category }}
                </span>
              </div>
            </div>

            <!-- Content -->
            <div class="p-6">
              <p class="text-sm text-gray-500 mb-2 flex items-center gap-2">
                <lucide-icon name="Calendar" class="w-4 h-4"></lucide-icon>
                {{ formatDate(article.date) }}
              </p>
              
              <h3 class="text-xl font-bold text-enic-primary mb-3 group-hover:text-accent-500 transition-colors line-clamp-2">
                {{ article.title }}
              </h3>

              <p class="text-gray-600 mb-4 line-clamp-3">
                {{ article.description }}
              </p>

              <a 
                [routerLink]="['/news', article.id]"
                class="inline-flex items-center gap-2 text-accent-500 hover:text-accent-600 font-semibold transition-colors"
              >
                Lire l'article
                <lucide-icon name="ArrowRight" class="w-4 h-4"></lucide-icon>
              </a>
            </div>
          </article>
        </div>

        <!-- No Results -->
        <div *ngIf="filteredNews.length === 0" class="text-center py-16" data-aos="fade-up">
          <lucide-icon name="Search" class="w-16 h-16 text-gray-300 mx-auto mb-4"></lucide-icon>
          <h3 class="text-2xl font-bold text-gray-700 mb-2">Aucun article trouvé</h3>
          <p class="text-gray-600">Aucun article ne correspond à votre recherche.</p>
        </div>
      </div>

      <!-- CTA Section -->
      <section class="bg-enic-primary/10 py-16 mt-16 border-t border-gray-200">
        <div class="container mx-auto px-4 lg:px-8 text-center" data-aos="fade-up">
          <h2 class="text-3xl font-bold text-enic-primary mb-6">Abonnez-vous à nos Actualités</h2>
          <p class="text-lg text-gray-700 mb-8">Recevez directement dans votre boîte email les dernières nouvelles de l'ENICarthage</p>
          <form (ngSubmit)="onNewsletterSubmit($event)" class="max-w-md mx-auto flex gap-2">
            <input 
              type="email"
              placeholder="Votre adresse email"
              required
              class="flex-1 px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500"
            />
            <button 
              type="submit"
              class="px-8 py-3 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition-colors flex items-center gap-2"
            >
              S'abonner
              <lucide-icon name="Send" class="w-4 h-4"></lucide-icon>
            </button>
          </form>
        </div>
      </section>
    </main>
  `,
  styles: []
})
export class NewsComponent implements OnInit, AfterViewInit {
  newsItems: NewsItem[] = [];
  selectedCategory = '';
  categories: string[] = [];

  get filteredNews(): NewsItem[] {
    if (!this.selectedCategory) {
      return this.newsItems;
    }
    return this.newsItems.filter(news => news.category === this.selectedCategory);
  }

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getNews().subscribe((news: NewsItem[]) => {
      this.newsItems = news.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      
      // Extract unique categories
      const cats = new Set(news.map(n => n.category));
      this.categories = Array.from(cats).sort();
    });
  }

  ngAfterViewInit() {
    if (typeof AOS !== 'undefined') {
      AOS.refresh();
    }
  }

  formatDate(dateStr: string): string {
    const date = new Date(dateStr);
    const options: Intl.DateTimeFormatOptions = { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    };
    return date.toLocaleDateString('fr-FR', options);
  }

  getNewsImage(index: number): string {
    const newsImages = [
      '67eb17776772dd94d0c104cf056e48bdf208b542.jpg',
      '019353d6ff700d1192119e8e889d791e158f888d.jpg',
      'b8aa6b34f2afdeac45d507b195eef67b9adf3822.jpg'
    ];
    return newsImages[index % newsImages.length];
  }

  onNewsletterSubmit(event: Event): void {
    event.preventDefault();
    alert('Merci pour votre inscription à notre newsletter!');
  }
}
