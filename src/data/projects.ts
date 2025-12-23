export interface Project {
  title: string;
  date: string;
  highlights: string[];
  github?: string;
}

export const projects: Project[] = [
  {
    title: "VCU Expansion / Cooling Control Board",
    date: "June 2025 - Present",
    highlights: [
      "Designing custom VCU expansion and cooling control board for Formula SAE.",
      "Selecting components, PCB layout, and validation methods for functional reliability.",
      "Documenting all design decisions and schematics in a shared Design Journal.",
    ],
  },
  {
    title: "AccessiGo: Accessibility Checker",
    date: "March 2025 - Sept 2025",
    highlights: [
      "Full-stack accessibility checker with Flask, JS, and a custom rules engine.",
      "Tracks 12+ accessible entrances at University of Windsor.",
      "Built dataset of 1,000+ labeled images and achieved over 90% validation accuracy.",
    ],
  },
  {
    title: "Autonomous Fertilizer Spreader",
    date: "Jan 2025 - April 2025",
    highlights: [
      "Programmed Arduino firmware with ultrasonic and IR sensors for >90% navigation reliability.",
      "Optimized embedded algorithms, boosting path-tracking accuracy by 30-35%.",
      "Designed 3D models using AutoCAD.",
    ],
  },
  {
    title: "Pygame Mini Projects",
    date: "Jan 2023 - April 2023",
    highlights: [
      "Created interactive 2D platformer and paint GUI applications.",
      "Used object-oriented and event-driven programming in Python.",
    ],
  },
];
