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
      body: 'Former coxswain for the University of Michigan Men’s Rowing Team and freshman coach for the Grand Rapids Rowing Club High School/Junior Program.',
      image: 'images/rowing.jpg',
    },
    {
      title: 'Cooking',
      body: 'I helped launch Side Door, a pop-up dining experience in Ann Arbor where I shared my love for food and culture. I also enjoy experimenting with molecular gastronomy, exploring new ingredients, and bringing friends together over a home-cooked meal.',
      image: 'images/cooking.png',
    },
    {
      title: 'Teaching & Mentoring',
      body: 'I’ve shared my passion for science and education by tutoring math and physics through Nucleus Tutoring, coaching West Ottawa Science Olympiad students, and introducing younger students to chemistry and physics through Quantum Physics for Kids.',
      image: 'images/mentoring.png',
    },
  ];
}
