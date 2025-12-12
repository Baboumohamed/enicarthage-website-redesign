import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

declare const AOS: any;

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <!-- Hero Section -->
    <section class="relative h-96 bg-cover bg-center overflow-hidden" style="background-image: url('assets/images/67eb17776772dd94d0c104cf056e48bdf208b542.jpg')">
      <div class="absolute inset-0 bg-black/50"></div>
      <div class="relative z-10 container mx-auto px-4 lg:px-8 h-full flex items-center">
        <div>
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">À Propos de ENICarthage</h1>
          <p class="text-xl text-white/90 max-w-3xl">
            École Nationale d'Ingénieurs de Carthage - Excellence en Enseignement et Innovation
          </p>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <main class="py-16">
      <!-- Histoire Section -->
      <section class="container mx-auto px-4 lg:px-8 py-16 border-b border-gray-200">
        <div class="grid md:grid-cols-2 gap-12 items-center" data-aos="fade-up">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-enic-primary mb-8">
              Notre École
            </h2>
            <div class="space-y-6">
              <p class="text-gray-700 leading-relaxed">
                <strong>L'École Nationale d'Ingénieurs de Carthage (ENICarthage)</strong> est un établissement 
                d'enseignement supérieur public, relevant de l'Université de Carthage, créé en 2002 en tant 
                qu'École Supérieure de Technologie et d'Informatique (ESTI).
              </p>
              <p class="text-gray-700 leading-relaxed">
                Transformée en école nationale d'ingénieurs depuis septembre 2012, l'ENICarthage recrute 
                ses élèves à partir du concours national d'ingénieurs (Décret n° 2014-4677 du 29 décembre 2014).
              </p>
              <p class="text-gray-700 leading-relaxed">
                Habilitée à délivrer des diplômes de Maîtrise depuis 2002, l'école a intégré le système LMD 
                depuis la rentrée 2007 et offre plusieurs formations spécialisées dans les domaines du Génie 
                Électrique, de l'Informatique et de la Gestion Industrielle.
              </p>
            </div>
          </div>
          <div class="relative">
            <img 
              src="assets/images/b8aa6b34f2afdeac45d507b195eef67b9adf3822.jpg" 
              alt="Campus"
              class="rounded-xl shadow-lg"
              data-aos="zoom-in"
            />
          </div>
        </div>
      </section>

      <!-- Mission & Vision -->
      <section class="bg-enic-primary/5 py-16">
        <div class="container mx-auto px-4 lg:px-8">
          <h2 class="text-3xl md:text-4xl font-bold text-enic-primary mb-12 text-center" data-aos="fade-up">
            Mission et Valeurs
          </h2>
          <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="0">
              <div class="flex items-center mb-4">
                <lucide-icon name="Target" class="w-8 h-8 text-accent-500 mr-3"></lucide-icon>
                <h3 class="text-2xl font-bold text-enic-primary">Notre Mission</h3>
              </div>
              <p class="text-gray-700">
                Former des ingénieurs compétents, créatifs et responsables, capables de contribuer au développement 
                technologique et économique de la Tunisie et de la région méditerranéenne.
              </p>
            </div>
            <div class="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="100">
              <div class="flex items-center mb-4">
                <lucide-icon name="Heart" class="w-8 h-8 text-accent-500 mr-3"></lucide-icon>
                <h3 class="text-2xl font-bold text-enic-primary">Nos Valeurs</h3>
              </div>
              <p class="text-gray-700">
                Excellence académique, innovation, intégrité, inclusion, et engagement communautaire. 
                Nous nous engageons à promouvoir l'éthique professionnelle et la responsabilité sociale.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Formations Section -->
      <section class="container mx-auto px-4 lg:px-8 py-16 border-b border-gray-200">
        <h2 class="text-3xl md:text-4xl font-bold text-enic-primary mb-12 text-center" data-aos="fade-up">
          Nos Formations
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-gradient-to-br from-enic-primary to-accent-600 text-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow" data-aos="zoom-in">
            <lucide-icon name="Zap" class="w-12 h-12 mb-4 text-accent-200"></lucide-icon>
            <h3 class="text-2xl font-bold mb-4">Cycles Ingénieurs</h3>
            <ul class="space-y-2 text-white/90">
              <li>• GSIL - Génie des Systèmes d'Information et Logistique</li>
              <li>• Mécatronique</li>
              <li>• Informatique</li>
              <li>• Infotronique</li>
            </ul>
          </div>

          <div class="bg-gradient-to-br from-accent-500 to-accent-700 text-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow" data-aos="zoom-in" data-aos-delay="100">
            <lucide-icon name="BookOpen" class="w-12 h-12 mb-4 text-white/80"></lucide-icon>
            <h3 class="text-2xl font-bold mb-4">Mastères Spécialisés</h3>
            <ul class="space-y-2 text-white/90">
              <li>• ARTI - Architecture et Réseaux Temps Réel</li>
              <li>• TIC - Technologies de l'Information et Communications</li>
              <li>• MPSDM - Management et Projet de Systèmes Décentralisés</li>
            </ul>
          </div>

          <div class="bg-gradient-to-br from-enic-primary via-accent-600 to-accent-700 text-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow" data-aos="zoom-in" data-aos-delay="200">
            <lucide-icon name="Award" class="w-12 h-12 mb-4 text-accent-200"></lucide-icon>
            <h3 class="text-2xl font-bold mb-4">Doctorat</h3>
            <ul class="space-y-2 text-white/90">
              <li>• Doctorats en recherche</li>
              <li>• Encadrement académique</li>
              <li>• Projets de recherche innovants</li>
              <li>• Collaboration industrielle</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Points Forts Section -->
      <section class="bg-slate-50 py-16">
        <div class="container mx-auto px-4 lg:px-8">
          <h2 class="text-3xl md:text-4xl font-bold text-enic-primary mb-12 text-center" data-aos="fade-up">
            Nos Points Forts
          </h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center" data-aos="flip-left">
              <lucide-icon name="Users" class="w-10 h-10 text-accent-500 mx-auto mb-3"></lucide-icon>
              <h4 class="font-bold text-lg mb-2">Corps Enseignant</h4>
              <p class="text-gray-600 text-sm">Professeurs qualifiés et expérimentés</p>
            </div>
            <div class="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center" data-aos="flip-left" data-aos-delay="100">
              <lucide-icon name="Cpu" class="w-10 h-10 text-accent-500 mx-auto mb-3"></lucide-icon>
              <h4 class="font-bold text-lg mb-2">Infrastructure Moderne</h4>
              <p class="text-gray-600 text-sm">Laboratoires équipés et technologie à jour</p>
            </div>
            <div class="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center" data-aos="flip-left" data-aos-delay="200">
              <lucide-icon name="Globe" class="w-10 h-10 text-accent-500 mx-auto mb-3"></lucide-icon>
              <h4 class="font-bold text-lg mb-2">Partenariats Internationaux</h4>
              <p class="text-gray-600 text-sm">Collaborations académiques et industrielles</p>
            </div>
            <div class="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center" data-aos="flip-left" data-aos-delay="300">
              <lucide-icon name="Briefcase" class="w-10 h-10 text-accent-500 mx-auto mb-3"></lucide-icon>
              <h4 class="font-bold text-lg mb-2">Insertion Professionnelle</h4>
              <p class="text-gray-600 text-sm">Excellents débouchés professionnels</p>
            </div>
            <div class="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center" data-aos="flip-left" data-aos-delay="400">
              <lucide-icon name="TrendingUp" class="w-10 h-10 text-accent-500 mx-auto mb-3"></lucide-icon>
              <h4 class="font-bold text-lg mb-2">Recherche et Innovation</h4>
              <p class="text-gray-600 text-sm">Projets de recherche d'envergure</p>
            </div>
            <div class="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center" data-aos="flip-left" data-aos-delay="500">
              <lucide-icon name="BookMarked" class="w-10 h-10 text-accent-500 mx-auto mb-3"></lucide-icon>
              <h4 class="font-bold text-lg mb-2">Accréditations</h4>
              <p class="text-gray-600 text-sm">Reconnue nationalement et internationalement</p>
            </div>
            <div class="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center" data-aos="flip-left" data-aos-delay="600">
              <lucide-icon name="Award" class="w-10 h-10 text-accent-500 mx-auto mb-3"></lucide-icon>
              <h4 class="font-bold text-lg mb-2">Excellence Académique</h4>
              <p class="text-gray-600 text-sm">Standards de qualité élevés</p>
            </div>
            <div class="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center" data-aos="flip-left" data-aos-delay="700">
              <lucide-icon name="Lightbulb" class="w-10 h-10 text-accent-500 mx-auto mb-3"></lucide-icon>
              <h4 class="font-bold text-lg mb-2">Entrepreneuriat</h4>
              <p class="text-gray-600 text-sm">Encouragement de l'innovation entrepreneuriale</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Statistics Section -->
      <section class="container mx-auto px-4 lg:px-8 py-16">
        <h2 class="text-3xl md:text-4xl font-bold text-enic-primary mb-12 text-center" data-aos="fade-up">
          Chiffres Clés
        </h2>
        <div class="grid md:grid-cols-4 gap-8 text-center">
          <div class="p-8 bg-gradient-to-br from-enic-primary to-accent-600 text-white rounded-xl" data-aos="zoom-in">
            <div class="text-4xl font-bold mb-2">2002</div>
            <p class="text-white/90">Année de Création</p>
          </div>
          <div class="p-8 bg-gradient-to-br from-accent-500 to-accent-700 text-white rounded-xl" data-aos="zoom-in" data-aos-delay="100">
            <div class="text-4xl font-bold mb-2">1000+</div>
            <p class="text-white/90">Étudiants</p>
          </div>
          <div class="p-8 bg-gradient-to-br from-enic-primary to-accent-600 text-white rounded-xl" data-aos="zoom-in" data-aos-delay="200">
            <div class="text-4xl font-bold mb-2">50+</div>
            <p class="text-white/90">Enseignants</p>
          </div>
          <div class="p-8 bg-gradient-to-br from-accent-500 to-accent-700 text-white rounded-xl" data-aos="zoom-in" data-aos-delay="300">
            <div class="text-4xl font-bold mb-2">10+</div>
            <p class="text-white/90">Partenaires Internationaux</p>
          </div>
        </div>
      </section>

      <!-- Contact CTA -->
      <section class="bg-enic-primary/10 py-16 border-t border-gray-200">
        <div class="container mx-auto px-4 lg:px-8 text-center" data-aos="fade-up">
          <h2 class="text-3xl font-bold text-enic-primary mb-6">Vous Avez des Questions ?</h2>
          <p class="text-lg text-gray-700 mb-8">Contactez-nous pour en savoir plus sur nos formations et notre école</p>
          <a href="/contact" class="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Nous Contacter
            <lucide-icon name="ArrowRight" class="w-5 h-5"></lucide-icon>
          </a>
        </div>
      </section>
    </main>
  `
})
export class AboutComponent implements AfterViewInit {
  ngAfterViewInit() {
    if (typeof AOS !== 'undefined') {
      AOS.refresh();
    }
  }
}
