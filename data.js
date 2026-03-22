/**
 * ══════════════════════════════════════════════════════════
 *  HUNTER RÉSUMÉ — DATA FILE
 *  Edit ONLY this file to update your live résumé.
 *  Push to GitHub → site updates automatically.
 * ══════════════════════════════════════════════════════════
 */

// ── PERSONAL INFO ─────────────────────────────────────────
const PROFILE = {
  name:      "Aaron Lalinde",
  title:     "Product Cybersecurity Engineer",
  tagline:   "Medical Device Security · Threat Modeling · FDA Regulatory · Security Risk Management",
  email:     "lalindeaaron@icloud.com",
  phone:     "954-654-2476",
  linkedin:  "https://www.linkedin.com/in/aaron-lalinde-",
  github:    "",               // add your GitHub URL if you want it shown
  location:  "",
  languages: "English & Spanish (Bilingual)",
  summary:   `Product cybersecurity engineer with 5+ years at Stryker building secure medical devices. 
              Experienced leading threat modeling, security risk assessments, and FDA regulatory submissions 
              including 510(k) premarket notifications. Bridges offensive security skills with product 
              security practices — combining hands-on lab work in penetration testing and vulnerability 
              management with deep knowledge of HIPAA compliance, FMEA/FMECA, and global quality 
              management systems.`,
};

// ── WORK EXPERIENCE ───────────────────────────────────────
// Most recent first. Each role at the same company is a separate entry.
const EXPERIENCE = [
  {
  id:       "Terumo-pse",
  title:    "Product Security Engineer",
  company:  "Terumo",
  location: "Weston, FL",
  start:    "Mar 2026",
  end:      "Present",
  type:     "Full-Time",
  bullets: [
    "Contribute to sustaining engineering across Trauma and Blood & Cell Technologies product lines, authoring Product Security Plans, Reports, and Requirements aligned with Terumo SOPs and work instructions.",
    "Conduct threat modeling and security risk assessments to identify vulnerabilities in existing medical device products, partnering with R&D and cross-functional teams to develop and document mitigation strategies.",
    "Ensure regulatory alignment with FDA cybersecurity guidance and IEC 81001-5-1, providing oversight and guidance to R&D teams on security documentation and evidence requirements throughout the product lifecycle.",
    "Apply knowledge of cybersecurity frameworks and cryptography concepts to support regulatory-driven security requirements, ensuring sustained compliance across product lines without disrupting active product development.",
  ],
  skills: ["Threat Modeling", "IEC 81001-5-1", "FDA Cybersecurity Guidance", "Product Security Plans", "Sustaining Engineering", "Risk Assessment", "R&D Collaboration"],
}, 
  {
    id:       "stryker-pce",
    title:    "Product Cybersecurity Engineer",
    company:  "Stryker",
    location: "Weston, FL",
    start:    "Sep 2023",
    end:      "Mar 2026",
    type:     "Full-Time",
    bullets: [
      "Led comprehensive cybersecurity risk assessments and threat modeling to develop mitigation strategies that bolstered system security and maintained HIPAA compliance in collaboration with Quality, Regulatory, and Engineering teams.",
      "Collaborated with Regulatory Affairs on three 510(k) premarket submission notifications, leading all security deliverables and culminating in successful FDA approvals.",
      "Served as a key liaison for the Product Security function across development teams, embedding security best practices into the product lifecycle and ensuring alignment with global quality management systems.",
      "Contributed to the implementation of security requirements for DRE (digital, robotics, and enabling technologies) products, ensuring compliance with regulatory requirements and supporting incorporation of advanced security requirements into new product developments.",
    ],
    skills: ["Threat Modeling", "HIPAA", "FDA 510(k)", "Risk Assessment", "FMEA/FMECA", "Security Risk Analysis"],
  },
  {
    id:       "stryker-dae",
    title:    "Design Assurance Engineer",
    company:  "Stryker",
    location: "Weston, FL",
    start:    "Oct 2021",
    end:      "Sep 2023",
    type:     "Full-Time",
    bullets: [
      "Seamlessly integrated standards and regulatory requirements into new product development, enhancing the predictability of project execution and ensuring compliance through Design Assurance guidance on design controls and risk management.",
      "Led and managed sustaining projects including SICR (Specification Input Change Request), manufacturing transfers, and translations by thoroughly assessing product design changes and managing End of Life component changes.",
      "Guided and directed cross-functional teams through the change management process, carefully assessing potential impacts on risk documents and ensuring comprehensive risk management across projects.",
    ],
    skills: ["Design Controls", "Risk Management", "Regulatory Compliance", "Change Management", "onePLM", "Jama"],
  },
  {
    id:       "stryker-sss",
    title:    "Senior Segmentation Specialist",
    company:  "Stryker",
    location: "Weston, FL",
    start:    "Jan 2019",
    end:      "Oct 2021",
    type:     "Full-Time",
    bullets: [
      "Developed preoperative surgical plans for Total Knee and Total Hip Arthroplasty using patient CT scans.",
      "Contributed to the testing of new Treatment Plan software and created training materials to integrate it into work procedures successfully.",
      "Collaborated with in-field Product Specialists to deliver treatment plans for surgical events within designated timelines.",
    ],
    skills: ["Medical Imaging", "Treatment Planning", "Software Testing", "Technical Writing", "Cross-functional Collaboration"],
  },
];

// ── EDUCATION ─────────────────────────────────────────────
const EDUCATION = [
  {
    degree:   "B.S. Biomedical Engineering",
    school:   "Florida International University",
    location: "Miami, FL",
    year:     "2017",
    honors:   "",
    notes:    "Foundation in systems engineering, biological systems, and technical design — directly applicable to medical device product security.",
  },
];

