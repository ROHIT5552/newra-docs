# User & Operations Overview

NewRa Grids is a clean energy operating system connecting renewable power generators, commercial/industrial consumers, and energy aggregators under a unified, transparent platform.

---

## 🔑 Role-Based Access Matrix

The platform dynamically changes its workspace navigation, dashboards, and action panels depending on your assigned business role:

| Business Role | Description | Key Workspaces & Tabs |
| :--- | :--- | :--- |
| **Super Admin** | Full organizational oversight, KPI dashboards, user management, and compliance | Super Admin Overview, User Lifecycle, System Audit, CRM Gateway |
| **Admin** | Manages day-to-day accounts, reviews deals, approves submissions, and tracks pipeline | CRM All Leads, Status Tracker, Document Vault, Deal Desk |
| **GES (Subscriber)** | Commercial & Industrial electricity consumers subscribing to renewable power | Bill Reviews, Monthly Energy Records, Savings Tracker, LOI/PPA Signing |
| **GEP (Producer)** | Solar, wind, and hybrid plant operators providing green energy supply | Project Validation, Capacity Allocation, Grid Sync, Statutory Approvals |
| **GEA (Associate)** | Field associates and partners sourcing renewable deals | Leads Pipeline, Customer Progress, Commission Tracking |

---

## 🖥️ Workspace Navigation

When you log in to **NewRa OS**, you have access to:

1. **Dashboard / Role Overview**: A top-level summary showing active energy contracts, monthly savings, and compliance statuses.
2. **CRM Sidebar Menu**:
   * **CRM Dashboard**: High-level funnel metrics and recent accounts.
   * **All Leads**: Searchable table of registered consumers and partners.
   * **Status Tracker**: Kanban-style stage tracking from initial contact to Go-Live.
   * **Document Vault**: Central repository for NDA, LOI, and PPA documentation packets.
   * **Deal Desk**: Pricing models, tariff benchmarks, and financial modeling.
   * **Market Match**: Matches subscriber energy demand with certified solar/wind generation capacity.
   * **User Management**: Add team members and control permission scopes.

---

## 🔐 Sign-In and Session Management

* **Sign-In**: Enter your authorized work email at `/login`. NewRa OS integrates with **WorkOS AuthKit** for Single Sign-On (SSO) and multi-factor authentication (MFA).
* **Global Sign-Out**: Clicking "Sign Out" in your user menu cleanly invalidates both the OS session and all embedded CRM sessions simultaneously.
