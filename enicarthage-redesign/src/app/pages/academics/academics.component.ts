import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-academics',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <!-- Hero Section -->
    <section class="relative min-h-[60vh] bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden flex items-center">
      <!-- Animated Background Elements -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0 animate-pulse-slow" style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 40px 40px;"></div>
      </div>
      <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-3xl animate-float-delayed"></div>
      
      <!-- Floating Elements -->
      <div class="absolute top-32 left-20 w-4 h-4 bg-blue-400 rounded-full animate-bounce opacity-60"></div>
      <div class="absolute top-48 right-32 w-3 h-3 bg-blue-300 rounded-full animate-ping opacity-40"></div>
      <div class="absolute bottom-40 left-1/3 w-2 h-2 bg-white rounded-full animate-pulse opacity-50"></div>
      
      <div class="relative z-10 container mx-auto px-6 lg:px-16 py-20">
        <div class="max-w-4xl mx-auto text-center animate-fade-in-up">
          <span class="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-blue-300 text-sm font-medium rounded-full mb-6 border border-white/20">
            Programmes d'Excellence
          </span>
          <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Nos
            <span class="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent animate-gradient">Formations</span>
          </h1>
          <p class="text-xl text-blue-100/80 max-w-2xl mx-auto leading-relaxed animate-fade-in-delayed">
            Découvrez nos programmes de formation en ingénierie, mastères et doctorats
          </p>
        </div>
      </div>
      
      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>

    <main>
      <!-- Overview Stats -->
      <section class="py-12 bg-white border-b border-gray-100">
        <div class="container mx-auto px-6 lg:px-16">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div *ngFor="let stat of stats" class="text-center group cursor-pointer">
              <p class="text-4xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-300">{{ stat.value }}</p>
              <p class="text-gray-500 text-sm">{{ stat.label }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Formations Ingénieurs -->
      <section class="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div class="container mx-auto px-6 lg:px-16">
          <div class="text-center mb-16">
            <span class="inline-block px-4 py-1.5 bg-blue-100 text-blue-600 text-xs font-semibold rounded-full mb-4">
              Cycle Ingénieur
            </span>
            <h2 class="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">Formations Ingénieurs</h2>
            <p class="text-gray-500 text-lg max-w-2xl mx-auto">
              Recrutement via le Concours National d'Ingénieurs - Formation en 3 ans
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a 
              *ngFor="let formation of formationsIng; let i = index"
              [routerLink]="['/departments', formation.slug]"
              class="group bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-2xl hover:border-blue-200 transition-all duration-500 hover:-translate-y-2 cursor-pointer block"
              [style.animation-delay]="i * 100 + 'ms'"
            >
              <div class="w-16 h-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" [attr.d]="formation.icon"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                {{ formation.name }}
              </h3>
              <p class="text-gray-500 text-sm mb-4">{{ formation.fullName }}</p>
              <div class="flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:gap-3 transition-all">
                En savoir plus
                <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </section>

      <!-- Mastères Section - Dark -->
      <section class="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
        <div class="absolute inset-0 opacity-10">
          <div class="absolute inset-0 animate-pulse-slow" style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 32px 32px;"></div>
        </div>
        <div class="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
        <div class="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-float-delayed"></div>
        
        <div class="container mx-auto px-6 lg:px-16 relative z-10">
          <div class="text-center mb-16">
            <span class="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm text-blue-300 text-xs font-medium rounded-full mb-4 border border-white/20">
              Formation Continue
            </span>
            <h2 class="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Mastères Spécialisés</h2>
            <p class="text-blue-200/70 text-lg max-w-2xl mx-auto">
              Programmes de spécialisation pour les professionnels
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            <div 
              *ngFor="let master of masteres; let i = index"
              class="group bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/20 hover:border-blue-400/50 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              [style.animation-delay]="i * 100 + 'ms'"
            >
              <div class="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <span class="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-semibold rounded-full mb-4">
                {{ master.code }}
              </span>
              <h3 class="text-xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">{{ master.name }}</h3>
              <p class="text-blue-100/70 text-sm group-hover:text-blue-100 transition-colors">{{ master.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Doctorat Section -->
      <section class="py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        <div class="container mx-auto px-6 lg:px-16">
          <div class="grid lg:grid-cols-2 gap-16 items-center">
            <div class="animate-slide-in-left">
              <span class="inline-block px-4 py-1.5 bg-blue-100 text-blue-600 text-xs font-semibold rounded-full mb-6">
                Recherche
              </span>
              <h2 class="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                Programme Doctoral
              </h2>
              <p class="text-gray-600 leading-relaxed mb-6">
                Le programme doctoral de l'ENICarthage offre aux chercheurs une formation approfondie 
                dans les domaines de pointe de l'ingénierie. Nos doctorants bénéficient d'un encadrement 
                de qualité et de collaborations avec des partenaires industriels et académiques internationaux.
              </p>
              
              <div class="space-y-4">
                <div *ngFor="let feature of doctoratFeatures" class="flex items-start gap-4 group cursor-pointer p-2 rounded-xl hover:bg-blue-50 transition-all duration-300">
                  <div class="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500 group-hover:scale-110 transition-all duration-300">
                    <svg class="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{{ feature.title }}</h4>
                    <p class="text-gray-500 text-sm">{{ feature.description }}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="relative animate-slide-in-right">
              <div class="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 rounded-3xl p-10 relative overflow-hidden group">
                <div class="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                <div class="relative z-10">
                  <div class="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 border border-white/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <svg class="w-10 h-10 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                    </svg>
                  </div>
                  <h3 class="text-3xl font-bold text-white mb-4">Doctorat en Sciences</h3>
                  <p class="text-blue-100/70 leading-relaxed mb-6">
                    Formation doctorale de 3 à 5 ans avec possibilité de financement par bourse de recherche.
                  </p>
                  <a routerLink="/contact" class="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 font-semibold rounded-full hover:bg-blue-50 transition-all duration-300 hover:scale-105 group">
                    Postuler
                    <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- CTA - Outside main, merges with footer -->
    <section class="py-20 bg-slate-900 relative overflow-hidden">
      <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 32px 32px;"></div>
      </div>
      <div class="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
      
      <div class="container mx-auto px-6 lg:px-16 relative z-10 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Prêt à rejoindre l'ENICarthage ?</h2>
        <p class="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          Découvrez comment postuler à nos programmes de formation
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            routerLink="/contact" 
            class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 group"
          >
            Nous Contacter
            <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </a>
          <a 
            href="#" 
            class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-medium rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 group"
          >
            Télécharger la brochure
            <svg class="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
          </a>
        </div>
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
    
    @keyframes fade-in-up {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes pulse-slow {
      0%, 100% { opacity: 0.1; }
      50% { opacity: 0.15; }
    }
    
    @keyframes slide-in-left {
      from { opacity: 0; transform: translateX(-50px); }
      to { opacity: 1; transform: translateX(0); }
    }
    
    @keyframes slide-in-right {
      from { opacity: 0; transform: translateX(50px); }
      to { opacity: 1; transform: translateX(0); }
    }
    
    @keyframes gradient {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
    
    .animate-float-delayed {
      animation: float-delayed 8s ease-in-out infinite;
      animation-delay: 1s;
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
    
    .animate-slide-in-left {
      animation: slide-in-left 0.8s ease-out forwards;
    }
    
    .animate-slide-in-right {
      animation: slide-in-right 0.8s ease-out forwards;
    }
    
    .animate-gradient {
      background-size: 200% 200%;
      animation: gradient 3s ease infinite;
    }
  `]
})
export class AcademicsComponent {
  stats = [
    { value: '4', label: 'Spécialités Ingénieur' },
    { value: '3', label: 'Mastères Spécialisés' },
    { value: '150+', label: 'Enseignants' },
    { value: '95%', label: 'Taux d\'insertion' }
  ];

  formationsIng = [
    {
      name: 'Ingénieur GSIL',
      fullName: 'Génie des Systèmes Industriels et Logistiques',
      slug: 'gsil',
      icon: 'M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2'
    },
    {
      name: 'Ingénieur Mécatronique',
      fullName: 'Systèmes Mécatroniques',
      slug: 'mecatronique',
      icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z'
    },
    {
      name: 'Ingénieur Informatique',
      fullName: 'Génie Informatique',
      slug: 'informatique',
      icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
    },
    {
      name: 'Ingénieur Infotronique',
      fullName: 'Informatique et Électronique',
      slug: 'infotronique',
      icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z'
    }
  ];

  masteres = [
    {
      code: 'ARTI',
      name: 'Architecture et Réseaux Temps Réel',
      description: 'Spécialisation dans les systèmes embarqués et temps réel industriels'
    },
    {
      code: 'TIC',
      name: 'Technologies de l\'Information',
      description: 'Formation avancée en systèmes d\'information et communications'
    },
    {
      code: 'MPSDM',
      name: 'Management et Projet',
      description: 'Gestion de projets et systèmes décentralisés modernes'
    }
  ];

  doctoratFeatures = [
    { title: 'Encadrement Académique', description: 'Directeurs de thèse experts dans leur domaine' },
    { title: 'Projets Innovants', description: 'Recherche sur des sujets d\'actualité' },
    { title: 'Collaboration Industrielle', description: 'Partenariats avec les entreprises leaders' }
  ];
}
