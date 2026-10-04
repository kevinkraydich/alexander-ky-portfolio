import { Component } from '@angular/core';

interface Publication {
  title: string;
  journal: string;
  year: string;
  link?: string;
}

interface Presentation {
  title: string;
  conference: string;
  location: string;
}

interface CurrentProject {
  title: string;
  venue: string;
}

@Component({
  selector: 'app-research',
  standalone: true,
  templateUrl: './research.html',
  styleUrl: './research.scss',
})
export class ResearchComponent {
  readonly currentProjects: CurrentProject[] = [
    {
      title:
        'Dietary Supplementation with Omega-3 Fatty Acids Rescues Neurodevelopmental Deficits in a Combined Exposure Paradigm of Maternal Oxycodone Exposure and Chronic Stress',
      venue: 'J. Neuroimmune Pharmacol. (Submitted) · 2026',
    },
  ];

  readonly publications: Publication[] = [
    {
      title: 'A Hydrogel Culture System Regulates Human Adipocyte Function',
      journal: 'Int. J. Mol. Sci.',
      year: '2025',
      link: 'https://pubmed.ncbi.nlm.nih.gov/41303352/',
    },
    {
      title:
        '43 Hazardous Chemical Accidents: A Data-Driven Study of Incidents in the United States During 2021–2024',
      journal: 'Ann Emerg Med.',
      year: '2025',
      link: 'https://doi.org/10.1016/j.annemergmed.2025.06.054',
    },
    {
      title: 'Matrix Density Regulates Adipocyte Phenotype',
      journal: 'Adipocyte',
      year: '2023',
      link: 'https://pubmed.ncbi.nlm.nih.gov/37815174/',
    },
    {
      title:
        'Adipose METTL14-Elicited N6-Methyladenosine Promotes Obesity, Insulin Resistance, and NAFLD Through Suppressing β-Adrenergic Signaling and Lipolysis',
      journal: 'Advanced Science',
      year: '2023',
      link: 'https://pubmed.ncbi.nlm.nih.gov/37526326/',
    },
    {
      title:
        'Lumican Modulates Adipocyte Function in Obesity-Associated Type 2 Diabetes',
      journal: 'Adipocyte',
      year: '2022',
      link: 'https://pubmed.ncbi.nlm.nih.gov/36457256/',
    },
    {
      title:
        'The Human Type 2 Diabetes-Specific Visceral Adipose Tissue Proteome and Transcriptome in Obesity',
      journal: 'Sci Rep',
      year: '2021',
      link: 'https://pubmed.ncbi.nlm.nih.gov/34462518/',
    },
  ];

  readonly presentations: Presentation[] = [
    {
      title:
        'From Nerve Relief to Ovarian Grief: Gabapentin-Induced Reproductive Toxicity',
      conference: 'ASA National Conference',
      location: 'San Diego, CA · Oct 2026',
    },
    {
      title:
        'Understanding Mental Health Help-Seeking Behavior and Barriers Among Southeast Asian Americans in Michigan',
      conference: 'APAMSA National Conference',
      location: 'San Francisco, CA · Feb 2026',
    },
    {
      title:
        '43 Hazardous Chemical Accidents: A Data-Driven Study of Incidents in the United States During 2021–2024',
      conference: 'ACEP25 Research Forum',
      location: 'Salt Lake City, UT · Nov 2025',
    },
    {
      title: 'Matrix Density Regulates Adipocyte Phenotypes',
      conference:
        'University of Michigan Department of Surgery Moses Gunn Research Conference',
      location: 'Ann Arbor, MI · May 2025',
    },
    {
      title: 'Atropa belladonna (Deadly Nightshade) Intoxication: A Case Report',
      conference: 'Pediatric Great Lakes Conference',
      location: 'East Lansing, MI · Mar 2025',
    },
    {
      title:
        'The Use of High-Flow Nasal Cannula During Interhospital Transfers in Pediatric Patients',
      conference: 'National Association of EMS Physicians',
      location: 'San Diego, CA · Jan 2025',
    },
    {
      title:
        'A Machine-Learning Based Algorithm for Quantifying In Vitro Adipocyte Differentiation Efficiency',
      conference:
        'University of Michigan Department of Surgery VA Research Week',
      location: 'Ann Arbor, MI · May 2024',
    },
    {
      title: 'RSV Patient Education',
      conference:
        'MSU College of Human Medicine Scholarly Project Presentation Day',
      location: 'Grand Rapids, MI · Feb 2024',
    },
    {
      title:
        'Adipose Tissue Stromal Cells Regulate Systemic Metabolism in a Depot-Specific Manner',
      conference:
        'University of Michigan Department of Surgery Moses Gunn Research Conference',
      location: 'Ann Arbor, MI · May 2022',
    },
    {
      title:
        'Single-Nuclei Transcriptome of Human Adipose Tissue Reveals Metabolically Distinct Depot-Specific Adipose Progenitor Subpopulations',
      conference: 'bioRxiv (Preprint)',
      location: '2022',
    },
    {
      title: 'Targeted Drug Delivery to Treat Ischemia-Reperfusion Injury',
      conference: 'UROP Annual Spring Research Symposium',
      location: 'Ann Arbor, MI · Apr 2019',
    },
  ];
}
