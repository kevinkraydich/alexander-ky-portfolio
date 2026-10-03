import { Component, input } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  templateUrl: './nav.html',
  styleUrl: './nav.scss',
})
export class NavComponent {
  readonly visible = input(false);

  readonly links = [
    { label: 'About', href: '#about' },
    { label: 'Resume', href: '#resume' },
    { label: 'Research', href: '#research' },
    { label: 'Contact', href: '#contact' },
  ];
}
