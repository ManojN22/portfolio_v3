// content.ts

export interface TechnicalSkill {
    name: string;
  }
  
  export interface ProgrammingLanguage {
    modern: string[];
    ancient: string[];
  }
  
  export interface Preference {
    name: string;
    link: string;
    additionalLink?: string;
    emoji?: string;
  }
  
  export interface SpecialInterest {
    name: string;
    emoji: string;
  }
  export const technicalSkills: TechnicalSkill[] = [
    { name: "Web Development (End-to-End)" },
    { name: "Mobile Development (Hybrid/Native)" },
    { name: "Machine Learning (TensorFlow, PyTorch, Scikit-learn, etc.)" },
    { name: "Cloud Infrastructure (AWS, Docker, Kubernetes, Jenkins)" },
  ];
  
  export const programmingLanguages: ProgrammingLanguage = {
    modern: [
      "Python",
      "JavaScript/TypeScript (2+ years)",
      "Go (newcomer)",
    ],
    ancient: ["C++(3+ years)","Java (~1 year)", "C#/.NET (~1 years)"],
  };
  
  export const preferences: Preference[] = [
    {
      name: "VSCode",
      link: "https://code.visualstudio.com/",
      emoji: "¯\\_(ツ)_/¯",
    },
  ];
  
  export const specialInterests: SpecialInterest[] = [
    { name: "Music", emoji: "🎶" },
    { name: "Movies", emoji: "🎬" },
    { name: "The Office", emoji: "🏢" },
    { name: "Board Games", emoji: "🎲" },
  ];