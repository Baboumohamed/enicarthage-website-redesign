import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <!-- Hero Section - Dark Gradient with Animated Elements -->
    <section class="relative min-h-[60vh] bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden flex items-center">
      <!-- Animated Background Elements -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0 animate-pulse-slow" style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 40px 40px;"></div>
      </div>
      <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-3xl animate-float-delayed"></div>
      
      <!-- Floating Decorative Elements -->
      <div class="absolute top-20 left-20 w-4 h-4 bg-blue-400 rounded-full animate-bounce opacity-60"></div>
      <div class="absolute top-40 right-40 w-3 h-3 bg-blue-300 rounded-full animate-ping opacity-40"></div>
      <div class="absolute bottom-32 left-1/3 w-2 h-2 bg-white rounded-full animate-pulse opacity-50"></div>
      
      <div class="relative z-10 container mx-auto px-6 lg:px-16 py-20">
        <div class="max-w-4xl animate-fade-in-up">
          <div class="flex items-center gap-2 text-blue-300 text-sm mb-4">
            <a routerLink="/" class="hover:text-white transition-colors duration-300">Accueil</a>
            <span class="animate-pulse">/</span>
            <span class="hover:text-white transition-colors duration-300">École</span>
            <span class="animate-pulse">/</span>
            <span class="text-white font-medium">À propos</span>
          </div>
          <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            À <span class="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent animate-gradient">PROPOS</span>
          </h1>
          <p class="text-xl text-blue-100/80 max-w-2xl animate-fade-in">
            Découvrez l'excellence académique et l'innovation qui définissent l'ENICarthage
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
      <!-- Section 1: L'École -->
      <section class="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div class="container mx-auto px-6 lg:px-16">
          <div class="grid lg:grid-cols-2 gap-16 items-center">
            <div class="animate-slide-in-left">
              <span class="inline-block px-4 py-2 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full mb-6">
                Depuis 2002
              </span>
              <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-8 tracking-tight">
                L'École Nationale d'Ingénieurs de Carthage
                <span class="text-blue-600 block mt-2">(ENICarthage)</span>
              </h2>
              <div class="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  L'École Nationale d'Ingénieurs de Carthage (ENICarthage) est un établissement d'enseignement supérieur publique, 
                  relevant de l'Université de Carthage, créé (décret n° 2002-1623 du 9 juillet 2002), en tant que École Supérieure 
                  de Technologie et d'Informatique (ESTI), en 2002 et transformé en école nationale d'ingénieurs recrutant ses 
                  élèves à partir du concours national d'ingénieurs à partir de septembre 2012 (décret n° 2014-4677 du 29 décembre 2014).
                </p>
                <p>
                  Étant habilitée à délivrer des diplômes de Maîtrise depuis 2002 et ayant intégré le système LMD depuis la rentrée 2007, 
                  cette école a offert plusieurs formations spécialisées dans les domaines du Génie Électrique, de l'Informatique et 
                  de la Gestion Industrielle, parmi lesquelles des formations d'ingénieurs en sciences appliquées et Technologie.
                </p>
              </div>
            </div>
            
            <div class="relative group animate-slide-in-right">
              <div class="absolute -inset-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div class="relative rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500">
                <img 
                  src="assets/images/campus-building.png" 
                  alt="Campus ENICarthage"
                  class="w-full h-[400px] object-cover"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 2: Les Formations -->
      <section class="py-24 bg-white overflow-hidden">
        <div class="container mx-auto px-6 lg:px-16">
          <div class="grid lg:grid-cols-2 gap-16 items-center">
            <div class="order-2 lg:order-1 relative group animate-slide-in-left">
              <div class="absolute -inset-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div class="relative rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500">
                <img 
                  src="assets/images/students-learning.png" 
                  alt="Formations ENICarthage"
                  class="w-full h-[400px] object-cover"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
              </div>
            </div>
            
            <div class="order-1 lg:order-2 animate-slide-in-right">
              <span class="inline-block px-4 py-2 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full mb-6">
                Cycle Ingénieur
              </span>
              <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-8 tracking-tight">
                Les formations
              </h2>
              <p class="text-gray-600 mb-6">
                <strong>Depuis septembre 2012,</strong> l'ENICarthage offre trois formations d'Ingénieur National en :
              </p>
              
              <div class="space-y-4">
                <div class="bg-gradient-to-r from-blue-50 to-white p-6 rounded-2xl border-l-4 border-blue-500 transform hover:translate-x-2 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                  <h4 class="font-bold text-slate-900 text-lg group-hover:text-blue-600 transition-colors">Génie Informatique</h4>
                  <p class="text-gray-500 text-sm">Environ 120 élèves ingénieurs / promotion</p>
                </div>
                <div class="bg-gradient-to-r from-blue-50 to-white p-6 rounded-2xl border-l-4 border-blue-500 transform hover:translate-x-2 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                  <h4 class="font-bold text-slate-900 text-lg group-hover:text-blue-600 transition-colors">Mécatronique</h4>
                  <p class="text-gray-500 text-sm">Environ 100 élèves ingénieurs / promotion</p>
                </div>
                <div class="bg-gradient-to-r from-blue-50 to-white p-6 rounded-2xl border-l-4 border-blue-500 transform hover:translate-x-2 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                  <h4 class="font-bold text-slate-900 text-lg group-hover:text-blue-600 transition-colors">Génie des Systèmes Industriels et Logistiques</h4>
                  <p class="text-gray-500 text-sm">Environ 60 élèves ingénieurs / promotion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 3: Autres Diplômes -->
      <section class="py-24 bg-gray-50 overflow-hidden">
        <div class="container mx-auto px-6 lg:px-16">
          <div class="grid lg:grid-cols-2 gap-16 items-start">
            <div class="animate-slide-in-left">
              <span class="inline-block px-4 py-2 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full mb-6">
                Mastères & Doctorats
              </span>
              <h3 class="text-2xl font-bold text-slate-900 mb-6">
                Elle est, également, habilitée à délivrer les diplômes de :
              </h3>
              
              <div class="space-y-3">
                <div *ngFor="let diploma of diplomas" class="flex items-start gap-3 p-3 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 cursor-pointer group">
                  <div class="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform"></div>
                  <p class="text-gray-700 font-medium group-hover:text-blue-600 transition-colors">{{ diploma }}</p>
                </div>
              </div>
            </div>
            
            <div class="relative group animate-slide-in-right">
              <div class="absolute -inset-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div class="relative rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500">
                <img 
                  src="assets/images/engineering-lab.png" 
                  alt="Diplômes ENICarthage"
                  class="w-full h-[350px] object-cover"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 4: Points Forts - Dark Section -->
      <section class="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
        <div class="absolute inset-0 opacity-10">
          <div class="absolute inset-0 animate-pulse-slow" style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 32px 32px;"></div>
        </div>
        <div class="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
        <div class="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-float-delayed"></div>
        
        <div class="container mx-auto px-6 lg:px-16 relative z-10">
          <div class="text-center mb-16">
            <span class="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-blue-300 text-sm font-medium rounded-full mb-6 border border-white/20">
              Excellence & Innovation
            </span>
            <h2 class="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Les points forts de l'ENICarthage
            </h2>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            <div *ngFor="let point of pointsForts; let i = index" 
                 class="group bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/10 hover:bg-white/20 hover:border-blue-400/50 transition-all duration-500 cursor-pointer transform hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10"
                 [class.md:col-span-2]="i === 10">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                  {{ i + 1 }}
                </div>
                <div>
                  <h4 class="text-white font-bold text-lg mb-2 group-hover:text-blue-200 transition-colors">{{ point.title }}</h4>
                  <p class="text-blue-100/70 text-sm group-hover:text-blue-100 transition-colors">{{ point.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Stats Section -->
      <section class="py-16 bg-white">
        <div class="container mx-auto px-6 lg:px-16">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div *ngFor="let stat of stats" class="text-center group cursor-pointer">
              <p class="text-5xl font-bold text-blue-600 group-hover:scale-110 transition-transform duration-300">{{ stat.value }}</p>
              <p class="text-gray-500 text-sm mt-2">{{ stat.label }}</p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Newsletter Section - Outside main, merges with footer -->
    <section class="py-20 bg-slate-900 relative overflow-hidden">
      <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 32px 32px;"></div>
      </div>
      <div class="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
      
      <div class="container mx-auto px-6 lg:px-16 relative z-10 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">S'inscrire à la Newsletter</h2>
        <p class="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          Recevez les dernières actualités de l'ENICarthage
        </p>
        <form class="max-w-lg mx-auto flex flex-col sm:flex-row gap-3">
          <input 
            type="email"
            placeholder="Taper votre email ici"
            required
            class="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:bg-white/15"
          />
          <button 
            type="submit"
            class="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
          >
            S'abonner
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
    
    @keyframes fade-in-up {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes fade-in {
      from { opacity: 0; }
      to { opacity: 1; }
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
    
    .animate-fade-in-up {
      animation: fade-in-up 0.8s ease-out forwards;
    }
    
    .animate-fade-in {
      animation: fade-in 1s ease-out forwards;
      animation-delay: 0.3s;
      opacity: 0;
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
    
    .animate-pulse-slow {
      animation: pulse-slow 4s ease-in-out infinite;
    }
  `]
})
export class AboutComponent {
  diplomas = [
    'Doctorat en Génie Électrique',
    'Mastère Recherche en Automatique, Robotique et Traitement de l\'Information',
    'Mastère Recherche en Technologies de l\'Information et de la Communication',
    'Mastère Professionnel en Commande et Supervision des Systèmes Industriels',
    'Mastère Professionnel en Ingénierie des Systèmes Informatiques',
    'Mastère Professionnel en Management des Systèmes Industriels'
  ];

  pointsForts = [
    { title: 'Des formations à caractère technologique', description: 'Des formations à caractère technologique dans des domaines à forte employabilité, à l\'échelle nationale et internationale.' },
    { title: 'Une ouverture sur l\'environnement socio-économique', description: 'Avec la participation d\'industriels et de professionnels au niveau de la formation en plus du déroulement de 95% des projets de fin d\'études en milieu industriel.' },
    { title: 'Une vie associative riche', description: 'Des activités de clubs variés, couronnés par des distinctions : Championnat Devyanin 2014 de robotique mobile (Taiwan), 2ème place Imagine Cup (Qatar-2014).' },
    { title: 'Un corps enseignant compétent, jeune et motivé', description: '(15% corps A, 83% Maîtres Assistants confirmés) poursuivant leurs travaux de recherche dans des structures nationales et internationales.' },
    { title: 'Des laboratoires équipés', description: 'En matériel et en logiciels relevant des domaines du Génie Électrique, de l\'Informatique et du Génie Industriel.' },
    { title: 'Collaboration avec les écoles d\'ingénieurs tunisiennes', description: 'Une forte collaboration dans le cadre pédagogique et de recherche.' },
    { title: 'Échanges internationaux', description: 'Avec l\'UTBM (co-diplôme), l\'ETS Montréal, l\'École Centrale de Lille, l\'ENP d\'Alger, l\'Université Mohamed I à Oujda...' },
    { title: 'Stratégie de certification développée', description: 'Certification d\'enseignants puis d\'étudiants avec gratuités pour les méritants. L\'ENICarthage est un centre de certification.' },
    { title: 'Voyages d\'études et visites d\'entreprises', description: 'Régulièrement organisés au profit des élèves ingénieurs.' },
    { title: 'Programmes récents et dynamiques', description: 'Intégrant les nouvelles technologies, soft skills, travail en équipe, et deux stages obligatoires en milieu industriel.' },
    { title: 'Activités de recherche diversifiées', description: 'S\'inscrivant dans la Stratégie Nationale du Développement Durable avec des applications économiques, sociales et environnementales.' }
  ];

  stats = [
    { value: '2002', label: 'Année de création' },
    { value: '280+', label: 'Ingénieurs par an' },
    { value: '95%', label: 'PFE en entreprise' },
    { value: '20+', label: 'Partenaires internationaux' }
  ];
}
