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
    { name: "Odoo Development" },
    { name: "Web Development (End-to-End)" },
    { name: "Mobile Development (Hybrid/Native)" },
    { name: "Game Development (Unity 3D)" },
    { name: "VR Development (Unity 3D)" },
    { name: "Web Design" },
    { name: "3D Modelling / Animation" },
  ];
  
  export const programmingLanguages: ProgrammingLanguage = {
    modern: [
      "Python",
      "Dart (w/ Flutter)",
      "JavaScript/TypeScript (3+ years)",
      "Golang (newcomer)",
    ],
    ancient: ["Java (~1 year)", "C#/.NET (3+ years)", "PHP/MySQL (~3 years)"],
  };
  
  export const preferences: Preference[] = [
    {
      name: "Debian derivatives",
      link: "https://www.debian.org/",
    },
    {
      name: "Fedora",
      link: "https://getfedora.org/",
      emoji: "🐧",
    },
    {
      name: "Zshell",
      link: "https://en.wikipedia.org/wiki/Z_shell",
      additionalLink: "https://ohmyz.sh/",
      emoji: "💻",
    },
    {
      name: "VSCode",
      link: "https://code.visualstudio.com/",
      emoji: "¯\\_(ツ)_/¯",
    },
    {
      name: "JetBrains Mono",
      link: "https://www.jetbrains.com/lp/mono/",
      emoji: "⌨️",
    },
  ];
  
  export const specialInterests: SpecialInterest[] = [
    { name: "[Virtual] Aviation", emoji: "✈" },
    { name: "Cycling", emoji: "🚴‍♂️" },
    { name: "Electronic music production", emoji: "🎧" },
    { name: "Entrepreneurship", emoji: "👨🏻‍💻" },
    { name: "Technical documentaries", emoji: "🎥" },
  ];
  