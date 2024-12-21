// src/educationContent.ts

export interface EducationItem {
    degree: string;
    institution: string;
    duration: string;
    details: string[];
  }
  
  export const educationData: EducationItem[] = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Example',
      duration: '2015 - 2019',
      details: [
        'Graduated with Honors',
        'Relevant coursework: Data Structures, Algorithms, Web Development',
      ],
    },
    // Add more education items as needed
  ];
  