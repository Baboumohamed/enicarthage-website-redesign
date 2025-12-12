import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <!-- Hero Section -->
    <section class="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 40px 40px;"></div>
      </div>
      <div class="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
      
      <div class="relative z-10 container mx-auto px-6 lg:px-16">
        <a routerLink="/academics" class="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 mb-6 transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          Retour aux formations
        </a>
        <ng-container *ngIf="department">
          <span class="inline-block px-4 py-1.5 bg-blue-500/20 text-blue-300 text-xs font-medium rounded-full mb-4 backdrop-blur-sm border border-blue-400/20">
            {{department.type}}
          </span>
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            {{department.title}}
          </h1>
          <p class="text-lg text-white/70 max-w-2xl">
            {{department.subtitle}}
          </p>
        </ng-container>
      </div>
    </section>

    <!-- Main Content -->
    <main class="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div class="container mx-auto px-6 lg:px-16">
        
        <div class="grid lg:grid-cols-3 gap-12">
          <!-- Main Info -->
          <div class="lg:col-span-2 space-y-12">
            
            <!-- Objectif de la formation -->
            <section class="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <h2 class="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <div class="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                Objectif de la formation
              </h2>
              <p class="text-gray-600 leading-relaxed mb-4">
                La formation d'ingénieur informatique permet d'acquérir les compétences nécessaires au métier:
              </p>
              <ul class="space-y-3">
                <li *ngFor="let obj of department?.objectives" class="flex items-start gap-3">
                  <svg class="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-600">{{ obj }}</span>
                </li>
              </ul>
            </section>

            <!-- L'ingénieur -->
            <section class="bg-white rounded-3xl p-8 shadow-lg border border-gray-100" *ngIf="department">
              <h2 class="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <div class="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </div>
                {{department.engineerTitle}}
              </h2>
              <p class="text-gray-600 leading-relaxed">
                {{ department?.engineerDescription }}
              </p>
            </section>

            <!-- Métiers et domaines -->
            <section class="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <h2 class="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <div class="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                Métiers et domaines
              </h2>
              <p class="text-gray-600 mb-6">La formation de l'élève ingénieur informatique lui prépare à occuper une myriade d'emplois à savoir :</p>
              
              <div class="space-y-6">
                <div *ngFor="let domain of department?.domains" class="bg-gray-50 rounded-2xl p-6">
                  <h3 class="font-bold text-slate-900 mb-3 text-lg">{{ domain.name }}</h3>
                  <ul class="grid md:grid-cols-2 gap-2">
                    <li *ngFor="let job of domain.jobs" class="flex items-center gap-2 text-gray-600 text-sm">
                      <div class="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      {{ job }}
                    </li>
                  </ul>
                </div>
              </div>
              
              <p class="text-gray-600 mt-6 text-sm">
                En outre, l'ingénieur informatique peut évoluer aussi bien vers les ressources humaines, que vers le marketing et bien souvent vers des fonctions de direction voire occuper des postes de haute responsabilité à savoir: Team Manager, Project Manager, DSI, Consulting, Cyber défense...
              </p>
            </section>

            <!-- Contenu de la formation -->
            <section class="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <h2 class="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <div class="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                </div>
                Contenu de la formation
              </h2>
              <p class="text-gray-600 mb-6">
                La formation d'ingénieur informatique de l'ENICarthage offre la possibilité de choisir, en classe terminale, une filière parmi trois apportant respectivement des compétences professionnelles spécifiques au métier de futur ingénieur afin de favoriser son insertion professionnelle.
              </p>
              
              <div class="grid md:grid-cols-3 gap-6">
                <div *ngFor="let track of department?.tracks" class="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6 border border-blue-200">
                  <h3 class="font-bold text-slate-900 mb-4">{{ track.name }}</h3>
                  <ul class="space-y-2">
                    <li *ngFor="let course of track.courses" class="text-gray-600 text-sm flex items-start gap-2">
                      <div class="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                      {{ course }}
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <!-- Cursus et stages -->
            <section class="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <h2 class="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <div class="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                Cursus et stages
              </h2>
              <p class="text-gray-600 mb-4">La formation des élèves ingénieurs en génie informatique s'étale sur trois années :</p>
              <ul class="space-y-3 mb-6">
                <li class="flex items-start gap-3">
                  <svg class="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-600">Une première année et une deuxième année comportant chacune deux semestres d'enseignement et un mois de stage professionnel.</span>
                </li>
                <li class="flex items-start gap-3">
                  <svg class="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-600">Une troisième année comportant un semestre d'enseignement de spécialité et un semestre de PFE.</span>
                </li>
              </ul>
              
              <p class="text-gray-600 mb-4">Durant sa formation, l'élève ingénieur suit une panoplie de matières pouvant être regroupées en :</p>
              <ul class="space-y-2">
                <li class="flex items-center gap-2 text-gray-600">
                  <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Matières relevant des sciences de l'informatique
                </li>
                <li class="flex items-center gap-2 text-gray-600">
                  <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Matières relevant des sciences fondamentales
                </li>
                <li class="flex items-center gap-2 text-gray-600">
                  <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Matières socioculturelles
                </li>
              </ul>
            </section>

            <!-- Certification -->
            <section class="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <h2 class="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <div class="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                  </svg>
                </div>
                Certification
              </h2>
              <p class="text-gray-600 leading-relaxed">
                Le département de génie informatique est un centre académique, ce qui lui permet d'offrir à ses étudiants plusieurs certifications internationales, dont les contenus sont inclus dans le cursus de la formation.
              </p>
            </section>

            <!-- Vie estudiantine -->
            <section class="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <h2 class="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <div class="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                Vie estudiantine
              </h2>
              <p class="text-gray-600 leading-relaxed mb-4">
                Durant toute l'année universitaire, l'élève ingénieur en informatique participe à plusieurs manifestations, à savoir : Journées portes ouvertes, Visites d'entreprises, Voyage d'études, Séminaires de formation assurées par des experts, Compétitions nationales et internationales.
              </p>
              <p class="text-gray-600 leading-relaxed">
                En outre, des formations complémentaires (DotNet, C#, JEE, Android, iOS, HTML5, JS, drone, Python…) sont couramment organisées par le département en collaboration avec les clubs (JokerInfo, IEEE SB, NETLinks, Security-Lab, ESTI.Net, MobiClub, InPix…) de l'école. Toutes ces activités ont permis aux élèves ingénieurs de participer à des concours internationaux (SmartSec15, HackFest15…) et de gagner des trophées dans diverses championnats à l'instar de l'ImagineCup 2014 (première place sur le plan national et deuxième place sur le plan international).
              </p>
            </section>
          </div>

          <!-- Sidebar -->
          <div class="space-y-6">
            <!-- Informations Clés -->
            <div class="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 border border-blue-200 sticky top-24">
              <h3 class="text-xl font-bold text-slate-900 mb-6">Informations Clés</h3>
              <ul class="space-y-4">
                <li class="flex items-center gap-4">
                  <div class="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <svg class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <p class="text-sm text-gray-500">Durée</p>
                    <p class="font-semibold text-slate-900">3 ans</p>
                  </div>
                </li>
                <li class="flex items-center gap-4">
                  <div class="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <svg class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                  <div>
                    <p class="text-sm text-gray-500">Diplôme</p>
                    <p class="font-semibold text-slate-900">Diplôme National d'Ingénieur</p>
                  </div>
                </li>
                <li class="flex items-center gap-4">
                  <div class="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <svg class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                    </svg>
                  </div>
                  <div>
                    <p class="text-sm text-gray-500">Département</p>
                    <p class="font-semibold text-slate-900">Génie Informatique</p>
                  </div>
                </li>
                <li class="flex items-center gap-4">
                  <div class="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <svg class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                    </svg>
                  </div>
                  <div>
                    <p class="text-sm text-gray-500">Admission</p>
                    <p class="font-semibold text-slate-900">Concours National</p>
                  </div>
                </li>
                <li class="flex items-center gap-4">
                  <div class="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <svg class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                    </svg>
                  </div>
                  <div>
                    <p class="text-sm text-gray-500">Filières en 3ème année</p>
                    <p class="font-semibold text-slate-900">3 spécialités</p>
                  </div>
                </li>
              </ul>

              <!-- Download PDF -->
              <a 
                href="#" 
                class="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-2xl transition-all shadow-lg"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                Télécharger les plans d'études
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- CTA Section -->
    <section class="py-20 bg-slate-900 relative overflow-hidden">
      <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 32px 32px;"></div>
      </div>
      <div class="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <div class="container mx-auto px-6 lg:px-16 relative z-10 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Intéressé par cette formation ?</h2>
        <p class="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          Découvrez comment postuler à l'ENICarthage
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            routerLink="/academics" 
            class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-full hover:from-blue-600 hover:to-blue-700 transition-all hover:scale-105 shadow-lg shadow-blue-500/25"
          >
            Voir toutes les formations
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {
  department: any = null;
  departmentId: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.departmentId = params['slug'];
      this.loadDepartment();
    });
  }

  loadDepartment(): void {
    const departments: any = {
      'informatique': {
        title: 'Informatique',
        type: 'Cycle Ingénieur',
        subtitle: 'Formation d\'ingénieur en Génie Informatique',
        engineerTitle: 'L\'ingénieur en Génie Informatique',
        engineerDescription: 'L\'ingénieur en génie informatique formé à l\'ENICarthage possède de bonnes connaissances technologiques et scientifiques, et a une approche axée sur la résolution de problèmes et la rentabilité. Il est également conscient des incidences sociales, économiques et écologiques de ses projets.',
        objectives: [
          'Maîtriser les méthodes et les techniques du développement logiciel',
          'Concevoir l\'architecture des systèmes à réaliser',
          'Maîtriser les démarches et les outils permettant de construire, d\'évaluer et de maintenir des systèmes robustes et évolutifs',
          'Appréhender les caractéristiques des composants matériels et logiciels',
          'Concevoir des solutions prenant en compte des exigences qualitatives particulières telles que Sécurité, Sûreté de fonctionnement, Qualité de service…'
        ],
        domains: [
          {
            name: 'Domaine des Systèmes d\'Information',
            jobs: ['Architecte des systèmes d\'information', 'Auditeur des Systèmes d\'information', 'Programmeur-analyste', 'Développeur Web', 'Consultant en Business Intelligence']
          },
          {
            name: 'Domaine des Systèmes Embarqués',
            jobs: ['Ingénieur en conception de matériel', 'Programmeur des cartes embarquées', 'Développeur des applications mobiles', 'Concepteur des systèmes embarqués', 'Développeur des systèmes géomatiques']
          },
          {
            name: 'Domaine des Réseaux',
            jobs: ['Concepteur des systèmes et des réseaux', 'Administrateur des réseaux', 'Analyste des réseaux', 'Ingénierie des réseaux informatiques et des réseaux de télécommunication']
          }
        ],
        tracks: [
          {
            name: 'Système d\'Information',
            courses: ['Ingénierie des Systèmes d\'Information', 'Développement Web et SOA', 'Sécurité des Systèmes d\'information', 'Cloud et Grid Computing', 'Qualité et validation des logiciels']
          },
          {
            name: 'Systèmes Embarqués',
            courses: ['Linux embarqué', 'Sécurité des systèmes embarqués et mobiles', 'Validation et test des systèmes embarqués', 'Co-conception des systèmes', 'Programmation Mobile']
          },
          {
            name: 'Réseaux',
            courses: ['Ingénierie des réseaux mobiles', 'Sécurité des réseaux', 'Commutation des réseaux et accès aux réseaux étendus', 'Réseaux nouvelles générations', 'Administration des réseaux']
          }
        ]
      },
      'gsil': {
        title: 'GSIL',
        type: 'Cycle Ingénieur',
        subtitle: 'Génie des Systèmes Industriels et Logistiques',
        engineerTitle: 'L\'ingénieur GSIL',
        engineerDescription: 'L\'ingénieur GSIL formé à l\'ENICarthage est capable de concevoir, optimiser et gérer des systèmes industriels complexes. Cette formation allie les compétences techniques et managériales nécessaires pour répondre aux défis de l\'industrie moderne.',
        objectives: [
          'Maîtriser les techniques de gestion de production',
          'Optimiser les chaînes logistiques',
          'Concevoir des systèmes industriels performants',
          'Manager des équipes et des projets industriels',
          'Intégrer les nouvelles technologies dans l\'industrie'
        ],
        domains: [
          { name: 'Gestion de Production', jobs: ['Responsable production', 'Ingénieur méthodes', 'Planificateur industriel'] },
          { name: 'Logistique', jobs: ['Responsable logistique', 'Supply Chain Manager', 'Consultant logistique'] },
          { name: 'Qualité', jobs: ['Ingénieur qualité', 'Auditeur qualité', 'Responsable amélioration continue'] }
        ],
        tracks: [
          { name: 'Production', courses: ['Gestion de production', 'Lean Manufacturing', 'Maintenance industrielle'] },
          { name: 'Logistique', courses: ['Supply Chain', 'Transport et distribution', 'Gestion des stocks'] },
          { name: 'Qualité', courses: ['Management qualité', 'Normes ISO', 'Six Sigma'] }
        ]
      },
      'mecatronique': {
        title: 'Mécatronique',
        type: 'Cycle Ingénieur',
        subtitle: 'Systèmes Mécatroniques',
        engineerTitle: 'L\'ingénieur en Mécatronique',
        engineerDescription: 'L\'ingénieur en mécatronique formé à l\'ENICarthage maîtrise l\'intégration de la mécanique, de l\'électronique et de l\'informatique pour concevoir des systèmes intelligents et automatisés.',
        objectives: [
          'Concevoir des systèmes mécatroniques complets',
          'Intégrer mécanique, électronique et informatique',
          'Développer des systèmes robotiques',
          'Maîtriser l\'automatisation industrielle',
          'Innover dans les systèmes intelligents'
        ],
        domains: [
          { name: 'Robotique', jobs: ['Ingénieur robotique', 'Concepteur robot', 'Intégrateur automatisme'] },
          { name: 'Automobile', jobs: ['Ingénieur automobile', 'Concepteur véhicule', 'Responsable R&D'] },
          { name: 'Aéronautique', jobs: ['Ingénieur systèmes', 'Concepteur drones', 'Ingénieur maintenance'] }
        ],
        tracks: [
          { name: 'Robotique', courses: ['Robotique industrielle', 'Vision artificielle', 'Contrôle intelligent'] },
          { name: 'Automobile', courses: ['Systèmes embarqués auto', 'Véhicules autonomes', 'Électronique automobile'] },
          { name: 'Automatique', courses: ['Automatique avancée', 'Régulation', 'Systèmes temps réel'] }
        ]
      },
      'infotronique': {
        title: 'Infotronique',
        type: 'Cycle Ingénieur',
        subtitle: 'Informatique et Électronique',
        engineerTitle: 'L\'ingénieur en Infotronique',
        engineerDescription: 'L\'ingénieur en infotronique formé à l\'ENICarthage est spécialisé dans les systèmes embarqués, l\'IoT et les systèmes temps réel, préparé aux métiers de l\'électronique numérique et de l\'informatique industrielle.',
        objectives: [
          'Développer des systèmes embarqués',
          'Concevoir des solutions IoT',
          'Maîtriser l\'électronique numérique',
          'Programmer des systèmes temps réel',
          'Intégrer hardware et software'
        ],
        domains: [
          { name: 'Systèmes Embarqués', jobs: ['Ingénieur embarqué', 'Développeur firmware', 'Concepteur FPGA'] },
          { name: 'IoT', jobs: ['Architecte IoT', 'Développeur objets connectés', 'Ingénieur systèmes IoT'] },
          { name: 'Électronique', jobs: ['Ingénieur électronique', 'Concepteur circuits', 'Ingénieur test'] }
        ],
        tracks: [
          { name: 'Embarqué', courses: ['Systèmes embarqués', 'RTOS', 'Drivers et BSP'] },
          { name: 'IoT', courses: ['Protocoles IoT', 'Cloud IoT', 'Sécurité IoT'] },
          { name: 'Électronique', courses: ['FPGA/ASIC', 'Signal processing', 'Électronique de puissance'] }
        ]
      }
    };

    this.department = departments[this.departmentId] || departments['informatique'];
  }
}
