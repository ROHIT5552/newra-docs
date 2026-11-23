# NewRa Core CRM Overview

**NewRa Core CRM** is an enterprise green energy CRM purpose-built for C&I power procurement, tariff simulation, and renewable power allocation.

---

## 🏗️ Architecture Breakdown

* **Client (`crm/client`)**:
  * Next.js 16 application with custom AppShell.
  * Adaptive layout: detects whether it is running standalone or embedded within NRG-OS via `useSyncExternalStore`.
  * Suppresses internal sidebars when embedded to present a clean single-pane experience.
* **Server (`crm/server`)**:
  * NestJS backend exposing modular controllers for Accounts, Supply Allocations, Stage Transitions, and Storage.
  * Integrated with PostgreSQL via Prisma ORM for structured audit logging and immutable compliance records.

---

## 📑 Core Modules

1. **Accounts & Leads**: Directory of green energy subscribers and power producers.
2. **Pipeline Tracker**: 12-stage progression gate with verified milestone requirements.
3. **Supply Allocations**: Proposing, contracting, and operationalizing solar/wind power capacity.
4. **Deal Desk**: Tariff models, DISCOM cross-subsidy benchmark calculations, and savings curves.
5. **eSign & Legal**: Digital signing workflows for LOIs, NDAs, and Power Purchase Agreements.
