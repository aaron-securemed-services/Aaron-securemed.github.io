/**
 * ══════════════════════════════════════════════════════
 *  HUNTER'S SYSTEM — DATA FILE
 *  Edit this file to update your public dashboard.
 *  Push changes to GitHub to go live.
 * ══════════════════════════════════════════════════════
 *
 *  HUNTER INFO
 *  ───────────
 *  Update your name and title below.
 */
const HUNTER_NAME  = "YOUR NAME";
const HUNTER_TITLE = "Security Engineer | Cybersecurity Hunter";

/**
 *  XP PER RANK (do not change unless you want to rebalance)
 *  ─────────────────────────────────────────────────────────
 *  Complete  = full XP
 *  Progress  = 50% XP
 *  Locked    = 0 XP
 *
 *  E: 250 | D: 600 | C: 1,200 | B: 2,500 | A: 5,000 | S: 10,000
 */
const XP_TABLE = { E: 250, D: 600, C: 1200, B: 2500, A: 5000, S: 10000 };

/**
 *  RANK THRESHOLDS
 *  ─────────────────────────────────────────────────────────
 *  E: 0–1,999  | D: 2,000–7,999  | C: 8,000–17,999
 *  B: 18,000–29,999 | A: 30,000–41,999 | S: 42,000+
 */
const RANK_THRESHOLDS = [
  { rank: "S", min: 42000 },
  { rank: "A", min: 30000 },
  { rank: "B", min: 18000 },
  { rank: "C", min: 8000  },
  { rank: "D", min: 2000  },
  { rank: "E", min: 0     },
];

/**
 *  ENTRIES — LABS & PROJECTS
 *  ─────────────────────────────────────────────────────────
 *  Each entry object has these fields:
 *
 *  id          (string)   Unique identifier — keep it short, no spaces
 *  type        (string)   "lab" or "project"
 *  name        (string)   Display name
 *  rank        (string)   "E" | "D" | "C" | "B" | "A" | "S"
 *  status      (string)   "complete" | "progress" | "locked"
 *  description (string)   Short description (1–3 sentences)
 *  tags        (array)    Array of tag strings — used for skill bars on home page
 *  link        (string)   URL to writeup / GitHub repo — use "" if none
 *  date        (string)   "YYYY-MM-DD" — date completed or started
 *
 *  ─────────────────────────────────────────────────────────
 *  SKILL BAR KEYWORDS (used on the home page skill matrix):
 *  Network  → NMAP, WIRESHARK, TCP/IP, PFSENSE, RECON
 *  Web Sec  → BURP SUITE, XSS, SQL INJECTION, OWASP
 *  Active Dir → ACTIVE DIRECTORY, KERBEROS, MIMIKATZ
 *  Forensics → AUTOPSY, VOLATILITY, LOG ANALYSIS, DFIR
 *  Malware  → GHIDRA, SANDBOX, REVERSE ENGINEERING, RE
 *  ─────────────────────────────────────────────────────────
 *  To add a new entry, copy an existing block and paste it
 *  at the top of the ENTRIES array, then update the fields.
 *  ─────────────────────────────────────────────────────────
 */
