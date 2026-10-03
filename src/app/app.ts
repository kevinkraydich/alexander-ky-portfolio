import {
  AfterViewInit,
  Component,
  DestroyRef,
  ElementRef,
  HostListener,
  inject,
  signal,
  viewChild,
} from '@angular/core';

import { NavComponent } from './components/nav/nav';
import { HeroComponent } from './components/hero/hero';
import { AboutComponent } from './components/about/about';
import { ResumeComponent } from './components/resume/resume';
import { ResearchComponent } from './components/research/research';
import { HobbiesComponent } from './components/hobbies/hobbies';
import { ContactComponent } from './components/contact/contact';

type SectionKey = 'home' | 'about' | 'resume' | 'research' | 'hobbies' | 'contact';

const DARK_SECTIONS: ReadonlySet<SectionKey> = new Set(['about', 'research']);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavComponent,
    HeroComponent,
    AboutComponent,
    ResumeComponent,
    ResearchComponent,
    HobbiesComponent,
    ContactComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements AfterViewInit {
  private readonly destroyRef = inject(DestroyRef);

  readonly activeSection = signal<SectionKey>('home');
  readonly navVisible = signal(false);

  private readonly homeRef = viewChild<ElementRef<HTMLElement>>('homeSection');
  private readonly aboutRef = viewChild<ElementRef<HTMLElement>>('aboutSection');
  private readonly resumeRef = viewChild<ElementRef<HTMLElement>>('resumeSection');
  private readonly researchRef = viewChild<ElementRef<HTMLElement>>('researchSection');
  private readonly hobbiesRef = viewChild<ElementRef<HTMLElement>>('hobbiesSection');
  private readonly contactRef = viewChild<ElementRef<HTMLElement>>('contactSection');

  ngAfterViewInit(): void {
    queueMicrotask(() => this.updateFromScroll());
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.updateFromScroll();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.updateFromScroll();
  }

  private updateFromScroll(): void {
    const sections: Array<[SectionKey, ElementRef<HTMLElement> | undefined]> = [
      ['home', this.homeRef()],
      ['about', this.aboutRef()],
      ['resume', this.resumeRef()],
      ['research', this.researchRef()],
      ['hobbies', this.hobbiesRef()],
      ['contact', this.contactRef()],
    ];

    const midpoint = window.innerHeight / 2;
    for (const [key, ref] of sections) {
      const el = ref?.nativeElement;
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      if (rect.top < midpoint && rect.bottom > midpoint) {
        if (this.activeSection() !== key) {
          this.activeSection.set(key);
          this.applyTheme(key);
        }
        break;
      }
    }

    this.navVisible.set(this.activeSection() !== 'home');
  }

  private applyTheme(key: SectionKey): void {
    const body = document.body;
    if (DARK_SECTIONS.has(key)) {
      body.classList.add('theme-dark');
    } else {
      body.classList.remove('theme-dark');
    }
  }
}
