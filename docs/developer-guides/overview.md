# Developer & Architecture Overview

NewRa Grids is engineered as a secure, distributed multi-application ecosystem designed for high compliance and reliable energy accounting.

---

## 🏛️ High-Level System Architecture

```
                       ┌───────────────────────────────┐
                       │    NewRa OS (Host Portal)     │
                       │    Port 3000 (Next.js 16)     │
                       └──────────────┬────────────────┘
                                      │
           ┌──────────────────────────┴──────────────────────────┐
           │                                                     │
           ▼                                                     ▼
┌───────────────────────────────┐             ┌──────────────────────────────────┐
│     Private Reverse Proxy     │             │       WorkOS AuthKit Identity    │
│   /workspace/crm, /api/auth   │             │   Single Sign-On & JWT Validation │
└──────────────┬────────────────┘             └──────────────────────────────────┘
               │
      ┌────────┴────────┐
      ▼                 ▼
┌──────────────┐ ┌──────────────┐
│  CRM Client  │ │  CRM Server  │
│  Port 3300   │ │  Port 4201   │
│  (Next.js)   │ │  (NestJS)    │
└──────────────┘ └──────┬───────┘
                        │
                        ▼
                 ┌──────────────┐
                 │  PostgreSQL  │
                 │   (Prisma)   │
                 └──────────────┘
```

---

## 🔒 Security & Gateway Boundaries

1. **Host-Governed Private Networking**:
   * The CRM UI (Port 3300) and CRM API (Port 4201/4202) run as private internal daemons.
   * End users never connect directly to Port 3300 or 4201. All incoming traffic passes through the authenticated **NRG-OS Proxy Gateway** at `http://127.0.0.1:3000/workspace/crm/`.
2. **Same-Origin Frame Security (CSP)**:
   * NRG-OS enforces `frame-ancestors 'none'` and `X-Frame-Options: DENY` on all external routes.
   * For the embedded CRM workspace (`/workspace/crm/*`), the policy dynamically relaxes to `frame-ancestors 'self'` and `X-Frame-Options: SAMEORIGIN` only when requested by internal same-origin iframes (`sec-fetch-dest: iframe`).
3. **Session Proof & CSRF Protection**:
   * All mutated API requests require an active session-bound CSRF token and idempotency keys.
   * Unauthenticated or expired tokens immediately trigger 403 Forbidden with structured JSON error responses.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **NRG-OS Frontend** | Next.js 16, React 19, Tailwind CSS v4, Lucide Icons |
| **Authentication** | WorkOS AuthKit Next.js SDK, Cookie Session Store |
| **CRM Frontend** | Next.js 16, React 19, Webpack, useSyncExternalStore |
| **CRM Backend API** | NestJS, TypeScript, Node.js 24 |
| **Persistence** | PostgreSQL, Prisma ORM 7, ElectricSQL PGLite |
| **Testing** | Playwright (access-browser), Node Native Test Runner, TSX |
