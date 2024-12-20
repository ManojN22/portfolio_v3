// project_content.ts

export interface Project {
    title: string;
    description: string;
    skills: string;
    link: string;
  }
  
  export const projects: Project[] = [
    {
      title: "Distributed Key-Value Store",
      description: "Built distributed storage system implementing RAFT, enabling strong consistency and fault tolerance.",
      skills: "Distributed Key-Value Store",
      link: "#"
    },
    {
      title: "Cloud Monitor",
      description: "App for CPU utilization, managing Docker containers in ECR, deployed on Amazon EKS with monitoring.",
      skills: "Distributed Key-Value Store",
      link: "#"
    },
    {
      title: "Prospectus Text Analysis",
      description: "Developed a multi-stage ML pipeline using GPT and RoBERTa models to classify text documents.",
      skills: "Distributed Key-Value Store",
      link: "#"
    },
    {
      title: "Multilingual Hospital Chatbot",
      description: "Engineered a chatbot with machine learning feedback loops for multilingual patient care support.",
      skills: "Distributed Key-Value Store",
      link: "#"
    },
    {
      title: "Automated Marketing Platform",
      description: "Created a platform to automate targeted marketing, increasing conversion rates by 36%.conversion rates by 36%",
      skills: "Distributed Key-Value Store",
      link: "#"
    },
    {
      title: "SaaS Analytics Platform",
      description: "Backend for a SaaS analytics platform handling 500k documents, optimizing data retrieval and storage.",
      skills: "Distributed Key-Value Store",
      link: "#"
    }
  ];
  