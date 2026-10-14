import { Component, signal } from '@angular/core';

type ResumeTab =
  | 'education'
  | 'experience'
  | 'leadership'
  | 'awards'
  | 'service'
  | 'skills';

interface ResumeEntry {
  title: string;
  meta?: string;
  body?: string;
  bullets?: string[];
  logo?: { src: string; alt: string };
  groups?: Array<{ heading: string; items: string[] }>;
}

@Component({
  selector: 'app-resume',
  standalone: true,
  templateUrl: './resume.html',
  styleUrl: './resume.scss',
})
export class ResumeComponent {
  readonly activeTab = signal<ResumeTab>('education');

  readonly tabs: Array<{ id: ResumeTab; label: string }> = [
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'awards', label: 'Awards' },
    { id: 'service', label: 'Service' },
    { id: 'skills', label: 'Skills' },
  ];

  readonly education: ResumeEntry[] = [
    {
      title: 'Michigan State University — College of Human Medicine',
      meta: 'M.D. Candidate with Public Health Certificate · 08/2023 – 05/2027 · East Lansing, MI',
      body: 'Electives: Musculoskeletal (MSK), Microbiology, Lifestyle Medicine, Anesthesiology',
      logo: { src: 'images/spartanLogo.png', alt: 'Michigan State University' },
    },
    {
      title: 'University of Michigan',
      meta: 'B.S. in Biochemistry, Minor in Applied Statistics · 08/2018 – 04/2022 · Ann Arbor, MI',
      body: 'Literature, Science, and the Arts — Honors',
      logo: { src: 'images/michiganLogo.png', alt: 'University of Michigan' },
    },
  ];

  readonly experience: ResumeEntry[] = [
    {
      title: 'Health Record Grader',
      meta: '05/2026 – Present',
      bullets: [
        'Graded H&P and SOAP notes written by medical students during their simulation lab and worked with them on how to improve in preparation for their clinical rotations',
      ],
    },
    {
      title: 'Anatomy Lab Instructor',
      meta: '10/2024 – 03/2025',
      bullets: [
        'Helped prepare cadavers by labeling key structures for anatomy lab',
        'Held open lab hours for students to come and ask questions',
      ],
    },
    {
      title: 'Nucleus Tutoring — Tutor',
      meta: '02/2024 – 04/2026',
      bullets: [
        'Provided support with subjects such as Algebra, Chemistry, and Physics for high school and college students',
      ],
    },
    {
      title: 'Student Admissions Ambassador',
      meta: '08/2023 – 04/2024',
      bullets: [
        'Interviewed medical school applicants',
        'Conducted tours of the medical school campus and participated in panels for incoming medical students',
      ],
    },
    {
      title: 'Quantum Physics for Kids — Teacher',
      meta: '10/2022 – 01/2025',
      bullets: [
        'Used a gaming platform to teach chemistry fundamentals such as atomic structures and circuit making',
      ],
    },
    {
      title: 'West Ottawa Science Olympiad — Event Coach',
      meta: '01/2022 – 05/2025',
      bullets: [
        'Taught middle school students anatomy and physiology, epidemiology, and chemistry in preparation for competitions',
      ],
    },
    {
      title: 'IHA West Arbor Pediatrics, Ann Arbor — Medical Assistant',
      meta: '01/2021 – 07/2023',
      bullets: [
        'Performed procedures such as vaccinations, suture removals, and administration of medications while maintaining medical records accurately through EPIC and Michigan Care Improvement Registry (MICR)',
      ],
    },
    {
      title: 'Michigan Men’s Rowing Team, Ann Arbor — Coxswain',
      meta: '09/2019 – 12/2022',
      bullets: [
        'Trained with freshmen rowers as a coxswain to develop leadership experience',
      ],
    },
    {
      title: 'University of Michigan Housing, Ann Arbor — Residential Advisor',
      meta: '08/2019 – 04/2021',
      bullets: [
        'Guided over 50 freshmen through class scheduling and internship interviews',
        'Developed multiple programs with strong turnouts that were based on diversity, equity, and inclusion values',
      ],
    },
  ];

  readonly leadership: ResumeEntry[] = [
    {
      title: 'MSU-CHM Continuous Quality Improvement (CQI) Committee',
      meta: '01/2026 – Present',
      bullets: [
        'Offered advice on improvement of student resources during monthly meetings with administration',
      ],
    },
    {
      title: 'Lifestyle Medicine Interest Group (LMIG) — Vice President',
      meta: '04/2024 – 02/2025',
      bullets: [
        'Created an elective to teach medical students the core pillars of lifestyle medicine',
        'Organized events to help students and the community become active and engaged in a healthy lifestyle',
      ],
    },
    {
      title: 'Asian Pacific American Medical Student Association (APAMSA) — Social Chair',
      meta: '08/2023 – 02/2025',
      bullets: [
        'Attended conferences and presentations regarding Asian Pacific Americans in medicine to learn about disparities and current research',
        'Fostered a welcoming environment for incoming medical students',
      ],
    },
    {
      title: 'Grand Rapids Surgery Interest Group (GRSIG) — Officer',
      meta: '08/2023 – 02/2025',
      bullets: [
        'Led suturing elective to medical students to help them prepare for rotations',
        'Went out into the community to teach college students suture techniques and to answer questions about medical school',
      ],
    },
    {
      title: 'Emergency Medicine Interest Group (EMIG) — Officer',
      meta: '08/2023 – 02/2025',
      bullets: [
        'Hosted events to promote the field of emergency medicine',
        'Invited EM doctors to come speak to students to share what it is like in the emergency room',
      ],
    },
    {
      title: 'Side Door, Ann Arbor — Co-Founder',
      meta: '01/2023 – 08/2023',
      bullets: [
        'Researched recipes and expanded cooking repertoire through collaborations and classes',
        'Shared cultural understandings through home cooked foods with a cultural twist',
      ],
    },
    {
      title: 'University of Michigan Housing — Resstaff Coordinator',
      meta: '08/2021 – 05/2022',
      bullets: [
        'Oversaw 40 residential advisors to create an inclusive and well-run dormitory',
        'Advised hall council to create events and promote community within the dorm',
        'Addressed concerns and feedback with upper housing to help improve Resstaff',
      ],
    },
    {
      title: 'Phi Sigma Kappa Fraternity — Delta Deuteron Chapter Secretary',
      meta: '01/2019 – 01/2022',
      bullets: [
        'Maintained accurate chapter records and attendance',
        'Participated in philanthropy events to support Special Olympics',
      ],
    },
    {
      title: 'Asian American Association — Freshman Representative',
      meta: '09/2018 – 05/2019',
      bullets: [
        'Planned events that promoted cultural diversity and community building',
        'Recruited freshmen to engage with ongoing campus events',
      ],
    },
  ];

  readonly awards: ResumeEntry[] = [
    {
      title: 'Alpha Omega Alpha (AOA) Medical Honor Society',
      meta: '2026',
      bullets: [
        'Awarded to 20% from each class in recognition of outstanding academic record, leadership, scholarship, and professionalism',
      ],
    },
    {
      title: 'Gold Humanism Honor Society',
      meta: '2026',
      bullets: [
        'Awarded to 15% from each class for demonstrating patient-centered care by modeling integrity, excellence, compassion, altruism, respect and empathy',
      ],
    },
    {
      title: 'Medical Student Anesthesia Research Fellowship (MSARF)',
      meta: 'Foundation for Anesthesia Education and Research (FAER) · 2026',
      bullets: [
        'Competitive, nationally awarded fellowship supporting medical student research in anesthesiology',
      ],
    },
    {
      title: 'Florence Gravelle Oberg Endowed Memorial Scholarship',
      meta: '2026',
    },
    {
      title: 'Spartan Volunteer Service Award',
      meta: '2025',
      bullets: [
        'Over 100 volunteer hours of direct community engagement and services',
      ],
    },
    {
      title: 'West Michigan Medical Student Scholarship',
      meta: '2024',
    },
    {
      title: 'Health Policy Case Competition',
      meta: '2022',
      body: 'Awards: 1st Place and Anti-Racism and Economic Mobility Award',
      bullets: [
        'Explored ways to improve healthcare access and reducing health disparities in Michigan by addressing social determinants of health as well as developing policy to implement it',
      ],
    },
    {
      title: 'Phi Sigma Kappa National President’s Special Achievement Award for Campus Involvement',
      meta: '2019',
    },
    {
      title: 'Phi Sigma Kappa Delta Deuteron Scholarship',
      meta: '2019',
    },
    {
      title: 'Order of Omega Case Study Competition',
      meta: '2019',
      body: 'Award: 2nd Place',
      bullets: [
        'Investigated how to address scenarios involving greek-life on campus by proposing to use restorative practices rather than punitive measures to deal with situations',
      ],
    },
  ];

  readonly service: ResumeEntry[] = [
    {
      title: 'Wellness Services — Volunteer',
      meta: '04/2026 – Present',
      bullets: [
        'Delivered harm reduction care through a needle exchange program, including wound assessment and basic treatment for injection-related infections',
        'Provided patient-centered education on overdose prevention and safer substance use',
      ],
    },
    {
      title: 'Michigan State Medical Society',
      meta: '02/2026 – Present',
      bullets: [
        'Wrote and sponsored a resolution to make preventative and routine care transportation accessible, reliable, and patient-centered in Michigan',
      ],
    },
    {
      title: 'Battambang Provincial Referral Hospital — Volunteer',
      meta: '05/2025 – 06/2025',
      bullets: [
        'Assisted with patient triage, discharge education, and patient communication',
      ],
    },
    {
      title: 'Grand Rapids Rowing Club — Novice Coach',
      meta: '07/2024 – 05/2025',
      bullets: [
        'Fostered a supportive and collaborative environment to enhance athletes’ confidence, discipline, and sportsmanship',
        'Coached novice and intermediate rowers on proper rowing techniques, stroke mechanics, and teamwork strategies to improve performance',
      ],
    },
    {
      title: 'Hope Clinic — Clinical Assistant',
      meta: '06/2022 – 03/2023',
      bullets: [
        'Volunteered once a week to help establish care for underserved communities',
        'Worked with social workers and other specialists to provide well-rounded care',
      ],
    },
  ];

  readonly skills: ResumeEntry[] = [
    {
      title: 'Certifications',
      groups: [
        {
          heading: 'American Heart Association (AHA)',
          items: [
            'Advanced Cardiovascular Life Support (ACLS)',
            'Basic Life Support (BLS)',
          ],
        },
        {
          heading: 'Collaborative Institutional Training Initiative (CITI)',
          items: [
            'Social-Behavioral Human Subjects Researcher',
            'MSU Responsible Conduct of Research (RCR)',
            'Good Clinical Practice for Social & Behavioral Investigators',
            'Biomedical Research Investigators',
          ],
        },
        {
          heading: 'Other',
          items: [
            'University of Michigan Responsible Conduct of Research and Scholarship (RCRS) Training',
          ],
        },
      ],
    },
    {
      title: 'Clinical & Research Software',
      body: 'EPIC Systems (Research Fundamentals), Cerner / Oracle Health, MiChart, REDCap, RStudio, SPSS, Microsoft Excel / Word / PowerPoint.',
    },
    {
      title: 'Languages',
      bullets: [
        'English — Native fluency',
        'Khmer — Native fluency',
      ],
    },
    {
      title: 'Professional Affiliations',
      bullets: [
        'American Society of Anesthesiologists (ASA)',
        'American Medical Association (AMA)',
        'Asian Pacific American Medical Student Association (APAMSA)',
        'Michigan State Medical Society (MSMS)',
      ],
    },
  ];

  entriesFor(tab: ResumeTab): ResumeEntry[] {
    switch (tab) {
      case 'education':
        return this.education;
      case 'experience':
        return this.experience;
      case 'leadership':
        return this.leadership;
      case 'awards':
        return this.awards;
      case 'service':
        return this.service;
      case 'skills':
        return this.skills;
    }
  }

  select(tab: ResumeTab): void {
    this.activeTab.set(tab);
  }
}
