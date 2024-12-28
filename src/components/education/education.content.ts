// src/educationContent.ts

export interface EducationItem {
    degree: string;
    institution: string;
    duration: string;
    details: string[];
  }
  
  export const educationData: EducationItem[] = [
    {
      degree: 'Masters of Science in Computer Science',
      institution: 'Stony Brook University - SUNY',
      duration: '2022 - 2024',
      details: [
        'Relevant coursework: Opertaing Systems, Theroy of Database, Artificial Intelligence',
      ],
      
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'SRM Institute of Science and Technology',
      duration: '2018 - 2022',
      details: [
        'Relevant coursework: Data Structures, Algorithms, Web Development',
      ],
      
    }
  ];
  