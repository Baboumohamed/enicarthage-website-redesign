import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import {
  NewsItem,
  Event,
  Department,
  Person,
  Service,
  NavigationItem,
  HomePage,
  Contact,
  SocialLink,
  FooterSection,
} from '../models';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private baseUrl = '/assets/data';
  private cache = new Map<string, any>();
  private loadingSubject = new BehaviorSubject<boolean>(false);

  public loading$ = this.loadingSubject.asObservable();

  constructor(private http: HttpClient) {}

  /**
   * Get all news items
   */
  getNews(): Observable<NewsItem[]> {
    return this.getFromCache('news') || this.fetchData<NewsItem[]>('news.json', 'news');
  }

  /**
   * Get single news item by ID
   */
  getNewsById(id: string): Observable<NewsItem | undefined> {
    return this.getNews().pipe(
      map((items) => items.find((n) => n.id === id))
    );
  }

  /**
   * Get featured news items
   */
  getFeaturedNews(limit: number = 3): Observable<NewsItem[]> {
    return this.getNews().pipe(
      map((items) => items.filter((n) => n.featured).slice(0, limit))
    );
  }

  /**
   * Get all events
   */
  getEvents(): Observable<Event[]> {
    return this.getFromCache('events') || this.fetchData<Event[]>('events.json', 'events');
  }

  /**
   * Get upcoming events
   */
  getUpcomingEvents(limit?: number): Observable<Event[]> {
    return this.getEvents().pipe(
      map((items) => {
        const sorted = items
          .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
          .filter((e) => new Date(e.date) > new Date());
        if (limit) {
          return sorted.slice(0, limit);
        }
        return sorted;
      })
    );
  }

  /**
   * Get all departments
   */
  getDepartments(): Observable<Department[]> {
    return (
      this.getFromCache('departments') ||
      this.fetchData<Department[]>('departments.json', 'departments')
    );
  }

  /**
   * Get department by slug
   */
  getDepartmentBySlug(slug: string): Observable<Department | undefined> {
    return this.getDepartments().pipe(
      map((items) => items.find((d) => d.slug === slug))
    );
  }

  /**
   * Get all team members
   */
  getTeam(): Observable<Person[]> {
    return this.getFromCache('team') || this.fetchData<Person[]>('team.json', 'team');
  }

  /**
   * Get team members by department
   */
  getTeamByDepartment(department: string): Observable<Person[]> {
    return this.getTeam().pipe(
      map((items) => items.filter((p) => p.department === department))
    );
  }

  /**
   * Get all services
   */
  getServices(): Observable<Service[]> {
    return this.getFromCache('services') || this.fetchData<Service[]>('services.json', 'services');
  }

  /**
   * Get navigation menu
   */
  getNavigation(): Observable<NavigationItem[]> {
    return (
      this.getFromCache('navigation') ||
      this.fetchData<NavigationItem[]>('navigation.json', 'navigation')
    );
  }

  /**
   * Get home page data
   */
  getHomePage(): Observable<HomePage> {
    return (
      this.getFromCache('homepage') ||
      this.fetchData<HomePage>('homepage.json', 'homepage')
    );
  }

  /**
   * Get contact information
   */
  getContact(): Observable<Contact> {
    return (
      this.getFromCache('contact') || this.fetchData<Contact>('contact.json', 'contact')
    );
  }

  /**
   * Get social links
   */
  getSocialLinks(): Observable<SocialLink[]> {
    return (
      this.getFromCache('social') || this.fetchData<SocialLink[]>('social.json', 'social')
    );
  }

  /**
   * Get footer sections
   */
  getFooterSections(): Observable<FooterSection[]> {
    return (
      this.getFromCache('footer') || this.fetchData<FooterSection[]>('footer.json', 'footer')
    );
  }

  /**
   * Generic fetch method with caching
   */
  private fetchData<T>(filename: string, cacheKey: string): Observable<T> {
    this.loadingSubject.next(true);
    return this.http.get<T>(`${this.baseUrl}/${filename}`).pipe(
      tap((data) => {
        this.cache.set(cacheKey, data);
        this.loadingSubject.next(false);
      }),
      catchError((error) => {
        console.error(`Error loading ${filename}:`, error);
        this.loadingSubject.next(false);
        // Return empty array or object for graceful degradation
        return of(
          Array.isArray(error) ? [] : {} // Return empty array or object based on expected type
        ) as Observable<T>;
      })
    );
  }

  /**
   * Get data from cache
   */
  private getFromCache<T>(key: string): Observable<T> | null {
    const cached = this.cache.get(key);
    return cached ? of(cached) : null;
  }

  /**
   * Clear cache
   */
  clearCache(): void {
    this.cache.clear();
  }

  /**
   * Clear specific cache entry
   */
  clearCacheEntry(key: string): void {
    this.cache.delete(key);
  }
}
