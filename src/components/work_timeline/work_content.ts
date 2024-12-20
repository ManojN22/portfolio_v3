// WorkContent.tsx

export interface WorkExperience {
    date: string;
    title: string;
    subtitle: string;
    iconBg: string;
    details: string[];
  }
  
  export const workExperience: WorkExperience[] = [
    {
      date: "July 2024 – Present",
      title: "Research Assistant - Stony Brook University",
      subtitle: "ReactJS, Flask, PostgreSQL",
      iconBg: "#4e9e4e",
      details: [
        "Engineered a multilingual hospital chatbot, elevating patient engagement and automating data retrieval workflows, resulting in a 33% improvement in response time for patient care.",
      ]
    },
    {
      date: "August 2021 – August 2022",
      title: "Software Developer - Fresh Digital",
      subtitle: "ReactJS, ExpressJS, MongoDB",
      iconBg: "#6f6f6f",
      details: [
        "Architected and delivered an automated targeted marketing platform, increasing user conversion rates by 36%.",
      ]
    },
    {
      date: "January 2021 – April 2021",
      title: "Software Engineer Intern - Dataviss",
      subtitle: "ExpressJS, MongoDB, Socket.io",
      iconBg: "#4e73df",
      details: [
        "Designed and integrated the backend of a SaaS-based analytics platform handling 500k documents.",
      ]
    }
  ];
  