# NRG-OS Platform Overview

**NRG-OS** serves as the central operating system and unified interface for the entire NewRa ecosystem.

---

## 🎯 Core Capabilities

1. **Unified Enterprise Shell**:
   * Shared sidebar navigation with responsive desktop/mobile collapsing drawers.
   * Dynamic role-aware routing for Super Admin, Admin, GES, GEP, and GEA personas.
2. **Same-Tab Embedded Applications**:
   * Rather than forcing users across multiple disconnected domains, NRG-OS embeds specialized micro-frontends (CRM, Lens, Symphony) via authenticated same-origin iframe panes.
   * Frame policies dynamically relax only for validated internal iframes, protecting against external clickjacking.
3. **Super Admin KPI & Metric Cards**:
   * Interactive `KpiCard` components provide real-time visibility into Total Users, Active Deals, Settled Commissions, and Compliance SLAs.
   * Status indicators distinguish live records, clear queues, unconfigured sources, and directory outages without displaying misleading sample placeholders.
4. **Identity & Authentication Gateway**:
   * Native integration with WorkOS AuthKit for enterprise single sign-on, SAML, and email authentication.
