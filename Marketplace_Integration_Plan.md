# Marketplace Integration Plan for Precogs AI

This document outlines the step-by-step plan to list Precogs AI on major cloud marketplaces.

---

## 1. AWS Marketplace
**Goal:** List as a SaaS Product (Integrated with AWS Billing).

### Prerequisites
- [ ] **AWS Seller Account:** Register a new AWS account (or use an isolated one) and sign up for the [AWS Marketplace Management Portal](https://aws.amazon.com/marketplace/management/signin).
- [ ] **Tax & Bank Info:** Complete the US tax (W-9) and bank account verification (Hyperwallet). This takes 1-2 weeks.
- [ ] **Public Profile:** Upload logo (high-res), company description, and support contacts.

### Integration Steps
1.  **Choose Hosting Pattern:**
    *   **SaaS Contract:** The user buys a license (e.g., "10 Users / Year") through AWS, but the app runs on your infrastructure.
    *   **Requirement:** Your app must be deployed on AWS to get the "Deployed on AWS" badge (critical for trust).
2.  **SaaS Integration (Technical):**
    *   Implement **SaaS Resolve API**: To identify the customer when they land on your registration page from AWS.
    *   Implement **SaaS Metering/Entitlement Service**: To report usage or check license validity.
    *   *Note: This requires backend code changes to handle the AWS token exchange.*
3.  **Foundational Technical Review (FTR):**
    *   You must pass the AWS FTR (Well-Architected Review) to be listed publicly.
    *   Focus areas: IAM roles (least privilege), Encryption (S3/RDS), Disaster Recovery.
4.  **Submission:**
    *   Create the product listing in the portal.
    *   Submit for review (AWS reviews take 3-5 days).

---

## 2. Microsoft Azure Marketplace
**Goal:** List as a Transactable SaaS Offer.

### Prerequisites
- [ ] **Microsoft Partner Center Account:** Register and enroll in the "Commercial Marketplace" program.
- [ ] **Tax & Banking:** Complete payout and tax profiles in Partner Center.

### Integration Steps
1.  **Azure AD Integration (Critical):**
    *   Your app **MUST** supports Single Sign-On (SSO) with Azure AD (Microsoft Entra ID).
    *   It must use the **multi-tenant** app registration pattern.
2.  **SaaS Fulfillment API:**
    *   Implement webhook endpoints to handle subscription lifecycle events: `Activate`, `Update` (Plan change), `Unsubscribe`.
    *   Create a specific **Landing Page** for Azure customers to finish account setup after purchase.
3.  **Offer Creation:**
    *   Create a "SaaS Audit & Security" offer.
    *   Define Plans (e.g., "Bronze", "Silver", "Gold").
    *   Upload marketing assets (Screenshots, PDF specs).
4.  **Validation:**
    *   Submit to "preview". Test the purchase flow in a sandbox tenant.
    *   Go Live (Microsoft review takes 2-4 days).

---

## 3. GitHub Marketplace
**Goal:** List as a GitHub Action (Growth) and GitHub App (Revenue).

### A. GitHub Action (For Visibility/PLG)
1.  **Public Repo:** Ensure your action code is in a public repo (e.g., `precogs-ai/security-scan-action`).
2.  **`action.yml`:** Define inputs (API key, fail_on_severity) and outputs (report_url).
3.  **Documentation:** `README.md` must be excellent—usage examples, badges, screenshots.
4.  **Publish:**
    *   Draft a new Release in GitHub.
    *   Check "Publish this action to the GitHub Marketplace".
    *   *Requirement:* You must have 2FA enabled.

### B. GitHub App (For Sales/Revenue)
1.  **Create GitHub App:** In Developer Settings. Enable permissions (Read: Code, Write: Pull Requests, Read: Metadata).
2.  **Webhook Handling:** Your backend must listen to webhooks (Validation, Installation, PR_Open).
3.  **Marketplace Verification:**
    *   Organization must be "Verified" (Domain verification, 2FA).
    *   **Requirement:** 100+ installations to list a **paid** plan.
    *   *Strategy:* Start with a "Free" plan to get 100 installs, then introduce paid plans.

---

## 4. GitLab Partner Program
**Goal:** Integration Partner & CI/CD Catalog Component.

### Integration Steps
1.  **CI/CD Catalog Component:**
    *   Create a project in GitLab for your component.
    *   Enable "CI/CD Catalog resource" in settings.
    *   Create a `templates/` directory with your `.gitlab-ci.yml` template.
    *   Tag a release (Semantic Versioning). It automatically publishes to the Catalog.
2.  **Technology Partner:**
    *   Apply for the [GitLab Partner Program](https://partners.gitlab.com).
    *   Build a deep integration (e.g., show vulnerabilites directly in GitLab Merge Request widget).
    *   *Benefit:* Co-marketing and access to GitLab sales teams.

---

## Summary of Immediate Next Steps
1.  **GitHub:** Publish the existing GitHub Action to the Marketplace (Low effort, High visibility).
2.  **AWS:** Start the "Seller Account" registration process immediately (Long lead time).
3.  **Azure:** Ensure the "Azure AD / Entra ID" SSO work is prioritized (Technical blocker for listing).
