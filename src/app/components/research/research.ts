import { Component } from '@angular/core';

interface ResearchItem {
  title: string;
  venue: string;
  year: string;
  summary: string;
  icon: string;
  link?: string;
}

@Component({
  selector: 'app-research',
  standalone: true,
  templateUrl: './research.html',
  styleUrl: './research.scss',
})
export class ResearchComponent {
  readonly publications: ResearchItem[] = [
    {
      title: 'Inpatient Glycemic Control in Resource-Limited Settings',
      venue: 'Journal of Hospital Medicine',
      year: '2025',
      summary:
        'First-author retrospective cohort study examining outcomes of a nurse-led inpatient diabetes protocol across 1,200 admissions.',
      icon: 'fa-solid fa-file-medical',
      link: '#',
    },
    {
      title: 'Social Determinants and 30-Day Readmission Risk',
      venue: 'American Journal of Preventive Medicine',
      year: '2024',
      summary:
        'Co-authored analysis linking screening-tool-identified social needs with readmission within a safety-net health system.',
      icon: 'fa-solid fa-notes-medical',
      link: '#',
    },
    {
      title: 'Point-of-Care Ultrasound in Internal Medicine Training',
      venue: 'Medical Education Online',
      year: '2024',
      summary:
        'Curriculum development paper describing an integrated POCUS block for third-year medical students on inpatient wards.',
      icon: 'fa-solid fa-wave-square',
      link: '#',
    },
  ];

  readonly presentations: ResearchItem[] = [
    {
      title: 'Reducing Insulin Errors on General Medicine Wards',
      venue: 'Society of General Internal Medicine Annual Meeting',
      year: '2025',
      summary:
        'Oral presentation of a QI initiative that reduced insulin administration errors by 42% through EHR order-set redesign.',
      icon: 'fa-solid fa-chart-line',
    },
    {
      title: 'Patient-Reported Outcomes After Early Hospital Discharge',
      venue: 'Regional Internal Medicine Symposium',
      year: '2024',
      summary:
        'Poster describing a prospective survey study of patients transitioning from inpatient to outpatient follow-up.',
      icon: 'fa-solid fa-user-nurse',
    },
    {
      title: 'Antimicrobial Stewardship in a Teaching Hospital',
      venue: 'Infectious Diseases Society Resident Forum',
      year: '2023',
      summary:
        'Poster on prescribing-pattern changes following introduction of a stewardship dashboard for admitting teams.',
      icon: 'fa-solid fa-virus',
    },
  ];
}
