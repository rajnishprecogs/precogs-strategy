# Precogs AI Business Strategy

## Table of Contents
1. [Competitive Analysis](#competitive-analysis)
2. [Product Roadmap](#product-roadmap)
3. [Market Positioning](#market-positioning)

---

# Competitive Analysis

## Executive Summary

The application security market is valued at **$10.4B in 2024** and projected to reach **$34.8B by 2033** (CAGR 14.33%). Precogs AI operates in a crowded but rapidly evolving market where AI-native solutions are becoming the key differentiator.

---

## Tier 1: Direct Competitors (Funded Leaders)

### Snyk
| Attribute | Details |
|-----------|---------|
| **Founded** | 2015 |
| **Funding** | $1B+ |
| **Focus** | Developer-first security (SCA, SAST, Container, IaC) |
| **Pricing** | Free tier → $599-$1659/mo → Enterprise custom ($5K-$70K/year) |
| **Strengths** | - DeepCode AI Fix (real-time remediation)<br>- Massive vulnerability database<br>- 35+ IDE integrations<br>- AI-driven reachability analysis |
| **Weaknesses** | - Higher false positive rates reported<br>- Expensive at scale<br>- Limited compliance features |
| **Precogs Advantage** | Lower false positives, better compliance automation, competitive pricing |

### Checkmarx
| Attribute | Details |
|-----------|---------|
| **Founded** | 2006 |
| **Funding** | Private Equity (Hellman & Friedman) |
| **Focus** | Enterprise SAST/SCA/DAST (Checkmarx One platform) |
| **Pricing** | Starts ~$59K/year (enterprise-focused) |
| **Strengths** | - 35+ languages, 80+ frameworks<br>- Acquired ZAP (DAST)<br>- Strong enterprise governance<br>- ASPM & Cloud Insights (2024) |
| **Weaknesses** | - Very expensive<br>- No free tier<br>- Complex setup<br>- Slower scan times |
| **Precogs Advantage** | Faster scans, AI-native architecture, SMB-friendly pricing, easier setup |

### Veracode
| Attribute | Details |
|-----------|---------|
| **Founded** | 2006 |
| **Funding** | Private (PE-owned) |
| **Focus** | Comprehensive SAST/DAST/SCA + Pen Testing |
| **Pricing** | SAST: $15K+/year, SCA: $12K+/year, Full suite: $100K-$500K+/year |
| **Strengths** | - <1.1% false positive rate (guaranteed)<br>- 40+ integrations<br>- AI-assisted remediation (Veracode Fix)<br>- Strong compliance/regulated industries |
| **Weaknesses** | - Extremely expensive<br>- Legacy UI<br>- Slow enterprise sales cycle |
| **Precogs Advantage** | Modern AI-native approach, faster time-to-value, more affordable |

---

## Tier 2: Emerging Challengers

### Aikido Security
| Attribute | Details |
|-----------|---------|
| **Founded** | 2022 (Belgium) |
| **Funding** | $17M Series A |
| **Focus** | All-in-one security for SMBs (code-to-cloud) |
| **Pricing** | Affordable, tiered (targets Snyk's lower market) |
| **Strengths** | - Low false positives (only alerts reachable vulns)<br>- SOC2/ISO 27001 compliance built-in<br>- AI autofix<br>- Simple UI |
| **Positioning** | **Most similar competitor to Precogs AI** |

### OX Security
| Attribute | Details |
|-----------|---------|
| **Focus** | Code-to-runtime security with AI IDE integration |
| **Differentiator** | Real-time protection embedded in AI editors |

### Legit Security
| Attribute | Details |
|-----------|---------|
| **Focus** | ASPM - Application Security Posture Management |
| **Differentiator** | Software supply chain + AI development workflow security |

### Bright Security
| Attribute | Details |
|-----------|---------|
| **Focus** | Developer-first DAST |
| **Differentiator** | Zero false positive guarantee via AI validation |

---

## Tier 3: Platform Giants

| Company | Focus | Threat Level to Precogs |
|---------|-------|------------------------|
| **GitHub Advanced Security** | Native GitHub scanning (CodeQL) | High (bundled with GitHub) |
| **GitLab Ultimate** | Integrated DevSecOps | Medium (GitLab-only) |
| **Palo Alto (Prisma Cloud)** | Cloud-native security | Low (different market) |
| **SentinelOne** | XDR/Endpoint | Low (different market) |

---

## Competitive Pricing Matrix

| Vendor | Free Tier | Entry Price | Enterprise |
|--------|-----------|-------------|------------|
| **Snyk** | ✅ 200 tests | $599/mo | $5K-$70K/year |
| **Checkmarx** | ❌ None | ~$59K/year | Custom |
| **Veracode** | ❌ Trial only | $15K/year | $100K-$500K/year |
| **Aikido** | ✅ Yes | Low (SMB-friendly) | Custom |
| **GitHub GHAS** | ❌ None | $19+$21/user/mo | ~$48K/100 devs |
| **Precogs AI** | ✅ Yes | $29/user/mo | Custom (30-50% below competitors) |

---

## Key Market Gaps (Opportunities for Precogs AI)

### 1. **False Positive Fatigue**
- **Problem**: 30-60% false positive rates with traditional SAST
- **Opportunity**: AI-verified findings with <5% false positive rate
- **Competitive Moat**: Gemini-powered semantic analysis understands code intent

### 2. **API Security Blind Spots**
- **Problem**: Shadow APIs, lack of full API visibility
- **Opportunity**: Add dedicated API discovery and security testing
- **Action**: Roadmap item for H2 2025

### 3. **Supply Chain Attacks**
- **Problem**: Dramatic increase in dependency/supply chain attacks
- **Opportunity**: Enhanced SBOM + transitive dependency analysis
- **Current State**: ✅ Already have SBOM generation

### 4. **Compliance Automation Gap**
- **Problem**: Audit prep takes weeks, manual evidence gathering
- **Opportunity**: One-click compliance reports (ISO 27001, SOC2, GDPR)
- **Current State**: ✅ Already a strength

### 5. **AI-Generated Code Vulnerabilities**
- **Problem**: Copilot/AI assistants introduce new vulnerability patterns
- **Opportunity**: Specialized detection for AI-generated code patterns
- **Action**: Roadmap item for 2025

### 6. **Cost Prohibition for SMBs**
- **Problem**: Enterprise tools ($50K+) inaccessible to startups/SMBs
- **Opportunity**: Affordable, powerful security for growing teams
- **Current State**: ✅ Pricing advantage

---

## Product Offering Comparison

### Security Testing Capabilities Matrix

| Capability | Snyk | Checkmarx | Veracode | Aikido | GitHub GHAS | Precogs AI |
|------------|:----:|:---------:|:--------:|:------:|:-----------:|:----------:|
| **SAST** (Static Analysis) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **SCA** (Dependency Scanning) | ✅ | ✅ | ✅ | ✅ | ✅ (Dependabot) | ✅ |
| **DAST** (Dynamic Testing) | ❌ | ✅ (ZAP) | ✅ | ✅ | ❌ | ❌ |
| **IAST** (Interactive) | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| **RASP** (Runtime Protection) | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ |
| **Container Scanning** | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| **IaC Scanning** | ✅ | ✅ | ❌ | ✅ | ❌ | ⚠️ Partial |
| **Secret Detection** | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ |
| **API Security** | ❌ | ✅ | ✅ | ✅ | ❌ | ❌ |
| **Cloud Security (CSPM)** | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| **SBOM Generation** | ⚠️ Basic | ⚠️ Basic | ⚠️ Basic | ✅ | ⚠️ Basic | ✅ |
| **License Compliance** | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ |
| **Compliance Mapping** | ❌ | ⚠️ Limited | ✅ | ✅ | ❌ | ✅ |
| **AI Auto-Fix** | ✅ DeepCode | ✅ AI Champion | ✅ Veracode Fix | ✅ | ✅ Copilot | ✅ Gemini |
| **Reachability Analysis** | ✅ | ❌ | ❌ | ✅ | ❌ | ⚠️ Roadmap |

### Delivery Models

| Model | Snyk | Checkmarx | Veracode | Aikido | GitHub GHAS | Precogs AI |
|-------|:----:|:---------:|:--------:|:------:|:-----------:|:----------:|
| **SaaS (Cloud)** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Self-Hosted** | ✅ | ✅ | ❌ | ❌ | ❌ | ⚠️ Roadmap |
| **IDE Plugin** | ✅ 35+ | ✅ | ✅ | ❌ | ✅ | ⚠️ Roadmap |
| **CLI Tool** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **CI/CD Integration** | ✅ | ✅ | ✅ | ✅ | ✅ Native | ✅ |
| **GitHub App** | ✅ | ⚠️ Basic | ⚠️ Basic | ✅ | ✅ Native | ✅ |
| **GitLab Integration** | ✅ | ✅ | ⚠️ Basic | ✅ | ❌ | ✅ |
| **Bitbucket Integration** | ✅ | ✅ | ✅ | ✅ | ❌ | ⚠️ Roadmap |

---

## 🎯 What to Build Next (Prioritized Recommendations)

Based on the competitive analysis and market gaps, here's the prioritized build order:

### Immediate Priority (Next 30 Days)

| # | Feature | Why Build Now | Competitive Gap | Effort | Impact |
|---|---------|---------------|-----------------|--------|--------|
| **1** | **IDE Plugins (VS Code)** | Developers expect inline scanning | Snyk, Checkmarx have this | Medium | High |
| **2** | **Reachability Analysis** | Show exploitability, reduce false positives | Only Snyk & Aikido have this | Medium | Very High |
| **3** | **Bitbucket Integration** | Complete git platform coverage | Table stakes | Low | Medium |

### High Priority (Next 60-90 Days)

| # | Feature | Why Build Now | Competitive Gap | Effort | Impact |
|---|---------|---------------|-----------------|--------|--------|
| **4** | **Container Scanning** | Required for cloud-native orgs | We're missing vs all competitors | High | High |
| **5** | **DAST (Dynamic Testing)** | Complete the AppSec triad | Checkmarx, Veracode, Aikido have it | High | High |
| **6** | **AI-Generated Code Detection** | New market, no one owns this yet | **Blue ocean opportunity** | Medium | Very High |

### Strategic Priority (Next 6 Months)

| # | Feature | Why Build Now | Competitive Gap | Effort | Impact |
|---|---------|---------------|-----------------|--------|--------|
| **7** | **API Security Module** | Fastest growing attack vector | Market gap, high demand | Very High | Very High |
| **8** | **ASPM Dashboard** | Hot new category (Gartner) | Legit Security, Checkmarx entering | High | High |
| **9** | **Runtime Protection (RASP)** | Code-to-runtime story | Only Aikido has this currently | Very High | Medium |

### Recommended Build Sequence

```
Q1 2025                    Q2 2025                    Q3 2025
────────────────────────   ────────────────────────   ────────────────────────
1. IDE Plugins             4. Container Scanning      7. API Security Module
2. Reachability Analysis   5. DAST Module             8. ASPM Dashboard  
3. Bitbucket Integration   6. AI-Code Detection       9. RASP
```

### Decision Framework: Why This Order?

1. **IDE Plugins First**: Low-hanging fruit, massive developer adoption impact, table stakes for serious buyers
2. **Reachability Analysis**: Directly supports our "no false positives" positioning—this is a MOAT builder
3. **Container Scanning**: Can't sell to cloud-native orgs without it—removes objection
4. **DAST**: Completes the testing story; enterprise buyers want SAST+DAST together
5. **AI-Generated Code Detection**: First-mover advantage in emerging category—this could be our signature feature
6. **API Security**: Huge market demand but high effort; build after foundation is solid

### What NOT to Build (At Least Not Yet)

| Feature | Why Skip |
|---------|----------|
| **IAST** | Declining category; DAST + RASP covers use cases |
| **CSPM** (Cloud Security Posture) | Different market; focus on code security first |
| **Mobile App Security** | Niche; low enterprise demand relative to effort |
| **Pen Testing as a Service** | Service business, not product; partner instead |

---

# Product Roadmap

## Strategic Principles

> **"Win by being the most accurate, fastest, and affordable AI-native security platform."**

### Core Differentiators to Maintain
1. **AI-First Architecture** - Not bolted-on AI, but Gemini-native
2. **False Positive Elimination** - AI-verified findings only
3. **Compliance Automation** - One-click audit-ready reports
4. **Developer Experience** - 2-line YAML integration

---

## Phase 1: Foundation & Parity (Q1 2025)

**Goal**: Feature parity with Aikido/entry Snyk on core capabilities

| Priority | Feature | Competitive Context | Effort |
|----------|---------|---------------------|--------|
| 🔴 P0 | **Language Coverage Expansion** | Currently 20+ languages; Snyk has 35+, Checkmarx 35+ | High |
| 🔴 P0 | **IDE Plugin (VS Code, IntelliJ)** | Snyk, Checkmarx have strong IDE presence | Medium |
| 🟡 P1 | **Bitbucket Integration** | GitHub/GitLab done; Bitbucket missing | Medium |
| 🟡 P1 | **Azure DevOps Native Support** | Partial support exists | Low |
| 🟢 P2 | **Improved Onboarding Flow** | Aikido praised for simple setup | Low |

### Success Metrics
- [ ] 30+ language support
- [ ] 500+ active installations
- [ ] <3 min average onboarding time

---

## Phase 2: Differentiation (Q2-Q3 2025)

**Goal**: Features competitors don't have or do poorly

| Priority | Feature | Why It Matters | Effort |
|----------|---------|----------------|--------|
| 🔴 P0 | **AI Code Intent Analysis** | Detect business logic flaws (competitors can't) | High |
| 🔴 P0 | **AI-Generated Code Detection** | New attack vector from Copilot/ChatGPT code | Medium |
| 🔴 P0 | **Reachability Analysis** | Show if vulnerability is actually exploitable | High |
| 🟡 P1 | **API Security Module** | Dedicated API discovery + testing (market gap) | High |
| 🟡 P1 | **Runtime Protection (RASP)** | Code-to-runtime security story | High |
| 🟢 P2 | **Custom Compliance Frameworks** | Support company-specific policies | Medium |

### Success Metrics
- [ ] 50% reduction in reported false positives vs. Q1
- [ ] 3+ enterprise POCs completed
- [ ] API Security module launched

---

## Phase 3: Scale & Enterprise (Q4 2025 - Q1 2026)

**Goal**: Win enterprise deals against Checkmarx/Veracode

| Priority | Feature | Why It Matters | Effort |
|----------|---------|----------------|--------|
| 🔴 P0 | **ASPM Dashboard** | Application Security Posture Management (hot category) | High |
| 🔴 P0 | **Risk Quantification** | Translate vulns to business/financial risk | Medium |
| 🔴 P0 | **SSO/SCIM Enterprise Identity** | Table stakes for enterprise | Medium |
| 🟡 P1 | **On-Premises Deployment** | Air-gapped/regulated industries | High |
| 🟡 P1 | **Workflow Automation** | Auto-create Jira tickets, Slack alerts | Low |
| 🟢 P2 | **Container Scanning** | Snyk's strong point; needed for parity | High |

### Success Metrics
- [ ] 3+ enterprise contracts signed
- [ ] SOC2 Type II certified
- [ ] 1,000+ organizations using platform

---

## Feature Prioritization Framework

```
                    HIGH DIFFERENTIATION
                           │
     ┌─────────────────────┼─────────────────────┐
     │                     │                     │
     │   AI Code Intent    │   API Security      │
     │   Analysis          │   Module            │
     │   (DO FIRST)        │   (DO NEXT)         │
     │                     │                     │
LOW ─┼─────────────────────┼─────────────────────┼─ HIGH
EFFORT                     │                     │  EFFORT
     │                     │                     │
     │   IDE Plugins       │   On-Prem Deploy    │
     │   Bitbucket Int     │   Container Scan    │
     │   (QUICK WINS)      │   (STRATEGIC)       │
     │                     │                     │
     └─────────────────────┼─────────────────────┘
                           │
                    LOW DIFFERENTIATION
```

---

# Market Positioning

## Recommended Positioning Statement

> **"Precogs AI is the AI-native application security platform that finds real vulnerabilities, not noise. While legacy tools generate thousands of false positives, our Gemini-powered engine verifies every finding—delivering 90% fewer alerts that actually matter. Stop triaging. Start fixing."**

---

## Competitive Positioning Map

```
                    ENTERPRISE-FOCUSED
                           │
     ┌─────────────────────┼─────────────────────┐
     │                     │                     │
     │   Checkmarx         │   Veracode          │
     │   ($$$$)            │   ($$$$)            │
     │                     │                     │
LEGACY ───────────────────┼─────────────────────── AI-NATIVE
RULES-BASED               │                        SEMANTIC
     │                     │                     │
     │   SonarQube         │   ⭐ PRECOGS AI     │
     │   GitHub GHAS       │   Aikido            │
     │   ($-$$)            │   Snyk              │
     │                     │   ($$)              │
     └─────────────────────┼─────────────────────┘
                           │
                    DEVELOPER-FOCUSED
```

---

## Go-To-Market Recommendations

### Short-term (0-6 months)
1. **Target Aikido's market** - SMBs frustrated with Snyk pricing
2. **Lead with false positive story** - Demo head-to-head comparisons
3. **Compliance as wedge** - ISO 27001/SOC2 automation is underserved
4. **GitHub Marketplace visibility** - PLG motion for developers

### Medium-term (6-12 months)
1. **AWS/Azure Marketplace** - Capture enterprise cloud commits
2. **Analyst relations** - Get on Gartner/Forrester radar
3. **Partner with MSSPs** - Channel sales motion
4. **Case studies** - Document enterprise wins

### Long-term (12+ months)
1. **Platform expansion** - API security, container security, RASP
2. **Vertical focus** - FinTech, HealthTech (regulated industries)
3. **International expansion** - EU data residency compliance

---

## Key Battles to Win

| Battle | Opponent | Our Weapon |
|--------|----------|------------|
| **False Positive War** | All competitors | AI-verified findings |
| **Price War** | Snyk, Checkmarx | 30-50% lower cost |
| **Speed War** | Veracode | Seconds not minutes |
| **Compliance War** | GitHub GHAS | One-click audit reports |
| **Developer Experience** | SonarQube | 2-line YAML, modern UI |

---

## Appendix: Competitor Watch List

### Track Weekly
- [@snyksec](https://twitter.com/snyksec) - Snyk
- [@Checkmarx](https://twitter.com/Checkmarx) - Checkmarx  
- [@Veracode](https://twitter.com/Veracode) - Veracode
- [@AikidoSecurity](https://twitter.com/AikidoSecurity) - Aikido

### Monitor Product Updates
- [Snyk Blog](https://snyk.io/blog/)
- [Checkmarx Blog](https://checkmarx.com/blog/)
- [Aikido Changelog](https://aikido.dev/changelog)

---

*Document Version: 1.0 | December 2025 | Precogs AI Strategic Planning*
