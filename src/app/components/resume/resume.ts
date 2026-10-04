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
      meta: 'M.D. Candidate with Public Health Certificate · Fall 2023 – Spring 2027',
      body: 'Electives: Musculoskeletal (MSK), Microbiology, Lifestyle Medicine, Anesthesiology.',
      logo: { src: 'images/spartanLogo.png', alt: 'Michigan State University' },
    },
    {
      title: 'University of Michigan, Ann Arbor',
      meta: 'B.S. in Biochemistry, Minor in Applied Statistics · Fall 2018 – Spring 2022',
      body: 'Literature, Science, and the Arts — Honors Program.',
      logo: { src: 'images/michiganLogo.png', alt: 'University of Michigan' },
    },
  ];

  readonly experience: ResumeEntry[] = [
    {
      title: 'Health Record Grader — MSU-CHM',
      meta: '05/2026 – Present',
      body: 'Graded H&P and SOAP notes written by medical students during their simulation lab and worked with them on how to improve in preparation for their clinical rotations.',
    },
    {
      title: 'Anatomy Lab Instructor — MSU-CHM',
      meta: '10/2024 – 03/2025',
      body: 'Prepared cadavers by labeling key structures and held open lab hours for student questions.',
    },
    {
      title: 'Tutor — Nucleus Tutoring',
      meta: '02/2024 – 04/2026',
      body: 'Supported high school and college students in algebra, chemistry, and physics.',
    },
    {
      title: 'Student Admissions Ambassador — MSU-CHM',
      meta: '08/2023 – 04/2024',
      body: 'Interviewed applicants, led campus tours, and sat on panels for incoming medical students.',
    },
    {
      title: 'Teacher — Quantum Physics for Kids',
      meta: '10/2022 – 01/2025',
      body: 'Taught atomic structure and circuit fundamentals through an interactive gaming platform.',
    },
    {
      title: 'Event Coach — West Ottawa Science Olympiad',
      meta: '01/2022 – 05/2025',
      body: 'Coached middle schoolers in anatomy & physiology, epidemiology, and chemistry for competition.',
    },
    {
      title: 'Medical Assistant — IHA West Arbor Pediatrics',
      meta: '01/2021 – 07/2023',
      body: 'Administered vaccinations and medications, removed sutures, and maintained records in EPIC and MICR.',
    },
    {
      title: 'Coxswain — Michigan Men’s Rowing Team',
      meta: '09/2019 – 12/2022',
      body: 'Trained with freshman rowers while developing on-the-water leadership.',
    },
    {
      title: 'Residential Advisor — University of Michigan Housing',
      meta: '08/2019 – 04/2021',
      body: 'Guided 50+ freshmen through scheduling and interviews; built DEI-focused programming.',
    },
  ];

  readonly leadership: ResumeEntry[] = [
    {
      title: 'MSU-CHM Continuous Quality Improvement (CQI) Committee',
      meta: '01/2026 – Present',
      body: 'Monthly meetings with administration advising on student resource improvements.',
    },
    {
      title: 'Vice President — Lifestyle Medicine Interest Group (LMIG)',
      meta: '04/2024 – 02/2025',
      body: 'Created a student elective on the core pillars of lifestyle medicine and ran community wellness events.',
    },
    {
      title: 'Social Chair — Asian Pacific American Medical Student Association (APAMSA)',
      meta: '08/2023 – 02/2025',
      body: 'Attended national conferences on APA health disparities and fostered community for incoming students.',
    },
    {
      title: 'Officer — Grand Rapids Surgery Interest Group (GRSIG)',
      meta: '08/2023 – 02/2025',
      body: 'Led suture electives for medical students and taught suture technique at community outreach events.',
    },
    {
      title: 'Officer — Emergency Medicine Interest Group (EMIG)',
      meta: '08/2023 – 02/2025',
      body: 'Hosted EM promotional events and invited practicing EM physicians to speak with students.',
    },
    {
      title: 'Co-Founder — Side Door, Ann Arbor',
      meta: '01/2023 – 08/2023',
      body: 'Shared home-cooked food with a cultural twist, developing recipes through collaborations and classes.',
    },
    {
      title: 'Resstaff Coordinator — University of Michigan Housing',
      meta: '08/2021 – 05/2022',
      body: 'Oversaw 40 residential advisors and advised hall council on community programming.',
    },
    {
      title: 'Chapter Secretary — Phi Sigma Kappa, Delta Deuteron',
      meta: '01/2019 – 01/2022',
      body: 'Maintained chapter records and attendance; supported Special Olympics philanthropy.',
    },
    {
      title: 'Freshman Representative — Asian American Association',
      meta: '09/2018 – 05/2019',
      body: 'Planned cultural and community-building events and recruited freshmen to campus programming.',
    },
  ];

  readonly awards: ResumeEntry[] = [
    {
      title: 'Alpha Omega Alpha (AOA) Medical Honor Society',
      meta: '2026',
      body: 'Awarded to 20% from each class in recognition of outstanding academic record, leadership, scholarship, and professionalism.',
    },
    {
      title: 'Gold Humanism Honor Society',
      meta: '2026',
      body: 'Awarded to 15% from each class for demonstrating patient-centered care by modeling integrity, excellence, compassion, altruism, respect, and empathy.',
    },
    {
      title: 'Medical Student Anesthesia Research Fellowship (MSARF)',
      meta: 'Foundation for Anesthesia Education and Research (FAER) · 2026',
      body: 'Competitive, nationally awarded fellowship supporting medical student research in anesthesiology.',
    },
    {
      title: 'Florence Gravelle Oberg Endowed Memorial Scholarship',
      meta: '2026',
    },
    {
      title: 'Spartan Volunteer Service Award',
      meta: '2025',
      body: 'Over 100 volunteer hours of direct community engagement and service.',
    },
    {
      title: 'West Michigan Medical Student Scholarship',
      meta: '2024',
    },
    {
      title: 'The Richard and Helen Devos Scholarship',
      meta: '2024',
    },
    {
      title: 'Health Policy Case Competition — 1st Place & Anti-Racism and Economic Mobility Award',
      meta: '2022',
      body: 'Proposed policy to improve healthcare access and reduce disparities in Michigan by addressing social determinants of health.',
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
      title: 'Order of Omega Case Study Competition — 2nd Place',
      meta: '2019',
      body: 'Argued for restorative over punitive approaches to greek-life conduct scenarios.',
    },
  ];

  readonly service: ResumeEntry[] = [
    {
      title: 'Volunteer — Wellness Services',
      meta: '04/2026 – Present',
      body: 'Deliver harm-reduction care through a needle exchange program, including wound assessment and overdose-prevention education.',
    },
    {
      title: 'Michigan State Medical Society',
      meta: '02/2026 – Present',
      body: 'Wrote and sponsored a resolution to make preventative and routine care transportation accessible and patient-centered in Michigan.',
    },
    {
      title: 'Volunteer — Battambang Provincial Referral Hospital',
      meta: '05/2025 – 06/2025',
      body: 'Assisted with patient triage, discharge education, and patient communication.',
    },
    {
      title: 'Novice Coach — Grand Rapids Rowing Club',
      meta: '07/2024 – 05/2025',
      body: 'Coached novice and intermediate rowers on stroke mechanics and teamwork in a supportive, team-first environment.',
    },
    {
      title: 'Clinical Assistant — Hope Clinic',
      meta: '06/2022 – 03/2023',
      body: 'Weekly volunteer providing care for underserved communities alongside social workers and specialists.',
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
      body: 'English — Native fluency. Khmer — Native fluency.',
    },
    {
      title: 'Professional Affiliations',
      body: 'American Society of Anesthesiologists (ASA), American Medical Association (AMA), Asian Pacific American Medical Student Association (APAMSA), Michigan State Medical Society (MSMS).',
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