const ENTRIES = [

  // ── LABS ─────────────────────────────────────────────

  {
    id:          "lab-linux-privesc",
    type:        "lab",
    name:        "Linux Privilege Escalation",
    rank:        "D",
    status:      "complete",
    description: "Exploited SUID binaries, cron jobs, and weak sudo rules to escalate from a low-privilege shell to root.",
    tags:        ["LINUX", "PRIVESC", "SUID", "SUDO"],
    link:        "",
    date:        "2024-10-05",
  },
  {
    id:          "lab-forensics",
    type:        "lab",
    name:        "Digital Forensics",
    rank:        "C",
    status:      "complete",
    description: "Disk image analysis, memory forensics, and log parsing to investigate a simulated breach scenario.",
    tags:        ["AUTOPSY", "VOLATILITY", "LOG ANALYSIS"],
    link:        "",
    date:        "2024-11-12",
  },
  {
    id:          "lab-network-recon",
    type:        "lab",
    name:        "Network Reconnaissance",
    rank:        "C",
    status:      "complete",
    description: "Passive and active recon using Nmap, Shodan, and Wireshark. Mapped attack surface of a vulnerable network range.",
    tags:        ["NMAP", "WIRESHARK", "RECON", "TCP/IP"],
    link:        "",
    date:        "2024-12-01",
  },
  {
    id:          "lab-webapp-exploit",
    type:        "lab",
    name:        "Web App Exploitation",
    rank:        "B",
    status:      "complete",
    description: "Exploited OWASP Top 10 vulnerabilities including SQL injection, XSS, and IDOR on a deliberately vulnerable web app.",
    tags:        ["BURP SUITE", "SQL INJECTION", "XSS", "OWASP"],
    link:        "",
    date:        "2025-01-15",
  },
  {
    id:          "lab-active-directory",
    type:        "lab",
    name:        "Active Directory Attacks",
    rank:        "B",
    status:      "progress",
    description: "Kerberoasting, Pass-the-Hash, and privilege escalation within a Windows domain lab environment.",
    tags:        ["ACTIVE DIRECTORY", "KERBEROS", "MIMIKATZ"],
    link:        "",
    date:        "2025-02-10",
  },
  {
    id:          "lab-malware-analysis",
    type:        "lab",
    name:        "Malware Analysis Lab",
    rank:        "A",
    status:      "locked",
    description: "Static and dynamic analysis of malware samples in an isolated sandbox. Reverse engineering with Ghidra and x64dbg.",
    tags:        ["GHIDRA", "SANDBOX", "REVERSE ENGINEERING", "RE"],
    link:        "",
    date:        "",
  },

  // ── PROJECTS ─────────────────────────────────────────

  {
    id:          "proj-home-soc",
    type:        "project",
    name:        "Home SOC Lab",
    rank:        "B",
    status:      "complete",
    description: "Built a home SIEM using Elastic Stack, ingesting logs from pfSense, Windows, and Linux hosts for real-time threat detection.",
    tags:        ["ELASTIC SIEM", "PFSENSE", "DETECTION", "NETWORK"],
    link:        "",
    date:        "2025-01-20",
  },
  {
    id:          "proj-threat-intel",
    type:        "project",
    name:        "Threat Intel Dashboard",
    rank:        "A",
    status:      "complete",
    description: "Aggregates IOC feeds, CVE data, and honeypot alerts into a unified threat intelligence dashboard using MISP and OpenCTI.",
    tags:        ["MISP", "OPENCTI", "CTI", "IOC"],
    link:        "",
    date:        "2025-02-28",
  },
  {
    id:          "proj-phishing-sim",
    type:        "project",
    name:        "Phishing Simulation Tool",
    rank:        "C",
    status:      "progress",
    description: "Python-based internal phishing simulation framework with tracking, reporting, and employee awareness scoring.",
    tags:        ["PYTHON", "PHISHING", "SOCIAL ENGINEERING"],
    link:        "",
    date:        "2025-03-01",
  },
  {
    id:          "proj-vuln-scanner",
    type:        "project",
    name:        "Vulnerability Scanner Script",
    rank:        "B",
    status:      "progress",
    description: "Custom Python vulnerability scanner that wraps Nmap and checks for known CVEs against discovered service banners.",
    tags:        ["PYTHON", "NMAP", "CVE", "AUTOMATION"],
    link:        "",
    date:        "2025-03-10",
  },

];

/**
 *  QUESTS — CERTIFICATION & LEARNING GOALS
 *  ─────────────────────────────────────────────────────────
 *  done    (boolean)  true = crossed off, false = pending
 *  name    (string)   Quest description
 *  xp      (number)   Bonus XP displayed (cosmetic only)
 *  boss    (boolean)  true = renders as a gold "boss" quest
 */
const QUESTS = [
  { done: true,  name: "Complete TryHackMe — Jr Penetration Tester Path",  xp: 500,  boss: false },
  { done: true,  name: "Earn CompTIA Security+ Certification",              xp: 1000, boss: false },
  { done: true,  name: "Build and document Home SOC Lab",                   xp: 750,  boss: false },
  { done: false, name: "Complete HackTheBox — Active Directory Path",       xp: 800,  boss: false },
  { done: false, name: "Earn eJPT Certification",                           xp: 1200, boss: false },
  { done: false, name: "Complete first CTF competition",                    xp: 600,  boss: false },
  { done: false, name: "Achieve OSCP Certification  [BOSS RAID]",           xp: 5000, boss: true  },
];
