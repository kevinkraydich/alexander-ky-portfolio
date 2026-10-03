import { Component, signal } from '@angular/core';

type ResumeTab = 'education' | 'honors' | 'awards' | 'clinical';

interface ResumeEntry {
  title: string;
  meta?: string;
  body: string;
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
    { id: 'honors', label: 'Honors' },
    { id: 'awards', label: 'Awards' },
    { id: 'clinical', label: 'Clinical Skills' },
  ];

  readonly education: ResumeEntry[] = [
    {
      title: 'Example University School of Medicine',
      meta: 'Doctor of Medicine (M.D.) · Expected May 2026',
      body: 'Fourth-year medical student. Clinical rotations across Internal Medicine, Surgery, Pediatrics, Psychiatry, OB-GYN, and Family Medicine.',
    },
    {
      title: 'Example University',
      meta: 'B.S. in Biological Sciences · 2018 – 2022',
      body: 'Graduated summa cum laude. Minor in Medical Humanities. Undergraduate research in cardiovascular physiology.',
    },
    {
      title: 'USMLE',
      meta: 'Step 1: Pass · Step 2 CK: 25X (above national mean)',
      body: 'Board exams completed on schedule during third year.',
    },
  ];

  readonly honors: ResumeEntry[] = [
    {
      title: "Dean's Research Scholarship",
      meta: '2024',
      body: 'Awarded to medical students demonstrating excellence in translational research.',
    },
    {
      title: 'Alpha Omega Alpha Honor Society — Candidate',
      meta: '2025',
      body: 'Nominated for the national medical honor society recognizing scholastic excellence and professionalism.',
    },
    {
      title: 'Gold Humanism Honor Society',
      meta: '2024',
      body: 'Recognized by peers and faculty for compassionate, patient-centered care.',
    },
    {
      title: 'Poster Award — Regional Internal Medicine Symposium',
      meta: '2024',
      body: 'First place for research poster on inpatient diabetes management.',
    },
  ];

  readonly awards: ResumeEntry[] = [
    {
      title: "Chancellor's Award for Academic Excellence",
      meta: '2022',
      body: 'University-wide award recognizing the top graduating senior in the biological sciences.',
    },
    {
      title: 'Best Medical Student Presentation',
      meta: 'State Chapter — American College of Physicians, 2024',
      body: 'Recognized for oral presentation on inpatient glycemic control protocols.',
    },
    {
      title: 'Travel Award — National Medical Student Research Forum',
      meta: '2023',
      body: 'Awarded to present original research at the national forum.',
    },
  ];

  readonly clinical: ResumeEntry[] = [
    {
      title: 'Clinical Procedures',
      body: 'Venipuncture, IV placement, lumbar puncture (observed), arterial blood gas, suturing, Foley catheter placement, basic ultrasound (POCUS).',
    },
    {
      title: 'Certifications',
      body: 'BLS, ACLS, PALS. HIPAA and OSHA training current.',
    },
    {
      title: 'Clinical Software',
      body: 'Epic, Cerner, UpToDate, DynaMed, REDCap for research data capture.',
    },
    {
      title: 'Languages',
      body: 'English (native). Conversational Spanish (medical Spanish coursework).',
    },
  ];

  entriesFor(tab: ResumeTab): ResumeEntry[] {
    switch (tab) {
      case 'education':
        return this.education;
      case 'honors':
        return this.honors;
      case 'awards':
        return this.awards;
      case 'clinical':
        return this.clinical;
    }
  }

  select(tab: ResumeTab): void {
    this.activeTab.set(tab);
  }
}
