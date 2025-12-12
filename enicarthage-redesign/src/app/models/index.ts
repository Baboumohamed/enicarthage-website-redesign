/**
 * Data Models and TypeScript Interfaces
 */

export interface NewsItem {
  id: string;
  title: string;
  description: string;
  content: string;
  category: string;
  image: string;
  date: string;
  author?: string;
  featured?: boolean;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  startTime: string;
  endTime: string;
  location: string;
  image?: string;
  category: 'academic' | 'cultural' | 'sports' | 'seminar' | 'other';
  isFeatured?: boolean;
}

export interface Department {
  id: string;
  name: string;
  shortName: string;
  description: string;
  image: string;
  icon: string;
  foundedYear?: number;
  headOfDepartment?: string;
  studentCount?: number;
  facultyCount?: number;
  specializations: string[];
  slug: string;
}

export interface Person {
  id: string;
  name: string;
  title: string;
  department: string;
  email?: string;
  phone?: string;
  image?: string;
  bio?: string;
  specialization?: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  image?: string;
  category: string;
  link?: string;
}

export interface NavigationItem {
  label: string;
  path: string;
  icon?: string;
  children?: NavigationItem[];
  external?: boolean;
}

export interface HomePage {
  hero: {
    title: string;
    subtitle: string;
    backgroundImage: string;
    ctaButtons: CTA[];
  };
  featuredNews: number;
  quickLinks: QuickLink[];
  statistics: Statistic[];
}

export interface CTA {
  label: string;
  link: string;
  variant: 'primary' | 'secondary' | 'outline';
  external?: boolean;
}

export interface QuickLink {
  title: string;
  description: string;
  icon: string;
  link: string;
  color: string;
}

export interface Statistic {
  label: string;
  value: string | number;
  icon: string;
}

export interface Contact {
  address: string;
  phone: string;
  email: string;
  website?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface SocialLink {
  platform: 'facebook' | 'twitter' | 'linkedin' | 'instagram' | 'youtube';
  url: string;
  icon?: string;
}

export interface FooterLink {
  label: string;
  url: string;
  external?: boolean;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}
