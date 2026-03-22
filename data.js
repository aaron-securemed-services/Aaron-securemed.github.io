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
  tagline:   "Medical Device Security · Threat Modeling · FDA Regulatory · Risk Management",
  email:     "lalindeaaron@icloud.com",
  phone:     "954-654-2476",
  linkedin:  "https://www.linkedin.com/in/aaron-lalinde-",
  github:    "",               // add your GitHub URL if you want it shown
  location:  "Weston, FL",
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
    id:       "stryker-pce",
    title:    "Product Cybersecurity Engineer",
    company:  "Stryker",
    location: "Weston, FL",
    start:    "Sep 2023",
    end:      "Present",
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
    "DFIR Fundamentals",
    "Web Application Security",
  ],
  "Tools & Platforms": [
    "Nmap", "Wireshark", "Snort",
    "Synopsys Detect", "Python",
    "Linux", "Confluence",
    "Jama", "onePLM",
    "Microsoft Office Suite",
  ],
};

// ── LABS ──────────────────────────────────────────────────
// type: "lab" | "project"
// status: "complete" | "progress" | "locked"
// rank: "E" | "D" | "C" | "B" | "A" | "S"
const PORTFOLIO = [
  {
    id:          "lab-network-recon",
    type:        "lab",
    name:        "Network Reconnaissance",
    rank:        "C",
    status:      "complete",
    date:        "2024-11-01",
    description: "Passive and active network reconnaissance using Nmap, Wireshark, and OSINT techniques. Mapped attack surfaces across vulnerable lab environments and documented findings.",
    tags:        ["Nmap", "Wireshark", "OSINT", "TCP/IP", "Recon"],
    link:        "",
  },
  {
    id:          "lab-webapp",
    type:        "lab",
    name:        "Web Application Exploitation",
    rank:        "B",
    status:      "complete",
    date:        "2025-01-10",
    description: "Exploited OWASP Top 10 vulnerabilities including SQL injection, XSS, and IDOR on deliberately vulnerable web applications using Burp Suite.",
    tags:        ["Burp Suite", "SQL Injection", "XSS", "OWASP", "IDOR"],
    link:        "",
  },
  {
    id:          "lab-linux-privesc",
    type:        "lab",
    name:        "Linux Privilege Escalation",
    rank:        "C",
    status:      "complete",
    date:        "2024-12-15",
    description: "Exploited SUID binaries, misconfigured sudo rules, and cron job vulnerabilities to escalate privileges from low-privilege shell to root in a controlled lab environment.",
    tags:        ["Linux", "PrivEsc", "SUID", "Sudo", "Shell"],
    link:        "",
  },
  {
    id:          "lab-active-directory",
    type:        "lab",
    name:        "Active Directory Attacks",
    rank:        "B",
    status:      "progress",
    date:        "2025-02-01",
    description: "Practicing Kerberoasting, Pass-the-Hash, BloodHound enumeration, and privilege escalation in a Windows domain lab. Currently working through AD attack chains.",
    tags:        ["Active Directory", "Kerberoasting", "BloodHound", "Mimikatz", "Windows"],
    link:        "",
  },
  {
    id:          "proj-home-soc",
    type:        "project",
    name:        "Home SOC Lab",
    rank:        "B",
    status:      "complete",
    date:        "2025-01-20",
    description: "Built a home Security Operations Center using Elastic Stack to ingest logs from pfSense, Windows, and Linux endpoints. Developed custom detection rules correlating network and endpoint telemetry.",
    tags:        ["Elastic SIEM", "pfSense", "Detection Engineering", "Log Analysis"],
    link:        "",
  },
  {
    id:          "proj-vuln-scanner",
    type:        "project",
    name:        "Vulnerability Scanner Script",
    rank:        "C",
    status:      "progress",
    date:        "2025-03-01",
    description: "Custom Python tool wrapping Nmap to parse service banners, look up known CVEs via the NVD API, and produce severity-prioritized HTML reports for small-scope engagements.",
    tags:        ["Python", "Nmap", "CVE", "NVD API", "Automation"],
    link:        "",
  },
];
