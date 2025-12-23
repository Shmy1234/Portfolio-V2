export interface Role {
  title: string;
  period: string;
  bullets: string[];
}

export interface Experience {
  company: string;
  period: string;
  roles: Role[];
  tech?: string;
}

export const experience: Experience[] = [
  {
    company: "Shield Lab, University of Windsor (Affiliated with Ford)",
    period: "June 2025 - Present",
    roles: [
      {
        title: "Research Assistant",
        period: "June 2025 - Present",
        bullets: [
          "Improved 2.4 GHz automotive radar antenna gain and efficiency by ~15% through simulation optimization in Keysight EMPro and Altair FEKO.",
          "Automated data processing and implemented TensorFlow-based anomaly detection for real-time analysis of low-voltage radar signals.",
          "Created technical documentation and SOPs for simulation and test workflows.",
          "Presented simulation and test results to Ford mentor for design validation.",
        ],
      },
    ],
    tech: "Python, TensorFlow, C++, FEKO, EMPro, Lua",
  },
  {
    company: "Formula SAE",
    period: "June 2025 - Present",
    roles: [
      {
        title: "Embedded Systems Team Member",
        period: "June 2025 - Present",
        bullets: [
          "Designed and tested STM32 expansion board firmware in Embedded C for the VCU, enabling real-time data acquisition and control.",
          "Created and reviewed Altium PCB schematics for STM32 expansion board with reliable CAN and UART communication.",
          "Collaborated with controls and electrical teams to validate firmware under real hardware test conditions.",
        ],
      },
    ],
    tech: "Altium Designer, STM32CubeIDE, Embedded C",
  },
  {
    company: "Edureka",
    period: "May 2025 - August 2025",
    roles: [
      {
        title: "Full Stack Web Development Intern",
        period: "May 2025 - August 2025",
        bullets: [
          "Developed responsive web applications using React, Next.js, and Tailwind CSS, improving front-end performance.",
          "Built scalable backend systems with Node.js for efficient data storage and retrieval.",
          "Created reusable UI components, reducing development time by ~25%.",
        ],
      },
    ],
    tech: "JavaScript, React, Next.js, Node.js, Tailwind CSS, Git, Linux",
  },
  {
    company: "UWindsor Engineering Society",
    period: "March 2025 - Sept 2025",
    roles: [
      {
        title: "OWeek 2025 - Logistics Director",
        period: "March 2025 - Sept 2025",
        bullets: [
          "Coordinated logistics for a 500+ student engineering event, achieving 10% cost savings by negotiating with 15+ vendors.",
        ],
      },
    ],
  },
];
