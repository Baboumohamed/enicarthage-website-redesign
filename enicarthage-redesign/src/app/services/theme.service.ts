import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type Theme = 'light' | 'dark' | 'system';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly THEME_KEY = 'enicarthage-theme';
  private themeSubject = new BehaviorSubject<Theme>(this.getStoredTheme());

  public theme$ = this.themeSubject.asObservable();

  constructor() {
    // Apply initial theme
    this.applyTheme(this.themeSubject.value);

    // Listen for system theme changes
    if (window.matchMedia) {
      const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
      darkModeQuery.addEventListener('change', (e) => {
        if (this.themeSubject.value === 'system') {
          this.applyTheme('system');
        }
      });
    }
  }

  /**
   * Get current theme
   */
  getTheme(): Theme {
    return this.themeSubject.value;
  }

  /**
   * Set theme
   */
  setTheme(theme: Theme): void {
    this.themeSubject.next(theme);
    localStorage.setItem(this.THEME_KEY, theme);
    this.applyTheme(theme);
  }

  /**
   * Toggle between light and dark themes
   */
  toggleTheme(): void {
    const current = this.themeSubject.value;
    const newTheme: Theme = current === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  /**
   * Check if dark mode is active
   */
  isDarkMode(): boolean {
    const theme = this.themeSubject.value;
    if (theme === 'system') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return theme === 'dark';
  }

  /**
   * Get stored theme from localStorage
   */
  private getStoredTheme(): Theme {
    const stored = localStorage.getItem(this.THEME_KEY) as Theme | null;
    if (stored && ['light', 'dark', 'system'].includes(stored)) {
      return stored;
    }
    return 'system';
  }

  /**
   * Apply theme to document
   */
  private applyTheme(theme: Theme): void {
    const html = document.documentElement;
    const isDark = theme === 'dark' || (theme === 'system' && this.isSystemDark());

    if (isDark) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }

  /**
   * Check if system prefers dark mode
   */
  private isSystemDark(): boolean {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
}
