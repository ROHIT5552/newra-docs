# Architecture & API Specifications

This guide details the internal communication protocols and security boundaries between NRG-OS and backend services.

---

## 🌐 Private Gateway Endpoints

All external HTTP requests target the host gateway on Port 3000:

| Path Pattern | Destination Service | Authorization Required |
| :--- | :--- | :--- |
| `/workspace/crm/*` | CRM Frontend (Port 3300) | Authenticated Session Cookie |
| `/workspace/crm/api/v1/*` | CRM Primary Backend (Port 4201) | Signed CSRF + Session Proof |
| `/api/auth/*` | WorkOS AuthKit / OS Identity | Public / Session Callback |
| `/api/subscriber/*` | NewRa Core Contracts Engine | Signed Token |

---

## 🛡️ CSRF & Idempotency Header Requirements

POST, PATCH, and PUT requests to `/workspace/crm/api/v1/*` must include:
* `x-newra-csrf`: Session-bound CSRF token issued by `/workspace/crm/api/session`.
* `idempotency-key`: Unique UUID v4 for financial and stage mutations.
