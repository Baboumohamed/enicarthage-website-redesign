import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DataService } from '../../services/data.service';

declare const AOS: any;

interface SlideData {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

interface NewsItem {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
  category: string;
}

interface EventItem {
  id: string;
  title: string;
  date: string;
  location: string;
  startTime: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <!-- Hero Section -->
    <section class="relative h-[500px] lg:h-[550px] overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 40px 40px;"></div>
      </div>
      
      <!-- Slider -->
      <div class="relative w-full h-full">
        <div 
          *ngFor="let slide of slides; let i = index"
          class="absolute inset-0 transition-opacity duration-700"
          [class.opacity-100]="currentSlide === i"
          [class.opacity-0]="currentSlide !== i"
        >
          <!-- Background Image with Overlay -->
          <div 
            class="absolute inset-0 bg-cover bg-center"
            [style.backgroundImage]="'url(/assets/images/' + getSlideImage(i) + ')'"
          >
            <div class="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40"></div>
          </div>
          
          <!-- Content -->
          <div class="relative z-10 h-full flex items-center">
            <div class="container mx-auto px-6 lg:px-16">
              <div class="max-w-2xl" data-aos="fade-up">
                <span class="inline-block px-4 py-1.5 bg-blue-500/20 text-blue-300 text-xs font-medium rounded-full mb-4 backdrop-blur-sm border border-blue-400/20">
                  École Nationale d'Ingénieurs de Carthage
                </span>
                <h1 class="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4 leading-tight">
                  {{ slide.title }}
                </h1>
                <p class="text-lg text-white/70 mb-8 leading-relaxed">
                  {{ slide.subtitle }}
                </p>
                <div class="flex flex-wrap gap-4">
                  <a 
                    routerLink="/academics" 
                    class="group inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-full transition-all duration-300 shadow-lg shadow-blue-500/25"
                  >
                    Découvrir nos formations
                    <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  <a 
                    routerLink="/contact" 
                    class="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20"
                  >
                    Nous contacter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Slider Controls -->
      <div class="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/10">
        <button (click)="prevSlide()" class="p-1.5 hover:bg-white/10 rounded-full transition-colors">
          <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        <div class="flex gap-2">
          <button 
            *ngFor="let s of slides; let i = index"
            (click)="goToSlide(i)"
            class="w-2 h-2 rounded-full transition-all duration-300"
            [class.bg-white]="currentSlide === i"
            [class.w-6]="currentSlide === i"
            [class.bg-white/40]="currentSlide !== i"
          ></button>
        </div>
        <button (click)="nextSlide()" class="p-1.5 hover:bg-white/10 rounded-full transition-colors">
          <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </section>

    <!-- Quick Stats Bar -->
    <section class="bg-white border-b border-gray-100">
      <div class="container mx-auto px-6 lg:px-16">
        <div class="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
          <div *ngFor="let stat of quickStats" class="py-8 px-6 text-center group cursor-default">
            <div class="text-3xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{{ stat.value }}</div>
            <div class="text-sm text-gray-500 mt-1">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content: News + Agenda -->
    <section class="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div class="container mx-auto px-6 lg:px-16">
        
        <!-- Apple-style centered header -->
        <div class="text-center mb-16" data-aos="fade-up">
          <h2 class="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">À la une</h2>
          <p class="text-xl text-gray-500">Dernières actualités de l'école</p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-[2fr_auto_1fr] gap-6 lg:gap-8">
          
          <!-- News Section -->
          <div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <article 
                *ngFor="let news of featuredNews; let i = index" 
                class="group cursor-pointer"
                data-aos="fade-up"
                [attr.data-aos-delay]="i * 100"
              >
                <div class="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                  <!-- Image Container with Gradient Overlay -->
                  <div class="relative h-48 overflow-hidden">
                    <img 
                      [src]="'/assets/images/' + getNewsImage(i)" 
                      [alt]="news.title"
                      class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    <div class="absolute bottom-4 left-4">
                      <span class="px-3 py-1.5 bg-white/95 backdrop-blur-sm text-blue-600 text-xs font-semibold rounded-full shadow-sm">
                        {{ news.category }}
                      </span>
                    </div>
                  </div>
                  
                  <!-- Content -->
                  <div class="p-6">
                    <div class="flex items-center gap-2 text-gray-400 text-sm mb-3">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                      {{ formatDate(news.date) }}
                    </div>
                    <h3 class="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-3 line-clamp-2">
                      {{ news.title }}
                    </h3>
                    <p class="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4">{{ news.description }}</p>
                    <a 
                      [routerLink]="['/news', news.id]" 
                      class="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:gap-3 transition-all"
                    >
                      Lire l'article
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            </div>
            
