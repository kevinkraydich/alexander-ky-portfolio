import { Component } from '@angular/core';

interface Hobby {
  title: string;
  body: string;
  image: string;
}

@Component({
  selector: 'app-hobbies',
  standalone: true,
  templateUrl: './hobbies.html',
  styleUrl: './hobbies.scss',
})
export class HobbiesComponent {
  readonly hobbies: Hobby[] = [
    {
      title: 'Rowing',
      body: 'Three seasons as a coxswain with the Michigan Men\'s Rowing Team, now coaching novice and intermediate rowers at the Grand Rapids Rowing Club.',
      image: 'images/rowing.jpg',
    },
    {
      title: 'Cooking',
      body: 'Co-founded Side Door in Ann Arbor to share home-cooked food with a cultural twist. Still happiest trying new recipes with friends.',
      image: 'images/cooking.png',
    },
    {
      title: 'Teaching & Mentoring',
      body: 'Tutor math and physics through Nucleus Tutoring, coach West Ottawa Science Olympiad, and taught chemistry fundamentals via Quantum Physics for Kids.',
      image: 'images/mentoring.png',
    },
  ];
}
