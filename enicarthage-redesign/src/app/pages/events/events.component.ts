import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DataService } from '../../services/data.service';

declare const AOS: any;

interface EventItem {
  id: string;
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  location: string;
  description: string;
}

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <!-- Hero Section -->
    <section class="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 40px 40px;"></div>
      </div>
      <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-3xl"></div>
      
      <div class="relative z-10 container mx-auto px-6 lg:px-16 text-center">
        <span class="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-blue-300 text-sm font-medium rounded-full mb-6 border border-white/20" data-aos="fade-up">
          Calendrier
        </span>
        <h1 class="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight" data-aos="fade-up" data-aos-delay="100">
          Agenda
        </h1>
        <p class="text-xl text-blue-100/80 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          Événements et dates importantes de l'ENICarthage
        </p>
      </div>
    </section>

    <main class="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div class="container mx-auto px-6 lg:px-16">
        
        <!-- Current Month Card -->
        <div class="max-w-md mx-auto mb-16" data-aos="fade-up">
          <div class="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 rounded-3xl p-10 text-center relative overflow-hidden shadow-2xl">
            <div class="absolute inset-0 opacity-10">
              <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 24px 24px;"></div>
            </div>
            <div class="absolute top-0 right-0 w-32 h-32 bg-blue-500/30 rounded-full blur-2xl animate-pulse"></div>
            <div class="relative z-10">
              <p class="text-blue-300 text-sm uppercase tracking-widest mb-2">{{ currentMonthName }}</p>
              <p class="text-8xl font-bold text-white mb-2">{{ currentDayOfMonth }}</p>
              <p class="text-blue-200/60">{{ todayFormatted }}</p>
            </div>
          </div>
        </div>

        <!-- Events Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            *ngFor="let event of events; let i = index"
            class="group cursor-pointer"
            data-aos="fade-up"
            [attr.data-aos-delay]="(i % 3) * 100"
          >
            <div class="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
              <!-- Date Header -->
              <div class="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white relative">
                <div class="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
                <div class="relative z-10 flex items-center gap-4">
                  <div class="text-center">
                    <p class="text-4xl font-bold">{{ getEventDayNum(event.date) }}</p>
                    <p class="text-sm opacity-80 uppercase">{{ getEventMonth(event.date) }}</p>
                  </div>
                  <div class="flex-1">
                    <p class="text-sm opacity-80">{{ getEventYear(event.date) }}</p>
                    <p class="font-semibold">{{ getEventDay(event.date) }}</p>
                  </div>
                </div>
              </div>
              
              <!-- Content -->
              <div class="p-6">
                <h3 class="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-3 line-clamp-2">
                  {{ event.title }}
                </h3>
                
                <div class="space-y-2 text-gray-500 text-sm mb-4">
                  <div class="flex items-center gap-2">
                    <svg class="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    {{ event.startTime }} - {{ event.endTime }}
                  </div>
                  <div class="flex items-center gap-2">
                    <svg class="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    {{ event.location }}
                  </div>
                </div>

                <p class="text-gray-500 text-sm line-clamp-2 mb-4">{{ event.description }}</p>

                <div class="flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:gap-3 transition-all">
                  Voir les détails
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- No Events -->
        <div *ngIf="events.length === 0" class="text-center py-20" data-aos="fade-up">
          <div class="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-slate-900 mb-2">Aucun événement à venir</h3>
          <p class="text-gray-500">Revenez bientôt pour découvrir nos prochains événements.</p>
        </div>
      </div>
    </main>

    <!-- CTA Section - Outside main, merges with footer -->
    <section class="py-20 bg-slate-900 relative overflow-hidden">
      <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 32px 32px;"></div>
      </div>
      
      <div class="container mx-auto px-6 lg:px-16 relative z-10 text-center" data-aos="fade-up">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Vous organisez un événement ?</h2>
        <p class="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          Contactez-nous pour proposer un événement ou obtenir plus d'informations
        </p>
        <a 
          routerLink="/contact" 
          class="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-full hover:from-blue-600 hover:to-blue-700 transition-all hover:scale-105 shadow-lg shadow-blue-500/25"
        >
          Nous Contacter
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </a>
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
export class EventsComponent implements OnInit, AfterViewInit {
  events: EventItem[] = [];
  currentMonthName = '';
  currentYear = 0;
  currentDayOfMonth = '';
  todayFormatted = '';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    const now = new Date();
    this.currentMonthName = now.toLocaleDateString('fr-FR', { month: 'long' });
    this.currentYear = now.getFullYear();
    this.currentDayOfMonth = now.getDate().toString().padStart(2, '0');
    this.todayFormatted = now.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' });

    this.dataService.getEvents().subscribe((events: EventItem[]) => {
      this.events = events.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    });
  }

  ngAfterViewInit() {
    if (typeof AOS !== 'undefined') {
      AOS.refresh();
    }
  }

  getEventDayNum(dateStr: string): string {
    return new Date(dateStr).getDate().toString().padStart(2, '0');
  }

  getEventMonth(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString('fr-FR', { month: 'short' });
  }

  getEventYear(dateStr: string): string {
    return new Date(dateStr).getFullYear().toString();
  }

  getEventDay(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString('fr-FR', { weekday: 'long' });
  }
}
