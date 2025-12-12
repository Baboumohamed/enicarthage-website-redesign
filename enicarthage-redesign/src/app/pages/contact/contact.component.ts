import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <!-- Hero Section - Dark -->
    <section class="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 40px 40px;"></div>
      </div>
      <div class="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
      
      <div class="relative z-10 container mx-auto px-6 lg:px-16 text-center">
        <span class="inline-block px-4 py-1.5 bg-blue-500/20 text-blue-300 text-xs font-medium rounded-full mb-4 backdrop-blur-sm border border-blue-400/20">
          Nous sommes à votre écoute
        </span>
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Contact
        </h1>
        <p class="text-lg text-white/70 max-w-2xl mx-auto">
          Notre équipe est disponible pour répondre à toutes vos questions
        </p>
      </div>
    </section>

    <!-- Contact Section - LIGHT (like Home page News section) -->
    <section class="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div class="container mx-auto px-6 lg:px-16">
        
        <!-- Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">Contactez-nous</h2>
          <p class="text-xl text-gray-500">Local principal de l'ENICarthage</p>
        </div>
        
        <div class="grid lg:grid-cols-[1fr_auto_1.5fr] gap-8 lg:gap-12">
          
          <!-- Contact Info Cards - White -->
          <div class="space-y-6">
            <!-- Address Card -->
            <div class="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:-translate-y-2 group">
              <div class="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/25">
                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">Adresse</h3>
              <p class="text-slate-700">45 Rue des Entrepreneurs 2035</p>
              <p class="text-slate-600 text-sm">Charguia II Tunis-Carthage-Tunisie</p>
            </div>

            <!-- Phone Card -->
            <div class="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:-translate-y-2 group">
              <div class="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/25">
                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">Téléphone</h3>
              <p class="text-blue-600 font-medium">TEL: (+216) 71 941 579</p>
              <p class="text-blue-600 font-medium">TEL: (+216) 71 940 699</p>
              <p class="text-slate-600 text-sm mt-2">FAX: (+216) 71 941 579</p>
            </div>

            <!-- Email Card -->
            <div class="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:-translate-y-2 group">
              <div class="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/25">
                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">Email</h3>
              <p class="text-blue-600 font-medium">contact.enicarthage&#64;enicar.ucar.tn</p>
            </div>
          </div>
          
          <!-- Divider -->
          <div class="hidden lg:flex flex-col items-center justify-center py-10">
            <div class="w-3 h-3 rounded-full bg-blue-500 shadow-lg shadow-blue-500/30"></div>
            <div class="w-px flex-1 bg-gradient-to-b from-blue-400 via-blue-200 to-transparent my-2"></div>
            <div class="w-10 h-10 rounded-full bg-white border-2 border-blue-100 flex items-center justify-center shadow-lg">
              <svg class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
              </svg>
            </div>
            <div class="w-px flex-1 bg-gradient-to-b from-transparent via-blue-200 to-blue-400 my-2"></div>
            <div class="w-3 h-3 rounded-full bg-blue-500 shadow-lg shadow-blue-500/30"></div>
          </div>
          
          <!-- Contact Form - White -->
          <div class="bg-white rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200">
            <h2 class="text-2xl font-bold text-slate-900 mb-2">Remplissez le formulaire</h2>
            <p class="text-slate-600 mb-8">Nous vous répondrons dans les plus brefs délais</p>
            
            <form class="space-y-6" (submit)="onSubmit($event)">
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-slate-700 mb-2">Nom</label>
                  <input 
                    type="text" 
                    [(ngModel)]="formData.name"
                    name="name"
                    placeholder="Votre nom"
                    class="w-full px-4 py-3.5 bg-white border border-blue-200 rounded-2xl text-slate-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  >
                </div>
                <div>
                  <label class="block text-sm font-medium text-slate-700 mb-2">Prénom</label>
                  <input 
                    type="text" 
                    [(ngModel)]="formData.prename"
                    name="prename"
                    placeholder="Votre prénom"
                    class="w-full px-4 py-3.5 bg-white border border-blue-200 rounded-2xl text-slate-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  >
                </div>
              </div>
              
              <div>
                <label class="block text-sm font-medium text-slate-700 mb-2">Email</label>
                <input 
                  type="email" 
                  [(ngModel)]="formData.email"
                  name="email"
                  placeholder="votre&#64;email.com"
                  class="w-full px-4 py-3.5 bg-white border border-blue-200 rounded-2xl text-slate-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                >
              </div>
              
              <div>
                <label class="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea 
                  [(ngModel)]="formData.message"
                  name="message"
                  rows="5"
                  placeholder="Écrivez votre message ici..."
                  class="w-full px-4 py-3.5 bg-white border border-blue-200 rounded-2xl text-slate-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit"
                class="w-full py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-2xl transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 flex items-center justify-center gap-2 group"
              >
                <span>Envoyer</span>
                <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg>
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>

    <!-- Administration Section - DARK -->
    <section class="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 40px 40px;"></div>
      </div>
      <div class="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
      
      <div class="container mx-auto px-6 lg:px-16 relative z-10">
        <div class="text-center mb-12">
          <span class="inline-block px-4 py-1.5 bg-blue-500/20 text-blue-300 text-xs font-medium rounded-full mb-4 backdrop-blur-sm border border-blue-400/20">
            Équipe Dirigeante
          </span>
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Administration</h2>
          <p class="text-blue-100/70 max-w-2xl mx-auto">Contacts de l'administration de l'école</p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div *ngFor="let admin of administration" class="group bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-blue-400/50 hover:bg-white/20 hover:-translate-y-1 transition-all duration-300">
            <p class="font-bold text-blue-300 text-sm mb-1">{{ admin.role }}</p>
            <p class="text-white font-medium">{{ admin.name }}</p>
            <p class="text-white/60 text-sm mt-2">{{ admin.email }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section - LIGHT -->
    <section class="py-20 bg-gradient-to-b from-slate-100 to-white">
      <div class="container mx-auto px-6 lg:px-16">
        <div class="text-center mb-12">
          <span class="inline-block px-4 py-1.5 bg-blue-100 text-blue-600 text-xs font-medium rounded-full mb-4">
            Nous trouver
          </span>
          <h2 class="text-2xl md:text-3xl font-bold text-slate-800 mb-3">Notre Localisation</h2>
          <p class="text-gray-500">Rejoignez-nous sur les réseaux sociaux</p>
        </div>
        
        <!-- Map -->
        <div class="bg-white rounded-3xl shadow-sm border border-gray-100 p-2 mb-12">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.8!2d10.1894!3d36.853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd350c5ed8c2e1%3A0x8d2cc82!2s45%20Rue%20des%20Entrepreneurs%2C%20Tunis!5e0!3m2!1sfr!2stn!4v1"
            class="w-full h-[400px] rounded-2xl"
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy"
          ></iframe>
        </div>

        <!-- Social Links -->
        <div class="flex flex-wrap justify-center items-center gap-6">
          <a href="https://www.facebook.com/Ecole-Nationale-dIng%C3%A9nieurs-de-Carthage-ENICarthage-532762086862252/?ref=bookmarks" target="_blank" class="group flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all">
            <div class="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </div>
            <span class="text-slate-700 font-medium group-hover:text-blue-600 transition-colors">Facebook</span>
          </a>
          <a href="#" class="group flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all">
            <div class="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </div>
            <span class="text-slate-700 font-medium group-hover:text-sky-500 transition-colors">Twitter</span>
          </a>
          <a href="#" class="group flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all">
            <div class="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <span class="text-slate-700 font-medium group-hover:text-blue-700 transition-colors">LinkedIn</span>
          </a>
          <a href="#" class="group flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-sm border border-gray-100 hover:shadow-lg hover:border-red-200 transition-all">
            <div class="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </div>
            <span class="text-slate-700 font-medium group-hover:text-red-600 transition-colors">YouTube</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Newsletter Section - DARK (merges with footer) -->
    <section class="py-20 bg-slate-900 relative overflow-hidden">
      <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 32px 32px;"></div>
      </div>
      <div class="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div class="container mx-auto px-6 lg:px-16 relative z-10">
        <div class="max-w-3xl mx-auto text-center">
          <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/25">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </div>
          <h2 class="text-2xl md:text-3xl font-bold text-white mb-3">Restez informé</h2>
          <p class="text-gray-400 mb-8">Inscrivez-vous à notre newsletter pour recevoir les dernières actualités</p>
          
          <form class="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
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
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }
    
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
  `]
})
export class ContactComponent {
  formData = {
    name: '',
    prename: '',
    email: '',
    message: ''
  };

  administration = [
    { role: 'Directeur', name: 'Houda BEN ATTIA Ep SETHOM', email: 'houda.benattia@enicar.ucar.tn' },
    { role: 'Secrétaire Général', name: 'Amel Ben Alaya', email: 'amel.benalaya@enicar.ucar.tn' },
    { role: 'Directrice des études', name: 'Imen Kammoun', email: 'imen.kammoun@enicar.ucar.tn' },
    { role: 'Directeur des stages', name: 'Faouzi Jaidi', email: 'faouzi.jaidi@enicar.ucar.tn' },
    { role: 'Dir. Génie Electrique', name: 'Lotfi Bouslimi', email: 'lotfi.bouslimi@enicar.ucar.tn' },
    { role: 'Dir. Informatique', name: 'Houssemeddine Hermassi', email: 'houcem.hermassi@enicar.ucar.tn' },
    { role: 'Dir. Génie Industriel', name: 'Basma Askri', email: 'basma.askri@enicar.ucar.tn' }
  ];

  onSubmit(event: Event) {
    event.preventDefault();
    alert('Merci pour votre message! Nous vous répondrons bientôt.');
    this.formData = { name: '', prename: '', email: '', message: '' };
  }
}