            <!-- View All Button -->
            <div class="text-center mt-10">
              <a 
                routerLink="/news" 
                class="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-medium rounded-full hover:bg-slate-800 transition-all hover:scale-105 hover:shadow-xl"
              >
                Voir toutes les actualités
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>
            </div>
          </div>

          <!-- Smart Divider between News and Agenda -->
          <div class="hidden lg:flex flex-col items-center justify-center py-10">
            <!-- Top dot -->
            <div class="w-3 h-3 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shadow-lg shadow-blue-500/30"></div>
            <!-- Gradient line -->
            <div class="w-px flex-1 bg-gradient-to-b from-blue-400 via-blue-200 to-transparent my-2"></div>
            <!-- Center circle with icon -->
            <div class="w-10 h-10 rounded-full bg-white border-2 border-blue-100 flex items-center justify-center shadow-lg">
              <svg class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </div>
            <!-- Gradient line -->
            <div class="w-px flex-1 bg-gradient-to-b from-transparent via-blue-200 to-blue-400 my-2"></div>
            <!-- Bottom dot -->
            <div class="w-3 h-3 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shadow-lg shadow-blue-500/30"></div>
          </div>

          <!-- Agenda Sidebar -->
          <div>
            <div class="space-y-5">
              <!-- Calendar Date Card - Dynamic with animations -->
              <div 
                class="group bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 cursor-pointer hover:scale-[1.02]"
                data-aos="fade-left"
              >
                <div class="text-center py-10 px-6 relative">
                  <!-- Animated background pattern -->
                  <div class="absolute inset-0 opacity-10">
                    <div class="absolute inset-0 animate-pulse" style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 24px 24px;"></div>
                  </div>
                  <!-- Animated glow orbs -->
                  <div class="absolute top-0 right-0 w-32 h-32 bg-blue-500/30 rounded-full blur-2xl animate-pulse"></div>
                  <div class="absolute bottom-0 left-0 w-24 h-24 bg-blue-400/20 rounded-full blur-2xl animate-pulse" style="animation-delay: 0.5s;"></div>
                  
                  <div class="relative z-10">
                    <p class="text-blue-300 text-xs uppercase tracking-widest mb-2 group-hover:text-blue-200 transition-colors">{{ currentMonthName }}</p>
                    <p class="text-7xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">{{ currentDayOfMonth }}</p>
                    <p class="text-blue-200/60 text-sm group-hover:text-blue-200/80 transition-colors">{{ todayFormatted }}</p>
                  </div>
                  
                  <!-- Hover indicator -->
                  <div class="absolute bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span class="text-blue-300 text-xs">Voir l'agenda</span>
                  </div>
                </div>
              </div>
              
              <!-- All Events - Dynamic cards -->
              <div 
                *ngFor="let event of upcomingEvents; let i = index" 
                class="group cursor-pointer transform-gpu"
                data-aos="fade-left"
                [attr.data-aos-delay]="(i + 1) * 80"
              >
                <div class="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] border border-gray-100 hover:border-blue-200 p-5 flex items-center gap-4">
                  <!-- Date Badge - Animated -->
                  <div class="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex flex-col items-center justify-center group-hover:from-blue-500 group-hover:to-blue-600 transition-all duration-300 border border-blue-100 group-hover:border-blue-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg group-hover:shadow-blue-500/30">
                    <span class="text-xl font-bold text-blue-600 group-hover:text-white transition-colors duration-300">{{ getEventDayNum(event.date) }}</span>
                    <span class="text-[10px] uppercase tracking-wide text-blue-400 group-hover:text-white/80 transition-colors duration-300">{{ getEventMonth(event.date) }}</span>
                  </div>
                  
                  <!-- Content -->
                  <div class="flex-1 min-w-0">
                    <h4 class="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2 mb-1">
                      {{ event.title }}
                    </h4>
                    <p class="text-xs text-gray-400 flex items-center gap-1 group-hover:text-gray-500 transition-colors">
                      <svg class="w-3 h-3 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      {{ event.startTime }}
                    </p>
                  </div>
                  
                  <!-- Arrow - Animated -->
                  <svg class="w-5 h-5 text-gray-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>
              
              <!-- View All Button - Dynamic -->
              <a 
                routerLink="/events" 
                class="group flex items-center justify-center gap-2 py-4 text-blue-600 font-semibold text-sm hover:text-blue-700 transition-all"
              >
                <span>Voir tous les événements</span>
                <svg class="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Formations Section -->
    <section class="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 40px 40px;"></div>
      </div>
      <div class="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
      
