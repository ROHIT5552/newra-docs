# Local Development Setup

Follow this guide to spin up the entire NewRa ecosystem on your local development machine (Windows, macOS, or Linux).

---

## 📋 Prerequisites

* **Node.js**: `v24.x` (Recommended: `v24.13.1` or higher)
* **npm**: `v11.x`
* **Git**: `2.40+`
* **Operating System**: Windows 11 / macOS / Linux

---

## 🚀 Step 1: Repository Structure

Ensure repositories are placed as siblings in your development root:

```
Projects/OS/
├── NRG-OS/             # Master Operating System Shell
└── crm/                # CRM Client and Server
    ├── client/
    └── server/
```

---

## ⚙️ Step 2: Running the Services Concurrently

### 1. Launch the CRM Workspace Services
Inside `NRG-OS`, run the integrated workspace daemon:

```bash
cd NRG-OS
npm run dev:crm-workspace
```

This automated runner:
1. Validates local configuration (`.env.crm-session.local`).
2. Builds and starts the **CRM Frontend** on `http://127.0.0.1:3300`.
3. Starts the **CRM Primary Backend** on `http://127.0.0.1:4201`.
4. Starts the **CRM Secondary Backend** on `http://127.0.0.1:4202`.

### 2. Launch the NRG-OS Web Shell
In a separate terminal, start the main web portal:

```bash
cd NRG-OS
npm run dev:web
```

The master portal will be available at:
👉 **[http://127.0.0.1:3000](http://127.0.0.1:3000)**

---

## 🔍 Step 3: Verifying Ports & Health

You can check whether all background daemons are listening using PowerShell:

```powershell
Get-NetTCPConnection -LocalPort 3000, 3300, 4201, 4202 -State Listen
```

Test the live health endpoints:
* **NRG-OS**: `curl http://127.0.0.1:3000/api/health` ➔ `{"status":"alive","service":"newra-os-web"}`
* **CRM Embedded URL**: `http://127.0.0.1:3000/crm` (automatically routes to `/login` when unauthenticated).

---

## 🪟 Windows-Specific Development Notes

* **Directory Junctions**: On non-elevated Windows developer accounts, creating symbolic links may encounter `EPERM` or `EACCES`. The `snapshotCrmFrontend` integration automatically detects this and gracefully falls back to recursive file copy.
* **PowerShell Execution Policies**: When running npm or node scripts, use `npm.cmd` and `npx.cmd` if your system execution policy restricts `.ps1` loaders.
