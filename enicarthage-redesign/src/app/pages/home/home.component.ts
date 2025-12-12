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
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-6 lg:px-16">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          <!-- News Section (2 columns) -->
          <div class="lg:col-span-2">
            <div class="flex items-center justify-between mb-8">
              <div>
                <h2 class="text-2xl font-semibold text-slate-800">À la une</h2>
                <p class="text-gray-500 text-sm mt-1">Dernières actualités de l'école</p>
              </div>
              <a routerLink="/news" class="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1 group">
                Voir tout
                <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            
            <div class="space-y-5">
              <article 
                *ngFor="let news of featuredNews; let i = index" 
                class="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group"
                data-aos="fade-up"
                [attr.data-aos-delay]="i * 100"
              >
                <div class="flex flex-col sm:flex-row">
                  <div class="sm:w-48 h-40 sm:h-auto overflow-hidden flex-shrink-0">
                    <img 
                      [src]="'/assets/images/' + getNewsImage(i)" 
                      [alt]="news.title"
                      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div class="flex-1 p-5">
                    <div class="flex items-center gap-3 mb-3">
                      <span class="px-2.5 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">{{ news.category }}</span>
                      <span class="text-gray-400 text-xs flex items-center gap-1">
                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                        {{ formatDate(news.date) }}
                      </span>
                    </div>
                    <h3 class="text-lg font-semibold text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-2 mb-2">
                      {{ news.title }}
                    </h3>
                    <p class="text-gray-500 text-sm line-clamp-2 mb-4">{{ news.description }}</p>
                    <a 
                      [routerLink]="['/news', news.id]" 
                      class="inline-flex items-center gap-1 text-blue-600 text-sm font-medium hover:gap-2 transition-all"
                    >
                      Lire la suite
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>

          <!-- Agenda Sidebar -->
          <div class="lg:col-span-1">
            <div class="bg-white rounded-2xl shadow-sm p-6 sticky top-24">
              <div class="flex items-center justify-between mb-6">
                <h2 class="text-xl font-semibold text-slate-800">Agenda</h2>
                <a routerLink="/events" class="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Voir tout
                </a>
              </div>
              
              <!-- Mini Calendar -->
              <div class="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-5 mb-6 text-center text-white">
                <p class="text-blue-200 text-sm uppercase tracking-wide">{{ currentMonthName }}</p>
                <p class="text-4xl font-bold my-1">{{ currentYear }}</p>
                <p class="text-blue-200 text-xs">{{ todayFormatted }}</p>
              </div>

              <!-- Events List -->
              <div class="space-y-4">
                <div 
                  *ngFor="let event of upcomingEvents; let i = index" 
                  class="flex gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group"
                  data-aos="fade-left"
                  [attr.data-aos-delay]="i * 50"
                >
                  <div class="flex-shrink-0 w-14 text-center">
                    <div class="bg-blue-50 group-hover:bg-blue-100 rounded-xl p-2 transition-colors">
                      <p class="text-xs text-blue-600 uppercase font-medium">{{ getEventDay(event.date) }}</p>
                      <p class="text-xl font-bold text-blue-700">{{ getEventDayNum(event.date) }}</p>
                      <p class="text-xs text-blue-500">{{ getEventMonth(event.date) }}</p>
                    </div>
                  </div>
                  <div class="flex-1 min-w-0">
                    <h4 class="text-sm font-medium text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {{ event.title }}
                    </h4>
                    <p class="text-xs text-gray-400 mt-1 flex items-center gap-1">
                      <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      {{ event.location }}
                    </p>
                    <p class="text-xs text-gray-400 mt-0.5 flex items-center gap-1">
                      <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      {{ event.startTime }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Formations Section -->
    <section class="py-20 bg-slate-50 relative overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute inset-0 opacity-[0.03]" style="background-image: radial-gradient(#3b82f6 1px, transparent 1px); background-size: 24px 24px;"></div>
      
      <div class="container mx-auto px-6 lg:px-16 relative z-10">
        <div class="text-center mb-12" data-aos="fade-up">
          <h2 class="text-3xl font-semibold text-slate-800 mb-3">Nos Formations</h2>
          <p class="text-gray-500 max-w-2xl mx-auto">Découvrez nos programmes d'excellence en ingénierie</p>
        </div>
        
        <!-- Tabs -->
        <div class="flex justify-center mb-10" data-aos="fade-up" data-aos-delay="100">
          <div class="inline-flex bg-gray-100 rounded-full p-1">
            <button 
              *ngFor="let tab of tabs"
              (click)="activeTab = tab.id"
              class="px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300"
              [class.bg-white]="activeTab === tab.id"
              [class.text-slate-800]="activeTab === tab.id"
              [class.shadow-sm]="activeTab === tab.id"
              [class.text-gray-500]="activeTab !== tab.id"
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
            class="group bg-white p-6 rounded-2xl border border-gray-100 hover:border-blue-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
          >
            <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-full -mr-4 -mt-4 opacity-50 group-hover:opacity-100 transition-opacity"></div>
            
            <div class="w-12 h-12 bg-blue-100 group-hover:bg-blue-500 rounded-xl flex items-center justify-center mb-4 transition-colors">
              <svg class="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-slate-800 group-hover:text-blue-600 transition-colors mb-2">
              {{ formation.title }}
            </h3>
            <p class="text-sm text-gray-500 mb-4">{{ formation.subtitle }}</p>
            <span class="inline-flex items-center gap-1 text-blue-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
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
    <section class="py-20 bg-white border-t border-gray-100">
      <div class="container mx-auto px-6 lg:px-16">
        <div class="text-center mb-10" data-aos="fade-up">
          <h2 class="text-2xl font-semibold text-slate-800 mb-2">Nos Partenaires</h2>
          <p class="text-gray-500 text-sm">Entreprises et institutions qui nous font confiance</p>
        </div>
        
        <div class="flex flex-wrap justify-center items-center gap-8 md:gap-14 lg:gap-20" data-aos="fade-up" data-aos-delay="100">
          <div 
            *ngFor="let partner of partners; let i = index" 
            class="group"
          >
            <img 
              [src]="'/assets/images/' + getPartnerImage(i)" 
              [alt]="partner"
              class="h-10 md:h-14 w-auto object-contain group-hover:scale-110 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
      <div class="container mx-auto px-6 lg:px-16">
        <div class="max-w-3xl mx-auto text-center" data-aos="fade-up">
          <svg class="w-12 h-12 text-white/80 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
          <h2 class="text-2xl md:text-3xl font-semibold text-white mb-3">Restez informé</h2>
          <p class="text-blue-100 mb-8">Inscrivez-vous à notre newsletter pour recevoir les dernières actualités</p>
          
          <form class="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" (submit)="onNewsletterSubmit($event)">
            <input 
              type="email" 
              placeholder="Votre adresse email"
              class="flex-1 px-5 py-3.5 bg-white/10 border border-white/20 rounded-full text-white placeholder-white/50 focus:outline-none focus:border-white/40 backdrop-blur-sm"
              required
            >
            <button 
              type="submit"
              class="px-8 py-3.5 bg-white text-blue-600 font-medium rounded-full hover:bg-blue-50 transition-colors shadow-lg"
            >
              S'abonner
            </button>
          </form>
        </div>
      </div>
    </section>

    <!-- Contact CTA Section -->
    <section class="py-20 bg-slate-900">
      <div class="container mx-auto px-6 lg:px-16">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 class="text-3xl font-semibold text-white mb-4">Besoin d'informations ?</h2>
            <p class="text-gray-400 mb-6 leading-relaxed">
              Notre équipe est à votre disposition pour répondre à toutes vos questions concernant nos formations, 
              les inscriptions ou la vie à l'ENICarthage.
            </p>
            <div class="space-y-4">
              <div class="flex items-center gap-4 text-gray-300">
                <div class="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <span>45 Rue des Entrepreneurs, Charguia II, Tunis</span>
              </div>
              <div class="flex items-center gap-4 text-gray-300">
                <div class="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <span>(+216) 71 940 699</span>
              </div>
              <div class="flex items-center gap-4 text-gray-300">
                <div class="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <span>contact&#64;enicarthage.rnu.tn</span>
              </div>
            </div>
          </div>
          
          <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10" data-aos="fade-left">
            <h3 class="text-xl font-semibold text-white mb-6">Envoyez-nous un message</h3>
            <form class="space-y-4">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Nom"
                  class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                >
                <input 
                  type="email" 
                  placeholder="Email"
                  class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                >
              </div>
              <input 
                type="text" 
                placeholder="Sujet"
                class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
              >
              <textarea 
                placeholder="Votre message"
                rows="4"
                class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
              ></textarea>
              <button 
                type="submit"
                class="w-full px-6 py-3.5 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-xl transition-colors"
              >
                Envoyer le message
              </button>
            </form>
          </div>
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

    constructor(private dataService: DataService) { }

    ngOnInit(): void {
        const now = new Date();
        this.currentMonthName = now.toLocaleDateString('fr-FR', { month: 'long' });
        this.currentYear = now.getFullYear();
        this.todayFormatted = now.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' });

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
