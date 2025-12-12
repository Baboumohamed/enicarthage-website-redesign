import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <!-- Top Bar -->
    <div class="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white text-sm hidden lg:block">
      <div class="container mx-auto px-6 lg:px-16">
        <div class="flex items-center justify-between h-10">
          <!-- Left Links -->
          <div class="flex items-center gap-6">
            <a href="#" class="hover:text-blue-400 transition-colors flex items-center gap-1.5 text-gray-300">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              Documents
            </a>
            <a routerLink="/events" class="hover:text-blue-400 transition-colors flex items-center gap-1.5 text-gray-300">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              Agenda
            </a>
            <a routerLink="/contact" class="hover:text-blue-400 transition-colors flex items-center gap-1.5 text-gray-300">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              Contact
            </a>
          </div>

          <!-- Right Side -->
          <div class="flex items-center gap-4">
            <!-- Social Links -->
            <div class="flex items-center gap-3">
              <a href="#" target="_blank" class="hover:text-blue-400 transition-colors text-gray-400">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" target="_blank" class="hover:text-blue-400 transition-colors text-gray-400">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" target="_blank" class="hover:text-blue-400 transition-colors text-gray-400">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>

            <!-- Language Toggle -->
            <div class="flex items-center gap-2 border-l border-gray-600 pl-4">
              <button class="hover:text-blue-400 transition-colors font-medium text-white">FR</button>
              <span class="text-gray-600">|</span>
              <button class="hover:text-blue-400 transition-colors text-gray-400">EN</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Navigation -->
    <nav 
      class="sticky top-0 z-50 bg-white border-b border-gray-200 transition-all duration-300"
      [class.shadow-lg]="isScrolled"
    >
      <div class="container mx-auto px-6 lg:px-16">
        <div class="flex items-center justify-between h-16">
          <!-- Logo -->
          <a routerLink="/" class="flex items-center gap-3 group">
            <img 
              src="/assets/images/enicarthage-logo.png" 
              alt="ENICarthage Logo"
              class="h-12 w-auto object-contain"
            />
          </a>

          <!-- Desktop Menu -->
          <div class="hidden lg:flex items-center gap-1">
            <a
              routerLink="/"
              routerLinkActive="text-blue-600"
              [routerLinkActiveOptions]="{ exact: true }"
              class="px-4 py-2 text-slate-700 hover:text-blue-600 transition-colors font-medium"
            >
              Accueil
            </a>

            <a
              routerLink="/news"
              routerLinkActive="text-blue-600"
              class="px-4 py-2 text-slate-700 hover:text-blue-600 transition-colors font-medium"
            >
              Actualités
            </a>

            <!-- École Dropdown -->
            <div class="relative group">
              <button class="px-4 py-2 text-slate-700 hover:text-blue-600 transition-colors font-medium flex items-center gap-1">
                École
                <svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div class="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100 py-2">
                <a routerLink="/about" class="block px-4 py-2.5 text-slate-700 hover:bg-gray-50 hover:text-blue-600 transition-colors">À propos</a>
                <a href="#" class="block px-4 py-2.5 text-slate-700 hover:bg-gray-50 hover:text-blue-600 transition-colors">Organigramme</a>
                <a href="#" class="block px-4 py-2.5 text-slate-700 hover:bg-gray-50 hover:text-blue-600 transition-colors">Équipe enseignante</a>
                <a href="#" class="block px-4 py-2.5 text-slate-700 hover:bg-gray-50 hover:text-blue-600 transition-colors">Clubs de l'école</a>
              </div>
            </div>

            <!-- Formations Dropdown -->
            <div class="relative group">
              <button class="px-4 py-2 text-slate-700 hover:text-blue-600 transition-colors font-medium flex items-center gap-1">
                Formations
                <svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div class="absolute top-full left-0 mt-1 w-72 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100">
                <div class="p-4 border-b border-gray-100">
                  <h4 class="font-semibold text-slate-800 mb-2 text-sm">Cycles Ingénieurs</h4>
                  <a routerLink="/academics" class="block py-1.5 text-sm text-slate-600 hover:text-blue-600">GSIL</a>
                  <a routerLink="/academics" class="block py-1.5 text-sm text-slate-600 hover:text-blue-600">Mécatronique</a>
                  <a routerLink="/academics" class="block py-1.5 text-sm text-slate-600 hover:text-blue-600">Informatique</a>
                  <a routerLink="/academics" class="block py-1.5 text-sm text-slate-600 hover:text-blue-600">Infotronique</a>
                </div>
                <div class="p-4">
                  <h4 class="font-semibold text-slate-800 mb-2 text-sm">Mastères</h4>
                  <a routerLink="/academics" class="block py-1.5 text-sm text-slate-600 hover:text-blue-600">ARTI</a>
                  <a routerLink="/academics" class="block py-1.5 text-sm text-slate-600 hover:text-blue-600">TIC</a>
                  <a routerLink="/academics" class="block py-1.5 text-sm text-slate-600 hover:text-blue-600">MPSDM</a>
                </div>
              </div>
            </div>

            <!-- Recherche Dropdown -->
            <div class="relative group">
              <button class="px-4 py-2 text-slate-700 hover:text-blue-600 transition-colors font-medium flex items-center gap-1">
                Recherche
                <svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div class="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100 py-2">
                <a href="#" class="block px-4 py-2.5 text-slate-700 hover:bg-gray-50 hover:text-blue-600 transition-colors">Laboratoires</a>
                <a href="#" class="block px-4 py-2.5 text-slate-700 hover:bg-gray-50 hover:text-blue-600 transition-colors">Commission de thèse</a>
                <a href="#" class="block px-4 py-2.5 text-slate-700 hover:bg-gray-50 hover:text-blue-600 transition-colors">Projets</a>
              </div>
            </div>

            <!-- Opportunités Dropdown -->
            <div class="relative group">
              <button class="px-4 py-2 text-slate-700 hover:text-blue-600 transition-colors font-medium flex items-center gap-1">
                Opportunités
                <svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div class="absolute top-full right-0 mt-1 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100 py-2">
                <a href="#" class="block px-4 py-2.5 text-slate-700 hover:bg-gray-50 hover:text-blue-600 transition-colors">Emploi et Stages</a>
                <a href="#" class="block px-4 py-2.5 text-slate-700 hover:bg-gray-50 hover:text-blue-600 transition-colors">Bourses</a>
                <a href="#" class="block px-4 py-2.5 text-slate-700 hover:bg-gray-50 hover:text-blue-600 transition-colors">Coopérations</a>
              </div>
            </div>

            <!-- Search Button -->
            <button class="ml-2 p-2 text-slate-500 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-colors">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </div>

          <!-- Mobile Menu Button -->
          <button
            (click)="toggleMobileMenu()"
            class="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors text-slate-700"
          >
            <svg *ngIf="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            <svg *ngIf="mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div 
        *ngIf="mobileMenuOpen" 
        class="lg:hidden border-t border-gray-200 bg-white"
      >
        <div class="container mx-auto px-4 py-4">
          <a
            routerLink="/"
            (click)="closeMobileMenu()"
            class="block px-4 py-3 text-slate-700 hover:bg-gray-50 rounded-lg font-medium"
          >
            Accueil
          </a>
          <a
            routerLink="/news"
            (click)="closeMobileMenu()"
            class="block px-4 py-3 text-slate-700 hover:bg-gray-50 rounded-lg font-medium"
          >
            Actualités
          </a>
          <a
            routerLink="/about"
            (click)="closeMobileMenu()"
            class="block px-4 py-3 text-slate-700 hover:bg-gray-50 rounded-lg font-medium"
          >
            À propos
          </a>
          <a
            routerLink="/academics"
            (click)="closeMobileMenu()"
            class="block px-4 py-3 text-slate-700 hover:bg-gray-50 rounded-lg font-medium"
          >
            Formations
          </a>
          <a
            routerLink="/contact"
            (click)="closeMobileMenu()"
            class="block px-4 py-3 text-slate-700 hover:bg-gray-50 rounded-lg font-medium"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  `,
  styles: []
})
export class NavbarComponent implements OnInit {
  mobileMenuOpen = false;
  isScrolled = false;

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  ngOnInit(): void { }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }
}
