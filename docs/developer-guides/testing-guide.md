# Testing & Quality Assurance Guide

The NewRa repositories enforce automated typechecking, build audits, unit tests, and cross-browser Playwright verification.

---

## 🧪 1. Static Typecheck & Build Audits

### NRG-OS
```bash
cd NRG-OS
npm run typecheck
npm run build -w @nrg/web
```
* Verifies TypeScript contracts across `@nrg/contracts`, `@nrg/core`, `@nrg/web`, and all test suites.
* Compiles production Next.js bundles and collects static pages.

### CRM Client & Server
```bash
cd crm/client
npm run typecheck
npm run build

cd ../server
npm run test:readiness
```

---

## 🔬 2. Integration & Workspace Tests

Run the core workspace integration tests:

```bash
cd NRG-OS

# Tests the CRM OS gateway proxy, partition routing, and CSRF protection (26 tests)
npm run test:crm-workspace

# Tests the Windows filesystem snapshot and isolation boundaries (3 tests)
npx tsx --test tests/crm-frontend.test.ts

# Tests the CRM client unified identity and logout target
cd ../crm/client
npm run test:os-workspace
```

---

## 🎭 3. Playwright Access-Browser Tests

End-to-end browser specifications test role views, KPI metrics, and embedded navigation:

```bash
cd NRG-OS

# Run compliance SLA review tests
$env:PLAYWRIGHT_CHANNEL="chrome"; $env:ACCESS_BROWSER_ENTRY="tests/support/access-browser-entry.ts"; node "node_modules/@playwright/test/cli.js" test --config "playwright.access.config.ts" tests/access-browser/compliance.spec.ts

# Run CRM pipeline integration tests
$env:PLAYWRIGHT_CHANNEL="chrome"; $env:ACCESS_BROWSER_ENTRY="tests/support/access-browser-entry.ts"; node "node_modules/@playwright/test/cli.js" test --config "playwright.access.config.ts" tests/access-browser/crm-pipeline.spec.ts

# Run the comprehensive 70-test Super Admin Dashboard suite
$env:PLAYWRIGHT_CHANNEL="chrome"; $env:ACCESS_BROWSER_ENTRY="tests/support/access-browser-entry.ts"; node "node_modules/@playwright/test/cli.js" test --config "playwright.access.config.ts" tests/access-browser/dashboard.spec.ts
```

> **Note**: In local environments without standalone Chromium binary downloads, pass `PLAYWRIGHT_CHANNEL=chrome` to use the host Google Chrome installation.
