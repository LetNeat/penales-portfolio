export const projects = [
  {
    id: 1,
    num: "01 / Full-Stack — SypenSys · Nabua, 2025",
    title: "School Management System",
    desc: "Online enrollment, automated grading, and intelligent section assignment with subject workload balancing. Integrated an AI chatbot (OpenAI API + RAG) for school-specific queries using real institutional data. All APIs validated end-to-end with boundary value analysis and equivalence partitioning.",
    tags: [
      { label: "Laravel / CI4", type: "web" },
      { label: "Filament", type: "web" },
      { label: "OpenAI API + RAG", type: "web" },
      { label: "API Testing", type: "auto" },
    ],
    type: "web",
  },
  {
    id: 2,
    num: "02 / Full-Stack — ProLockLogger · 2024",
    title: "IoT Fingerprint & RFID Access Control",
    desc: "Laravel/Filament dashboard with real-time log monitoring and role-based access control for an IoT locking system. Companion Android app for remote authentication. REST APIs tested across all layers — hardware, web, and mobile.",
    tags: [
      { label: "Laravel", type: "web" },
      { label: "Filament", type: "web" },
      { label: "Android Studio", type: "web" },
      { label: "Integration Testing", type: "auto" },
    ],
    type: "web",
  },
  {
    id: 3,
    num: "03 / Manual QA — Alliance Software Inc. · 2025",
    title: "Enterprise POS & Inventory QA",
    desc: "QA on a nationwide POS/Inventory rollout for a top QSR chain — 100+ store locations. Manual, API, and Web testing across Android & Windows. Validated RESTful endpoints via Postman. Conducted SIT and UAT, tracked defects in JIRA and Azure DevOps.",
    tags: [
      { label: "Manual Testing", type: "manual" },
      { label: "SIT / UAT", type: "manual" },
      { label: "Postman", type: "auto" },
      { label: "JIRA", type: "manual" },
      { label: "Azure DevOps", type: "manual" },
    ],
    type: "manual",
  },
  {
    id: 4,
    num: "04 / Manual QA — Alliance Software Inc. · 2025",
    title: "Payment Gateway & Digital Voucher Testing",
    desc: "Third-party payment and digital reward/voucher integration testing — verified transaction flows, error handling, and fallback scenarios across multi-store deployments. Ensured financial accuracy and consistency end-to-end.",
    tags: [
      { label: "Payment Integration", type: "manual" },
      { label: "Regression", type: "manual" },
      { label: "Postman", type: "auto" },
      { label: "Functional Testing", type: "manual" },
    ],
    type: "manual",
  },
  {
    id: 5,
    num: "05 / QA — Gleent Incorporated · 2025",
    title: "HRIS & Payroll REST API Validation",
    desc: "Postman-based REST API testing for a live HRIS/Payroll SaaS platform — verified data accuracy, authentication handling, and error responses across multiple user roles and edge cases. Identified and prioritized 50+ bugs in JIRA with detailed reproduction steps.",
    tags: [
      { label: "Postman", type: "auto" },
      { label: "REST API", type: "auto" },
      { label: "JIRA", type: "manual" },
      { label: "Edge Case Testing", type: "manual" },
    ],
    type: "auto",
  },
  {
    id: 6,
    num: "06 / Manual QA — Gleent Incorporated · 2025",
    title: "HRIS Platform Manual Testing",
    desc: "Regression, smoke, and exploratory testing for a live HRIS/Payroll SaaS used by hundreds of businesses. Maintained test cases, checklists, and summary reports in Excel and JIRA. Contributed to a 20% product quality improvement.",
    tags: [
      { label: "Smoke Testing", type: "manual" },
      { label: "Exploratory", type: "manual" },
      { label: "TestRail", type: "manual" },
      { label: "Excel Reports", type: "manual" },
    ],
    type: "manual",
  },
  {
    id: 7,
    num: "07 / Automation — Personal Project",
    title: "Playwright E2E Test Framework",
    desc: "End-to-end automated test suite built with Playwright covering login flows, form validation, and critical user journeys. Structured with Page Object Model for maintainability and designed for CI/CD pipeline integration.",
    tags: [
      { label: "Playwright", type: "auto" },
      { label: "TypeScript", type: "auto" },
      { label: "Page Object Model", type: "auto" },
      { label: "CI/CD", type: "auto" },
    ],
    type: "auto",
  },
  {
    id: 8,
    num: "08 / Manual QA — Alliance Software Inc. · 2025",
    title: "Master Data & Store Configuration QA",
    desc: "Validated master data — product listings, pricing, menu structures, and store-level configs — across all deployment environments for 100+ multi-store rollout locations. Ensured cross-environment accuracy and consistency.",
    tags: [
      { label: "Data Validation", type: "manual" },
      { label: "Configuration", type: "manual" },
      { label: "UAT", type: "manual" },
      { label: "Store Deployment", type: "manual" },
    ],
    type: "manual",
  },
];

export const experience = [
  {
    company: "Alliance Software Inc.",
    meta: "August 2025 – Present · Ortigas, Pasig City",
    role: "Quality Assurance Tester",
    bullets: [
      "Supporting a large-scale enterprise POS & Inventory project for one of the Philippines' top QSR chains — multi-store rollout covering 100+ locations nationwide.",
      "Managed master data: product listings, pricing, menu structures, and store-level configurations across all deployment environments.",
      "Handled end-to-end system and product configuration — POS parameters, inventory rules, and operational workflows aligned with enterprise requirements.",
      "Integration testing for third-party payment gateways and digital reward/voucher systems — verified transaction flows, error handling, and fallback scenarios.",
      "Manual, API, and Web Testing across Android & Windows; validated RESTful endpoints via Postman and verified UI flows and cross-browser behavior.",
      "Conducted SIT and UAT; logged and tracked defects in JIRA and Azure DevOps with detailed reproduction steps, severity tagging, and retest validation.",
      "Supported pilot store deployments and post-release validation — monitored live system stability and coordinated with developers to resolve production issues promptly.",
    ],
  },
  {
    company: "Gleent Incorporated",
    meta: "March 2025 – June 2025 · Cabuyao, Laguna",
    role: "QA / Laravel Intern",
    bullets: [
      "Manually tested a live HRIS and Payroll SaaS used by hundreds of businesses — regression, smoke, and exploratory test cycles across desktop and mobile.",
      "Created and maintained detailed test cases, checklists, and summary reports in Excel and JIRA documenting test coverage, pass/fail results, and defect status.",
      "Used Postman to validate REST API endpoints — data accuracy, authentication handling, and error responses across multiple user roles and edge cases.",
      "Identified, logged, and prioritized 50+ bugs in JIRA with reproduction steps and severity classifications — contributed to a 20% product quality improvement.",
    ],
  },
];

export const skills = [
  {
    label: "Testing Types",
    chips: ["Manual", "API", "Web", "Payment Integration", "Functional", "Regression", "Smoke", "SIT", "UAT", "Mobile App"],
  },
  {
    label: "Tools & Platforms",
    chips: ["JIRA", "Postman", "Azure DevOps", "Excel", "Playwright", "TestRail", "BrowserStack"],
  },
  {
    label: "Tech Stack",
    chips: ["PHP", "JavaScript", "TypeScript", "HTML / CSS", "Java", "Python", "MySQL", "Laravel", "React Native", "Node.js", "Next.js", "RESTful APIs"],
  },
  {
    label: "Dev & Workflow",
    chips: ["Git", "GitHub", "CI/CD", "Master Data Mgmt", "System Configuration", "Store Deployment"],
  },
];
