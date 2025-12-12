import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DataService } from '../../services/data.service';

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
  imports: [CommonModule, RouterLink],
  template: `
    <!-- Hero Section - Dark Gradient -->
    <section class="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
      <!-- Animated Background Elements -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0 animate-pulse-slow" style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 40px 40px;"></div>
      </div>
      <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-3xl animate-float-delayed"></div>
      
      <!-- Floating Elements -->
      <div class="absolute top-20 left-20 w-4 h-4 bg-blue-400 rounded-full animate-bounce opacity-60"></div>
      <div class="absolute bottom-32 right-40 w-3 h-3 bg-blue-300 rounded-full animate-ping opacity-40"></div>
      
      <div class="relative z-10 container mx-auto px-6 lg:px-16 text-center">
        <span class="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-blue-300 text-sm font-medium rounded-full mb-6 border border-white/20 animate-fade-in">
          Restez informé
        </span>
        <h1 class="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight animate-fade-in-up">
          Actualités
        </h1>
        <p class="text-xl text-blue-100/80 max-w-2xl mx-auto animate-fade-in-delayed">
          Les dernières nouvelles et annonces de l'ENICarthage
        </p>
      </div>
    </section>

    <main class="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div class="container mx-auto px-6 lg:px-16">
        
        <!-- Category Filters -->
        <div class="flex flex-wrap justify-center gap-3 mb-16">
          <button 
            (click)="selectedCategory = ''"
            [class]="selectedCategory === '' ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/25' : 'bg-white text-gray-600 border border-gray-200 hover:border-blue-300'"
            class="px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
          >
            Tous
          </button>
          <button 
            *ngFor="let category of categories"
            (click)="selectedCategory = category"
            [class]="selectedCategory === category ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/25' : 'bg-white text-gray-600 border border-gray-200 hover:border-blue-300'"
            class="px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
          >
            {{ category }}
          </button>
        </div>

        <!-- News Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article 
            *ngFor="let article of filteredNews; let i = index"
            class="group cursor-pointer"
            [style.animation-delay]="(i % 3) * 100 + 'ms'"
          >
            <div class="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 group-hover:border-blue-200">
              <!-- Image -->
              <div class="relative h-56 overflow-hidden">
                <img 
                  [src]="'assets/images/' + getNewsImage(i)"
                  [alt]="article.title"
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div class="absolute bottom-4 left-4">
                  <span class="px-3 py-1.5 bg-white/95 backdrop-blur-sm text-blue-600 text-xs font-semibold rounded-full shadow-sm">
                    {{ article.category }}
                  </span>
                </div>
              </div>

              <!-- Content -->
              <div class="p-6">
                <div class="flex items-center gap-2 text-gray-400 text-sm mb-3">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  {{ formatDate(article.date) }}
                </div>
                
                <h3 class="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-3 line-clamp-2">
                  {{ article.title }}
                </h3>

                <p class="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-4">
                  {{ article.description }}
                </p>

                <a 
                  [routerLink]="['/news', article.id]"
                  class="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:gap-3 transition-all"
                >
                  Lire l'article
                  <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          </article>
        </div>

        <!-- No Results -->
        <div *ngIf="filteredNews.length === 0" class="text-center py-20">
          <div class="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
            <svg class="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-slate-900 mb-2">Aucun article trouvé</h3>
          <p class="text-gray-500">Aucun article ne correspond à votre sélection.</p>
        </div>
      </div>
    </main>

    <!-- Newsletter Section - Outside main, merges with footer -->
    <section class="py-20 bg-slate-900 relative overflow-hidden">
        <div class="absolute inset-0 opacity-5">
          <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 32px 32px;"></div>
        </div>
        <div class="absolute top-0 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div class="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-float-delayed"></div>
        
        <div class="container mx-auto px-6 lg:px-16 relative z-10 text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Abonnez-vous à nos Actualités</h2>
          <p class="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Recevez directement dans votre boîte email les dernières nouvelles de l'ENICarthage
          </p>
          
          <form (ngSubmit)="onNewsletterSubmit($event)" class="max-w-lg mx-auto flex flex-col sm:flex-row gap-3">
            <input 
              type="email"
              placeholder="Votre adresse email"
              required
              class="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:bg-white/15"
            />
            <button 
              type="submit"
              class="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 flex items-center justify-center gap-2 group"
            >
              S'abonner
              <svg class="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
              </svg>
            </button>
          </form>
        </div>
      </section>
  `,
  styles: [`
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }
    
    @keyframes float-delayed {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-15px); }
    }
    
    @keyframes fade-in {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    @keyframes fade-in-up {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes pulse-slow {
      0%, 100% { opacity: 0.1; }
      50% { opacity: 0.15; }
    }
    
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
    
    .animate-float-delayed {
      animation: float-delayed 8s ease-in-out infinite;
      animation-delay: 1s;
    }
    
    .animate-fade-in {
      animation: fade-in 0.8s ease-out forwards;
    }
    
    .animate-fade-in-up {
      animation: fade-in-up 0.8s ease-out forwards;
    }
    
    .animate-fade-in-delayed {
      animation: fade-in-up 1s ease-out forwards;
      animation-delay: 0.3s;
      opacity: 0;
    }
    
    .animate-pulse-slow {
      animation: pulse-slow 4s ease-in-out infinite;
    }
    
    .line-clamp-2 {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    
    .line-clamp-3 {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  `]
})
export class NewsComponent implements OnInit {
  newsItems: NewsItem[] = [];
  selectedCategory = '';
  categories: string[] = [];

  get filteredNews(): NewsItem[] {
    if (!this.selectedCategory) {
      return this.newsItems;
    }
    return this.newsItems.filter(news => news.category === this.selectedCategory);
  }

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getNews().subscribe((news: NewsItem[]) => {
      this.newsItems = news.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      const cats = new Set(news.map(n => n.category));
      this.categories = Array.from(cats).sort();
    });
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
      'campus-building.png',
      'students-learning.png',
      'engineering-lab.png'
    ];
    return newsImages[index % newsImages.length];
  }

  onNewsletterSubmit(event: Event): void {
    event.preventDefault();
    alert('Merci pour votre inscription à notre newsletter!');
  }
}
