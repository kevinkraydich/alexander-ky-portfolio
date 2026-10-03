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
    { label: 'Curriculum Vitae', href: '#resume' },
    { label: 'Research', href: '#research' },
    { label: 'Hobbies', href: '#hobbies' },
    { label: 'Contact', href: '#contact' },
  ];
}