      <div class="container mx-auto px-6 lg:px-16 relative z-10">
        <div class="text-center mb-12" data-aos="fade-up">
          <span class="inline-block px-4 py-1.5 bg-blue-500/20 text-blue-300 text-xs font-medium rounded-full mb-4 backdrop-blur-sm border border-blue-400/20">
            Programmes d'Excellence
          </span>
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Nos Formations</h2>
          <p class="text-blue-100/70 max-w-2xl mx-auto">Découvrez nos programmes d'excellence en ingénierie</p>
        </div>
        
        <!-- Tabs -->
        <div class="flex justify-center mb-10" data-aos="fade-up" data-aos-delay="100">
          <div class="inline-flex bg-white/10 backdrop-blur-sm rounded-full p-1 border border-white/10">
            <button 
              *ngFor="let tab of tabs"
              (click)="activeTab = tab.id"
              class="px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300"
              [class.bg-white]="activeTab === tab.id"
              [class.text-slate-800]="activeTab === tab.id"
              [class.shadow-lg]="activeTab === tab.id"
              [class.text-white/70]="activeTab !== tab.id"
              [class.hover:text-white]="activeTab !== tab.id"
            >
              {{ tab.label }}
            </button>
          </div>
        </div>

        <!-- Formation Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-aos="fade-up" data-aos-delay="200">
          <a 
            *ngFor="let formation of getActiveFormations(); let i = index"
            [routerLink]="formation.link"
            class="group bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-blue-400/50 hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
          >
            <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-transparent rounded-bl-full -mr-4 -mt-4 opacity-50 group-hover:opacity-100 transition-opacity"></div>
            
            <div class="w-12 h-12 bg-blue-500/30 group-hover:bg-blue-500 rounded-xl flex items-center justify-center mb-4 transition-colors border border-blue-400/30">
              <svg class="w-6 h-6 text-blue-300 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors mb-2">
              {{ formation.title }}
            </h3>
            <p class="text-sm text-white/60 mb-4">{{ formation.subtitle }}</p>
            <span class="inline-flex items-center gap-1 text-blue-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              En savoir plus
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>

    <!-- Partners Section -->
    <section class="py-20 bg-gradient-to-b from-slate-100 to-white relative">
      <div class="container mx-auto px-6 lg:px-16">
        <div class="text-center mb-12" data-aos="fade-up">
          <span class="inline-block px-4 py-1.5 bg-blue-100 text-blue-600 text-xs font-medium rounded-full mb-4">
            Ils nous font confiance
          </span>
          <h2 class="text-2xl md:text-3xl font-bold text-slate-800 mb-3">Nos Partenaires</h2>
          <p class="text-gray-500">Entreprises et institutions qui nous font confiance</p>
        </div>
        
        <div class="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12" data-aos="fade-up" data-aos-delay="100">
          <div class="flex flex-wrap justify-center items-center gap-10 md:gap-14 lg:gap-20">
            <div 
              *ngFor="let partner of partners; let i = index" 
              class="group"
            >
              <img 
                [src]="'/assets/images/' + getPartnerImage(i)" 
                [alt]="partner"
                class="h-12 md:h-16 w-auto object-contain group-hover:scale-110 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="py-20 bg-slate-900 relative overflow-hidden">
      <!-- Background decoration -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 32px 32px;"></div>
      </div>
      <div class="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div class="container mx-auto px-6 lg:px-16 relative z-10">
        <div class="max-w-3xl mx-auto text-center" data-aos="fade-up">
          <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/25">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </div>
          <h2 class="text-2xl md:text-3xl font-bold text-white mb-3">Restez informé</h2>
          <p class="text-gray-400 mb-8">Inscrivez-vous à notre newsletter pour recevoir les dernières actualités</p>
          
