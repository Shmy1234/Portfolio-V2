export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Python", "JavaScript", "C", "C++", "Embedded C", "HTML/CSS", "MATLAB", "Lua"],
  },
  {
    category: "Frameworks",
    skills: ["React", "Next.js", "Flask", "Express", "Node.js", "Firestore"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Altium Designer", "STM32CubeIDE", "FEKO", "EMPro", "Git", "Linux", "AutoCAD"],
  },
  {
    category: "Domains",
    skills: ["Embedded Systems", "Full-Stack Development", "Signal Processing", "PCB Design", "RF & Antenna Design", "Real-Time Systems", "Edge Computing"],
  },
];
