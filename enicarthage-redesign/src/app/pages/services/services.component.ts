import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

declare const AOS: any;

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <!-- Hero Section -->
    <section class="relative min-h-[50vh] bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden flex items-center">
      <!-- Background Elements -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 40px 40px;"></div>
      </div>
      <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-3xl"></div>
      
      <div class="relative z-10 container mx-auto px-6 lg:px-16 py-20 text-center">
        <span class="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-blue-300 text-sm font-medium rounded-full mb-6 border border-white/20" data-aos="fade-up">
          Vie Étudiante & Professionnelle
        </span>
        <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight" data-aos="fade-up" data-aos-delay="100">
          Nos <span class="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">Services</span>
        </h1>
        <p class="text-xl text-blue-100/80 max-w-2xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="200">
          Accompagnement, orientation et vie de campus pour nos étudiants et partenaires
        </p>
      </div>
    </section>

    <main class="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div class="container mx-auto px-6 lg:px-16">
        
        <!-- Services Grid -->
        <div class="grid md:grid-cols-3 gap-8 mb-20">
          <!-- Service 1 -->
          <div class="group bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2" data-aos="fade-up">
            <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">Stage et Emploi</h3>
            <p class="text-gray-500 leading-relaxed mb-6">
              Accompagnement personnalisé pour la recherche de stages et d'opportunités professionnelles. Partenariats avec les entreprises leaders.
            </p>
            <a href="/opportunities/internships" class="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
              Découvrir
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
          </div>

          <!-- Service 2 -->
          <div class="group bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2" data-aos="fade-up" data-aos-delay="100">
            <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">Bourses d'Études</h3>
            <p class="text-gray-500 leading-relaxed mb-6">
              Programmes de bourses d'excellence et de mobilité internationale pour soutenir les parcours académiques de nos étudiants.
            </p>
            <a href="/opportunities/scholarships" class="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
              En savoir plus
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
          </div>

          <!-- Service 3 -->
          <div class="group bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2" data-aos="fade-up" data-aos-delay="200">
            <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">Centre 4C</h3>
            <p class="text-gray-500 leading-relaxed mb-6">
              Centre de Carrière et de Certification des Compétences : certifications, formations soft skills et événements entreprise.
            </p>
            <a href="/opportunities/4c" class="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
              Visiter le Centre
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
          </div>
        </div>

        <!-- Featured Section - Clubs -->
        <section class="relative bg-slate-900 rounded-[2.5rem] overflow-hidden p-12 lg:p-20" data-aos="fade-up">
          <!-- Decorative Background -->
          <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]"></div>
          <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-[100px]"></div>
          
          <div class="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span class="inline-block px-4 py-2 bg-white/10 text-white text-xs font-bold uppercase tracking-wider rounded-full mb-6 max-w-fit">
                Vie Associative
              </span>
              <h2 class="text-3xl md:text-5xl font-bold text-white mb-6">Clubs & Associations</h2>
              <p class="text-gray-300 text-lg leading-relaxed mb-8">
                Une vie étudiante dynamique animée par plus de 20 clubs actifs. 
                Robotique, informatique, culturel, social... Développez vos talents et vivez votre passion.
              </p>
              
              <div class="flex flex-wrap gap-4">
                <div class="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-white font-medium hover:bg-white/10 transition">
                  ✨ Club Robotique
                </div>
                <div class="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-white font-medium hover:bg-white/10 transition">
                  🚀 Microsoft Club
                </div>
                <div class="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-white font-medium hover:bg-white/10 transition">
                  💼 Junior Entreprise
                </div>
                <div class="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-white font-medium hover:bg-white/10 transition">
                  🌍 Enactus
                </div>
              </div>

              <div class="mt-10">
                <a href="/clubs" class="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-blue-50 transition-all hover:scale-105">
                  Voir tous les clubs
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div class="grid grid-cols-2 gap-4">
              <div class="space-y-4 translate-y-8">
                <div class="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-3xl aspect-square flex items-center justify-center shadow-lg transform hover:-translate-y-2 transition-transform duration-500">
                  <span class="text-4xl">🤖</span>
                </div>
                <div class="bg-white/10 backdrop-blur-md p-6 rounded-3xl aspect-square flex items-center justify-center border border-white/10 hover:border-white/20 transition-colors">
                  <span class="text-4xl">💻</span>
                </div>
              </div>
              <div class="space-y-4">
                <div class="bg-white/10 backdrop-blur-md p-6 rounded-3xl aspect-square flex items-center justify-center border border-white/10 hover:border-white/20 transition-colors">
                  <span class="text-4xl">🎭</span>
                </div>
                <div class="bg-gradient-to-br from-slate-700 to-slate-800 p-6 rounded-3xl aspect-square flex items-center justify-center shadow-lg border border-white/5 transform hover:-translate-y-2 transition-transform duration-500">
                  <span class="text-4xl">⚽</span>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  `,
  styles: []
})
export class ServicesComponent implements AfterViewInit {
  ngAfterViewInit() {
    if (typeof AOS !== 'undefined') {
      AOS.refresh();
    }
  }
}
