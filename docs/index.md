# NewRa Grids Documentation Hub

Welcome to the central documentation hub for **NewRa Grids**. This portal provides comprehensive guides for both business/operational users and engineering teams working with our ecosystem.

---

## 👥 Select Your Role

```
   ┌────────────────────────────────────────┐
   │         NewRa Documentation Hub        │
   └───────────────────┬────────────────────┘
                       │
         ┌─────────────┴─────────────┐
         ▼                           ▼
┌──────────────────┐       ┌──────────────────┐
│   User Guides    │       │ Developer Guides │
│   (Operations)   │       │   (Engineering)  │
└────────┬─────────┘       └─────────┬────────┘
         │                           │
  • Role Portals              • Architecture & APIs
  • CRM Walkthroughs          • Local Setup & Ports
  • Deal Desk & eSign         • Testing & Playwright
  • Subscriber Onboarding     • Database & Migrations
```

### 🏢 [User & Operations Guides](./user-guides/overview)
Designed for **Green Energy Aggregators (GEA)**, **Producers/Partners (GEP)**, **Subscribers (GES)**, **Account Managers**, and **Administrators**:
* **[Platform Overview & Roles](./user-guides/overview)**: Role-based permissions, access hierarchy, and workspaces.
* **[CRM & Pipeline Workflows](./user-guides/crm-workflows)**: Navigating leads, stage transitions, and document approvals.
* **[Subscriber Onboarding](./user-guides/subscriber-onboarding)**: DISCOM bill analysis, power purchase agreements (PPA), and Go-Live.
* **[Partner & Generator Management](./user-guides/partner-management)**: Project milestones, statutory approvals, and grid synchronization.

### 💻 [Developer Guides](./developer-guides/overview)
Designed for **Engineers**, **System Integrators**, and **DevOps**:
* **[Architecture & Topology](./developer-guides/overview)**: Micro-frontends, gateway boundaries, and security headers.
* **[Local Development Setup](./developer-guides/local-setup)**: Prerequisites, running NRG-OS, CRM client, and CRM server concurrently.
* **[API Contracts & Integration](./developer-guides/architecture-and-apis)**: WorkOS AuthKit, CSRF boundaries, and session handling.
* **[Testing & CI/CD](./developer-guides/testing-guide)**: Running unit tests, cross-platform Windows scripts, and Playwright access-browser suites.

---

## 📦 Projects Overview

| Project | Primary Purpose | Tech Stack |
| :--- | :--- | :--- |
| **[NRG-OS](./nrg-os/overview)** | Master operating system and unified application shell | Next.js 16, React 19, WorkOS AuthKit |
| **[NewRa Core CRM](./newra-core-crm/overview)** | Lead management, Deal Desk, and GEP/GES stage transitions | Next.js 16 (Client), NestJS (API), Prisma, PostgreSQL |
| **[NewRa Symphony](./newra-symphony/overview)** | Energy record analytics and developer work tracking | Next.js, Node.js |
| **[NewRa Lens](./newra-lens/overview)** | Smart bill review and energy intelligence pipeline | Python, Node.js |
| **[NewRa Atlas](./newra-atlas/overview)** | Grid infrastructure and geospatial asset mapping | React, Leaflet, GIS |
