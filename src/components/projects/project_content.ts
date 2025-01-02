// project_content.ts

export interface Project {
    title: string;
    description: string;
    skills: Array<string>;
    link: string;
  }
  
  export const projects: Project[] = [
    {
      title: "NYC Loved Businesses ",
      description: "Built a dashboard analyzing how geographic and economic factors correlate with the sustainability of loved businesses in NYC.",
      skills: ["Data Analytics","Flask", "ReactJS"],
      link: ""
    },
    {
      title: "SAM Scheduler",
      description: "SAM Scheduler is an enhancement to the Ubuntu scheduler by integrating an scoring mechanism inspired by the ULE scheduler.",
      skills: ["C", "Scheduler", "Linux"],
      link: "#"
    },
    {
      title: "Prospectus Text Analysis",
      description: "Developed a multi-stage ML pipeline using GPT and RoBERTa models to classify text documents.",
      skills: ["Python", "GPT", "RoBERTa"],
      link: "#"
    },
    {
      title: "Cloud Monitor",
      description: "App for CPU utilization, managing Docker containers in ECR, deployed on Amazon EKS with monitoring.",
      skills: ["Cloud","Docker", "EKS"],
      link: "#"
    },

    {
      title: "Distributed Key-Value Store",
      description: "Built distributed storage system implementing RAFT, enabling strong consistency and fault tolerance.",
      skills: ["C++","RAFT"],
      link: "#"
    },
    {
      title: "Image Analysis - YOLOV3 ",
      description: "This project analyze satellite images for specific structures like Radomes and Mesh Antennas using YOLOV3.",
      skills: ["Flask","Angular", "YOLOV3"],
      link: "#"
    },

  ];
  