          <form class="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" (submit)="onNewsletterSubmit($event)">
            <input 
              type="email" 
              placeholder="Votre adresse email"
              class="flex-1 px-5 py-3.5 bg-white/5 border border-white/10 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 backdrop-blur-sm transition-colors"
              required
            >
            <button 
              type="submit"
              class="px-8 py-3.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-full hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg shadow-blue-500/25"
            >
              S'abonner
            </button>
          </form>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .line-clamp-2 {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  `]
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  // Slider
  currentSlide = 0;
  slides: SlideData[] = [
    { title: 'Bienvenue à l\'ENICarthage', subtitle: 'Former les ingénieurs de demain avec excellence et innovation', backgroundImage: '' },
    { title: 'Formations d\'Excellence', subtitle: 'Cycles Ingénieurs, Mastères et Doctorat en partenariat avec l\'industrie', backgroundImage: '' },
    { title: 'Recherche & Innovation', subtitle: 'Laboratoires de pointe et projets de recherche internationaux', backgroundImage: '' },
    { title: 'Ouverture Internationale', subtitle: 'Partenariats avec les meilleures universités mondiales', backgroundImage: '' }
  ];
  private slideInterval: any;

  // Quick Stats
  quickStats = [
    { value: '2500+', label: 'Étudiants' },
    { value: '150+', label: 'Enseignants' },
    { value: '8', label: 'Formations' },
    { value: '20+', label: 'Partenaires' }
  ];

  // Tabs
  activeTab = 'formations';
  tabs = [
    { id: 'formations', label: 'Formations' },
    { id: 'recherche', label: 'Recherche' },
    { id: 'cooperations', label: 'Coopérations' }
  ];

  // Data
  featuredNews: NewsItem[] = [];
  upcomingEvents: EventItem[] = [];
  formations: any[] = [];
  recherche: any[] = [];
  cooperations: any[] = [];
  partners: string[] = [];

  // Calendar
  currentMonthName = '';
  currentYear = 0;
  todayFormatted = '';
  currentDayOfMonth = '';

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    const now = new Date();
    this.currentMonthName = now.toLocaleDateString('fr-FR', { month: 'long' });
    this.currentYear = now.getFullYear();
    this.todayFormatted = now.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' });
    this.currentDayOfMonth = now.getDate().toString().padStart(2, '0');

    this.loadData();
    this.startSlideshow();
  }

  ngAfterViewInit(): void {
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 600,
        once: true,
        offset: 50
      });
    }
  }

  ngOnDestroy(): void {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  private loadData(): void {
    this.dataService.getHomePage().subscribe((data: any) => {
      this.formations = data.formations || [];
      this.recherche = data.recherche || [];
      this.cooperations = data.cooperations || [];
      this.partners = data.partners?.map((p: any) => p.name) || [];
    });

    this.dataService.getNews().subscribe((news: any[]) => {
      this.featuredNews = news.slice(0, 3);
    });

    this.dataService.getEvents().subscribe((events: any[]) => {
      this.upcomingEvents = events.slice(0, 3);
    });
  }

  // Slider methods
  startSlideshow(): void {
    this.slideInterval = setInterval(() => this.nextSlide(), 5000);
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide(): void {
    this.currentSlide = this.currentSlide === 0 ? this.slides.length - 1 : this.currentSlide - 1;
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
      this.startSlideshow();
    }
  }

  // Get active formations based on tab
  getActiveFormations(): any[] {
    switch (this.activeTab) {
      case 'recherche': return this.recherche;
      case 'cooperations': return this.cooperations;
      default: return this.formations.slice(0, 4);
    }
  }

  getFormationIcon(): string {
    switch (this.activeTab) {
      case 'recherche': return 'FlaskConical';
      case 'cooperations': return 'Handshake';
      default: return 'GraduationCap';
    }
  }

  // Date formatting
  formatDate(dateStr: string): string {
    const date = new Date(dateStr);
    return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' });
  }

  getEventDay(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString('fr-FR', { weekday: 'short' }).slice(0, 3);
  }

  getEventDayNum(dateStr: string): string {
    return new Date(dateStr).getDate().toString().padStart(2, '0');
  }

  getEventMonth(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString('fr-FR', { month: 'short' }).slice(0, 3);
  }

  // Newsletter
  onNewsletterSubmit(event: Event): void {
    event.preventDefault();
    alert('Merci pour votre inscription!');
  }

  // Image mappings
  getSlideImage(index: number): string {
    const slides = ['banner1.jpg', 'banner2.png', 'banner3.jpg', 'banner4.jpg'];
    return slides[index % slides.length];
  }

  getNewsImage(index: number): string {
    const images = [
      'news-furniture.jpg',
      'news-electronics.jpg',
      'news-research-lab.jpg'
    ];
    return images[index % images.length];
  }

  getPartnerImage(index: number): string {
    const images = [
      '7b3d1d0c579522df79c73925f5ee39a6935a0584.jpg',
      'c7f5bcb9e97167613fe39e45bc5051fc8d8d9e47.jpg',
      '4650d9e333eb912dfdfa08324cba17d85ce4d30d.jpg',
      '45aeaa1e639a7646fa49b7316f6c38e7f561aa98.jpg',
      'd200ab81927042f9f33b655936d83c508c5df538.jpg',
      '77371d4962181a4ff04cdb34aee9ccfc158ef5ab.jpg',
      '533e8a071cfcd2fec7690b17657d998b48a2edb0.jpg',
      '3d0191b149e945ead2c338d021d0da9c9bfc1f96.jpg'
    ];
    return images[index % images.length];
  }
}