// ── CERTIFICATIONS ────────────────────────────────────────
// status: "active" | "in-progress" | "planned"
const CERTIFICATIONS = [
  {
    name:   "CompTIA Security+",
    issuer: "CompTIA",
    year:   "Dec 2024",
    status: "active",
    badge:  "SEC+",
  },
  {
    name:   "Google Cybersecurity Certificate",
    issuer: "Google / Coursera",
    year:   "Dec 2024",
    status: "active",
    badge:  "GCC",
  },
  {
    name:   "OSCP — Offensive Security Certified Professional",
    issuer: "Offensive Security",
    year:   "",
    status: "planned",
    badge:  "OSCP",
  },
    {
    name:   "HTB Certified Junior Cybersecurity Associate",
    issuer: "Hack The Box",
    year:   "",
    status: "planned",
    badge:  "HTB CJCA",
  },
];

// ── SKILLS ────────────────────────────────────────────────
// Groups shown as a visual showcase. No level bars — just clean category cards.
const SKILLS = {
  "Product Security": [
    "Threat Modeling",
    "Security Risk Analysis",
    "FMEA & FMECA",
    "SBOM Management",
    "Vulnerability Management",
    "Security Requirements",
    "Secure SDLC",
  ],
  "Regulatory & Compliance": [
    "FDA 510(k) Submissions",
    "HIPAA Compliance",
    "IEC 62443",
    "Design Controls",
    "Risk Management (ISO 14971)",
    "Global QMS Alignment",
    "Change Management",
  ],
  "Offensive / Technical Security": [
    "Penetration Testing",
    "Network Reconnaissance",
    "Vulnerability Scanning",
    "Incident Response",
    "Application Security",
  ],
  "Tools & Platforms": [
    "Nmap", "Wireshark", "Snort",
    "Synopsys Detect", "Python",
    "Linux", "Confluence",
    "Jama", "windchill", "Jama",
    "Microsoft Office Suite",
  ],
};

// ── LABS ──────────────────────────────────────────────────
// type: "lab" | "project"
// status: "complete" | "progress" | "locked"
// rank: "E" | "D" | "C" | "B" | "A" | "S"
const PORTFOLIO = [
  {
  id:          "lab-htb-intro-infosec",
  type:        "lab",
  name:        "Introduction To Information Security",
  rank:        "E",
  status:      "complete",
  date:        "2025-03-01",
  description: "HackTheBox Academy — Fundamental module covering core information security concepts, CIA triad, threat actors, attack types, and security frameworks. Tier 0 foundational path.",
  tags:        ["HackTheBox", "InfoSec", "Security Fundamentals", "CIA Triad"],
  link:        "",
},
{
  id:          "lab-htb-network-foundations",
  type:        "lab",
  name:        "Network Foundations",
  rank:        "E",
  status:      "complete",
  date:        "2025-03-01",
  description: "HackTheBox Academy — Fundamental module covering network architecture, protocols, OSI model, and core networking concepts required for offensive and defensive security work. Tier 0.",
  tags:        ["HackTheBox", "Networking", "OSI Model", "Protocols", "TCP/IP"],
  link:        "",
},
{
  id:          "lab-htb-intro-networking",
  type:        "lab",
  name:        "Introduction To Networking",
  rank:        "E",
  status:      "complete",
  date:        "2025-03-01",
  description: "HackTheBox Academy — Fundamental module diving into IP addressing, subnetting, routing, switching, and hands-on network analysis skills. Tier 0 foundational path.",
  tags:        ["HackTheBox", "Networking", "Subnetting", "Routing", "Wireshark"],
  link:        "",
},
  {
  id:          "lab-htb-linux-fundamentals",
  type:        "lab",
  name:        "Linux Fundamentals",
  rank:        "D",
  status:      "progress",
  date:        "2025-03-01",
  description: "HackTheBox Academy — Fundamental module covering Linux OS structure, file system navigation, permissions, shell commands, and scripting basics. Tier 0 · 6h · 70% complete.",
  tags:        ["HackTheBox", "Linux", "Shell", "File System", "Permissions"],
  link:        "",
},
{
  id:          "lab-htb-intro-web-apps",
  type:        "lab",
  name:        "Introduction To Web Applications",
  rank:        "E",
  status:      "progress",
  date:        "2025-03-01",
  description: "HackTheBox Academy — Fundamental module covering web application architecture, HTTP, front-end and back-end technologies, and foundational web security concepts. Tier 0 · 3h · 52% complete.",
  tags:        ["HackTheBox", "Web Applications", "HTTP", "HTML", "JavaScript"],
  link:        "",
},
{
  id:          "lab-htb-nmap",
  type:        "lab",
  name:        "Network Enumeration With Nmap",
  rank:        "E",
  status:      "progress",
  date:        "2025-03-01",
  description: "HackTheBox Academy — Offensive module covering Nmap scan techniques, host discovery, port scanning, service/version detection, and NSE scripting. Tier I · 7h · 25% complete.",
  tags:        ["HackTheBox", "Nmap", "Enumeration", "Port Scanning", "NSE"],
  link:        "",
},
{
  id:          "lab-htb-incident-handling",
  type:        "lab",
  name:        "Incident Handling Process",
  rank:        "E",
  status:      "progress",
  date:        "2025-03-01",
  description: "HackTheBox Academy — Easy module covering the full incident response lifecycle: preparation, detection, containment, eradication, recovery, and lessons learned. Tier I · 1d · 82% complete.",
  tags:        ["HackTheBox", "Incident Response", "DFIR", "IR Lifecycle", "SOC"],
  link:        "",
},
];
