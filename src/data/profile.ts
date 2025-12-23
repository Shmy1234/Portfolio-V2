export interface Profile {
  name: string;
  citizenship: string;
  email: string;
  linkedin: string;
  github: string;
  summary: string;
  quickFacts: {
    location: string;
    university: string;
    degree: string;
    graduation: string;
  };
}

export const profile: Profile = {
  name: "Vaamanan Mugunthan",
  citizenship: "Canadian Citizen",
  email: "mugunthv@uwindsor.ca",
  linkedin: "https://www.linkedin.com/in/vaamanan-mugunthan/",
  github: "https://github.com/vaamanan",
  summary: "Electrical and Computer Engineering student with hands-on experience in embedded systems, full-stack development, and signal processing. Currently a Research Assistant working with Ford on automotive radar antenna optimization. Passionate about building real-time systems, PCB design, and developing accessible technology solutions.",
  quickFacts: {
    location: "Windsor, ON",
    university: "University of Windsor",
    degree: "B.A.Sc. Electrical & Computer Engineering",
    graduation: "May 2028 (Expected)",
  },
};
