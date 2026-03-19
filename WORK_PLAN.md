# AWS Well-Architected Guide — Work Plan

> **Last updated:** 2026-03-20
> **Status:** Phase B 완료 — Phase C 대기 중
> **Purpose:** Persistent work plan that survives context resets. Always read this file first when resuming.
>
> **재개 방법:** 아래 Phase B 체크리스트에서 미완료(`[ ]`) 항목부터 시작. 파일이 `src/pages/` 에 있으면 완료된 것.

---

## Current State (as of last update)

### Completed
- [x] Project scaffold (Vite + React + react-router-dom)
- [x] Layout, Sidebar, Breadcrumb, Footer, PageNav components
- [x] All top-level pillar pages (6 pillars)
- [x] WelcomePage, AbstractPage, PillarsPage, ReviewProcessPage, ConclusionPage
- [x] ContributorsPage, FurtherReadingPage, DocumentRevisionsPage, AppendixPage, NoticesPage
- [x] navigation.js (shallow — pillar-level only)
- [x] pageOrder.js (17 entries, top-level only)
- [x] **Phase A 완료** — 58개 서브 페이지 (abstract/OE/Security/Reliability/Perf/Cost/Sus 전체)
- [x] App.jsx — 58개 라우트 추가 완료
- [x] navigation.js — 3~4단계 깊이 전체 확장 완료
- [x] **Phase B 완료** — 44개 부록 질문 페이지 (OPS1-5, SEC1-9, REL1-9, PERF1-8, COST1-7, SUS1-6)
- [x] App.jsx — 44개 부록 라우트 추가 완료
- [x] navigation.js — 부록 섹션 3단계 깊이 확장 완료

### Known Bugs (fix before or during Phase A)
- [ ] **PageNav.jsx** L8: `"← Previous"` → `"← 이전"`, L13: `"Next →"` → `"다음 →"`
- [ ] **PerformanceEfficiencyPage.jsx**: missing "네트워킹 및 콘텐츠 전송" best practices section
- [ ] **pageOrder.js**: missing appendix sub-paths (`/appendix/operational-excellence` etc.)
- [ ] **PageNav.css**: verify file exists (was flagged as potentially missing)

### Dev server
Runs at `http://localhost:5176/` via `npm run dev`.

---

## Phase Overview

| Phase | Scope | Est. Pages | Status |
|-------|-------|-----------|--------|
| A | Framework sub-pages (design principles, definition, best practices, sub-sections, resources) | ~58 | **Next** |
| B | Appendix question pages (OPS1–OPS5, SEC1–SEC9, REL1–REL9, PERF1–PERF8, COST1–COST7, SUS1–SUS6) | ~44 | Planned |
| C | Individual best-practice detail pages within appendix | ~300+ | Future |

---

## Phase A — Full Route & Page List

### Convention
- Route path format: `/pillar/sub-section`
- Component file: `src/pages/{PillarAbbr}{SubSection}Page.jsx`
- Source URL base: `https://docs.aws.amazon.com/wellarchitected/latest/framework/`
- All content translated to Korean from English source

### Abstract & Introduction Sub-pages (3 pages)

| Route | Component File | English Source URL |
|-------|---------------|-------------------|
| `/abstract/definitions` | `AbstractDefinitionsPage.jsx` | `definitions.html` |
| `/abstract/on-architecture` | `AbstractOnArchitecturePage.jsx` | `on-architecture.html` |
| `/abstract/general-design-principles` | `AbstractGeneralDesignPrinciplesPage.jsx` | `general-design-principles.html` |

### Operational Excellence Sub-pages (8 pages)

| Route | Component File | English Source URL |
|-------|---------------|-------------------|
| `/pillars/operational-excellence/design-principles` | `OEDesignPrinciplesPage.jsx` | `operational-excellence-design-principles.html` |
| `/pillars/operational-excellence/definition` | `OEDefinitionPage.jsx` | `operational-excellence-dfn.html` |
| `/pillars/operational-excellence/best-practices` | `OEBestPracticesPage.jsx` | `operational-excellence-bp.html` |
| `/pillars/operational-excellence/organization` | `OEOrganizationPage.jsx` | `ops-organization.html` |
| `/pillars/operational-excellence/prepare` | `OEPreparePage.jsx` | `ops-prepare.html` |
| `/pillars/operational-excellence/operate` | `OEOperatePage.jsx` | `ops-operate.html` |
| `/pillars/operational-excellence/evolve` | `OEEvolvePage.jsx` | `ops-evolve.html` |
| `/pillars/operational-excellence/resources` | `OEResourcesPage.jsx` | `ops-resources.html` |

### Security Sub-pages (11 pages)

| Route | Component File | English Source URL |
|-------|---------------|-------------------|
| `/pillars/security/design-principles` | `SecDesignPrinciplesPage.jsx` | `security-design-principles.html` |
| `/pillars/security/definition` | `SecDefinitionPage.jsx` | `security-securitydfn.html` |
| `/pillars/security/best-practices` | `SecBestPracticesPage.jsx` | `security-bp.html` |
| `/pillars/security/security-foundations` | `SecFoundationsPage.jsx` | `security-sec-foundations.html` |
| `/pillars/security/iam` | `SecIAMPage.jsx` | `security-iam.html` |
| `/pillars/security/detection` | `SecDetectionPage.jsx` | `security-detection.html` |
| `/pillars/security/infrastructure-protection` | `SecInfraProtectionPage.jsx` | `security-infra-protection.html` |
| `/pillars/security/data-protection` | `SecDataProtectionPage.jsx` | `security-data-protection.html` |
| `/pillars/security/incident-response` | `SecIncidentResponsePage.jsx` | `security-incident-response.html` |
| `/pillars/security/application-security` | `SecAppSecurityPage.jsx` | `security-application-security.html` |
| `/pillars/security/resources` | `SecResourcesPage.jsx` | `security-resources.html` |

### Reliability Sub-pages (8 pages)

| Route | Component File | English Source URL |
|-------|---------------|-------------------|
| `/pillars/reliability/design-principles` | `RelDesignPrinciplesPage.jsx` | `reliability-design-principles.html` |
| `/pillars/reliability/definition` | `RelDefinitionPage.jsx` | `reliability-dfn.html` |
| `/pillars/reliability/best-practices` | `RelBestPracticesPage.jsx` | `reliability-bp.html` |
| `/pillars/reliability/foundations` | `RelFoundationsPage.jsx` | `reliability-foundations.html` |
| `/pillars/reliability/workload-architecture` | `RelWorkloadArchPage.jsx` | `reliability-workload-architecture.html` |
| `/pillars/reliability/change-management` | `RelChangeManagementPage.jsx` | `reliability-change-management.html` |
| `/pillars/reliability/failure-management` | `RelFailureManagementPage.jsx` | `reliability-failure-management.html` |
| `/pillars/reliability/resources` | `RelResourcesPage.jsx` | `reliability-resources.html` |

### Performance Efficiency Sub-pages (9 pages)

| Route | Component File | English Source URL |
|-------|---------------|-------------------|
| `/pillars/performance-efficiency/design-principles` | `PerfDesignPrinciplesPage.jsx` | `performance-efficiency-design-principles.html` |
| `/pillars/performance-efficiency/definition` | `PerfDefinitionPage.jsx` | `performance-efficiency-dfn.html` |
| `/pillars/performance-efficiency/best-practices` | `PerfBestPracticesPage.jsx` | `performance-efficiency-bp.html` |
| `/pillars/performance-efficiency/architecture-selection` | `PerfArchSelectionPage.jsx` | `performance-efficiency-architecture-selection.html` |
| `/pillars/performance-efficiency/compute-hardware` | `PerfComputeHardwarePage.jsx` | `performance-efficiency-compute-hardware.html` |
| `/pillars/performance-efficiency/data-management` | `PerfDataManagementPage.jsx` | `performance-efficiency-data-management.html` |
| `/pillars/performance-efficiency/networking` | `PerfNetworkingPage.jsx` | `performance-efficiency-networking.html` |
| `/pillars/performance-efficiency/process-culture` | `PerfProcessCulturePage.jsx` | `performance-efficiency-process-culture.html` |
| `/pillars/performance-efficiency/resources` | `PerfResourcesPage.jsx` | `performance-efficiency-resources.html` |

### Cost Optimization Sub-pages (9 pages)

| Route | Component File | English Source URL |
|-------|---------------|-------------------|
| `/pillars/cost-optimization/design-principles` | `CostDesignPrinciplesPage.jsx` | `cost-optimization-design-principles.html` |
| `/pillars/cost-optimization/definition` | `CostDefinitionPage.jsx` | `cost-optimization-dfn.html` |
| `/pillars/cost-optimization/best-practices` | `CostBestPracticesPage.jsx` | `cost-optimization-bp.html` |
| `/pillars/cost-optimization/cloud-financial-management` | `CostCloudFinancialPage.jsx` | `cost-optimization-cloud-financial-management.html` |
| `/pillars/cost-optimization/expenditure-awareness` | `CostExpenditurePage.jsx` | `cost-optimization-expenditure-awareness.html` |
| `/pillars/cost-optimization/cost-effective-resources` | `CostEffectiveResourcesPage.jsx` | `cost-optimization-cost-effective-resources.html` |
| `/pillars/cost-optimization/manage-demand-supply` | `CostManageDemandPage.jsx` | `cost-optimization-manage-demand-supply.html` |
| `/pillars/cost-optimization/optimize-over-time` | `CostOptimizeOverTimePage.jsx` | `cost-optimization-optimize-over-time.html` |
| `/pillars/cost-optimization/resources` | `CostResourcesPage.jsx` | `cost-optimization-resources.html` |

### Sustainability Sub-pages (10 pages)

| Route | Component File | English Source URL |
|-------|---------------|-------------------|
| `/pillars/sustainability/design-principles` | `SusDesignPrinciplesPage.jsx` | `sustainability-design-principles.html` |
| `/pillars/sustainability/definition` | `SusDefinitionPage.jsx` | `sustainability-definition.html` |
| `/pillars/sustainability/best-practices` | `SusBestPracticesPage.jsx` | `sustainability-bp.html` |
| `/pillars/sustainability/region-selection` | `SusRegionSelectionPage.jsx` | `sustainability-region-selection.html` |
| `/pillars/sustainability/alignment-to-demand` | `SusAlignmentPage.jsx` | `sustainability-alignment-to-demand.html` |
| `/pillars/sustainability/software-architecture` | `SusSoftwareArchPage.jsx` | `sustainability-software-architecture.html` |
| `/pillars/sustainability/data-management` | `SusDataManagementPage.jsx` | `sustainability-data-management.html` |
| `/pillars/sustainability/hardware-services` | `SusHardwareServicesPage.jsx` | `sustainability-hardware-services.html` |
| `/pillars/sustainability/process-culture` | `SusProcessCulturePage.jsx` | `sustainability-process-culture.html` |
| `/pillars/sustainability/resources` | `SusResourcesPage.jsx` | `sustainability-resources.html` |

**Phase A Total: 58 new pages**

---

## Phase A — Execution Checklist

When resuming after context reset, check which items are done (look at existing files in `src/pages/`):

### Step 0: Bug Fixes (do first)
- [ ] Fix `src/components/PageNav.jsx`: "← Previous" → "← 이전", "Next →" → "다음 →"
- [ ] Fix `src/pages/PerformanceEfficiencyPage.jsx`: add 네트워킹 및 콘텐츠 전송 section
- [ ] Verify `src/components/PageNav.css` exists (create if missing)
- [ ] Add appendix sub-paths to `src/data/pageOrder.js`

### Step 1: Fetch Content (parallel agents)
Run 6 parallel WebFetch agents, one per pillar (+ abstract). Each fetches all sub-pages for that pillar. Agents summarize content in Korean for page creation.

### Step 2: Create Page Components
Create all 58 `.jsx` files using the `DocContent.css` pattern. Template:
```jsx
import "../components/DocContent.css";

export default function XxxPage() {
  return (
    <article className="doc-content">
      <h1>페이지 제목</h1>
      {/* content */}
    </article>
  );
}
```

### Step 3: Update navigation.js
Expand to 3-4 levels deep. Full structure is documented in the "Target Navigation Structure" section below.

### Step 4: Add Routes to App.jsx
Add all 58 routes using the exact paths in Phase A route list above.

### Step 5: Update pageOrder.js
Add all 58 paths in reading order (after existing pillar pages, before appendix).

### Step 6: Commit & Push
One commit per logical group (e.g., per pillar or per step).

---

## Target Navigation Structure (navigation.js)

```
Framework (/)
  AWS Well-Architected Framework (/)
  개요 및 소개 (/abstract-and-introduction)
    정의 (/abstract/definitions)
    건축에 관하여 (/abstract/on-architecture)
    일반적인 설계 원칙 (/abstract/general-design-principles)
  Framework의 기둥들 (/pillars)
    운영 우수성 (/pillars/operational-excellence)
      설계 원칙 (/pillars/operational-excellence/design-principles)
      정의 (/pillars/operational-excellence/definition)
      모범 사례 (/pillars/operational-excellence/best-practices)
        조직 (/pillars/operational-excellence/organization)
        준비 (/pillars/operational-excellence/prepare)
        운영 (/pillars/operational-excellence/operate)
        발전 (/pillars/operational-excellence/evolve)
      자원 (/pillars/operational-excellence/resources)
    보안 (/pillars/security)
      설계 원칙 (/pillars/security/design-principles)
      정의 (/pillars/security/definition)
      모범 사례 (/pillars/security/best-practices)
        보안 기반 (/pillars/security/security-foundations)
        신원 및 접근 관리 (/pillars/security/iam)
        탐지 (/pillars/security/detection)
        인프라 보호 (/pillars/security/infrastructure-protection)
        데이터 보호 (/pillars/security/data-protection)
        사고 대응 (/pillars/security/incident-response)
        애플리케이션 보안 (/pillars/security/application-security)
      자원 (/pillars/security/resources)
    안정성 (/pillars/reliability)
      설계 원칙 (/pillars/reliability/design-principles)
      정의 (/pillars/reliability/definition)
      모범 사례 (/pillars/reliability/best-practices)
        기초 (/pillars/reliability/foundations)
        워크로드 아키텍처 (/pillars/reliability/workload-architecture)
        변화 관리 (/pillars/reliability/change-management)
        실패 관리 (/pillars/reliability/failure-management)
      자원 (/pillars/reliability/resources)
    성능 효율성 (/pillars/performance-efficiency)
      설계 원칙 (/pillars/performance-efficiency/design-principles)
      정의 (/pillars/performance-efficiency/definition)
      모범 사례 (/pillars/performance-efficiency/best-practices)
        아키텍처 선택 (/pillars/performance-efficiency/architecture-selection)
        컴퓨팅 및 하드웨어 (/pillars/performance-efficiency/compute-hardware)
        데이터 관리 (/pillars/performance-efficiency/data-management)
        네트워킹 및 콘텐츠 전달 (/pillars/performance-efficiency/networking)
        프로세스와 문화 (/pillars/performance-efficiency/process-culture)
      자원 (/pillars/performance-efficiency/resources)
    비용 최적화 (/pillars/cost-optimization)
      설계 원칙 (/pillars/cost-optimization/design-principles)
      정의 (/pillars/cost-optimization/definition)
      모범 사례 (/pillars/cost-optimization/best-practices)
        클라우드 기반 재무 관리 (/pillars/cost-optimization/cloud-financial-management)
        지출 및 사용량 인식 (/pillars/cost-optimization/expenditure-awareness)
        비용 효율적인 리소스 (/pillars/cost-optimization/cost-effective-resources)
        수요와 공급 자원 관리 (/pillars/cost-optimization/manage-demand-supply)
        시간 경과에 따른 최적화 (/pillars/cost-optimization/optimize-over-time)
      자원 (/pillars/cost-optimization/resources)
    지속 가능성 (/pillars/sustainability)
      설계 원칙 (/pillars/sustainability/design-principles)
      정의 (/pillars/sustainability/definition)
      모범 사례 (/pillars/sustainability/best-practices)
        지역 선택 (/pillars/sustainability/region-selection)
        수요에 맞춘 조정 (/pillars/sustainability/alignment-to-demand)
        소프트웨어 및 아키텍처 (/pillars/sustainability/software-architecture)
        데이터 관리 (/pillars/sustainability/data-management)
        하드웨어 및 서비스 (/pillars/sustainability/hardware-services)
        프로세스와 문화 (/pillars/sustainability/process-culture)
      자원 (/pillars/sustainability/resources)
  검토 프로세스 (/review-process)
  결론 (/conclusion)
  기여자 (/contributors)
  추가 참고 자료 (/further-reading)
  문서 개정 이력 (/document-revisions)

부록: 질문 및 모범 사례 (/appendix)
  운영 우수성 (/appendix/operational-excellence)
  보안 (/appendix/security)
  안정성 (/appendix/reliability)
  성능 효율성 (/appendix/performance-efficiency)
  비용 최적화 (/appendix/cost-optimization)
  지속 가능성 (/appendix/sustainability)

공지사항 (/notices)
AWS 용어집 (/aws-glossary)
```

---

## Phase B — Appendix Question Pages

Each pillar appendix page contains individual Well-Architected question pages.
**총 44개 페이지. 기둥별로 커밋함.**

### Phase B 파일 명명 규칙
- `src/pages/AppendixOps{n}Page.jsx` (n=1~5)
- `src/pages/AppendixSec{n}Page.jsx` (n=1~9)
- `src/pages/AppendixRel{n}Page.jsx` (n=1~9)
- `src/pages/AppendixPerf{n}Page.jsx` (n=1~8)
- `src/pages/AppendixCost{n}Page.jsx` (n=1~7)
- `src/pages/AppendixSus{n}Page.jsx` (n=1~6)

### Phase B 체크리스트 (재개 시 여기서 확인)

#### OPS — 운영 우수성 (5개)
- [ ] `AppendixOps1Page.jsx` — `/appendix/operational-excellence/ops1` — 우선순위 결정
- [ ] `AppendixOps2Page.jsx` — `/appendix/operational-excellence/ops2` — 조직 구조
- [ ] `AppendixOps3Page.jsx` — `/appendix/operational-excellence/ops3` — 조직 문화
- [ ] `AppendixOps4Page.jsx` — `/appendix/operational-excellence/ops4` — 워크로드 상태 이해
- [ ] `AppendixOps5Page.jsx` — `/appendix/operational-excellence/ops5` — 운영 준비성
- [ ] App.jsx 라우트 추가 (OPS batch)
- [ ] navigation.js 업데이트 (OPS batch)
- [ ] git commit + push (OPS batch)

#### SEC — 보안 (9개)
- [ ] `AppendixSec1Page.jsx` — `/appendix/security/sec1` — 보안 기반 운영
- [ ] `AppendixSec2Page.jsx` — `/appendix/security/sec2` — 사람 신원 관리
- [ ] `AppendixSec3Page.jsx` — `/appendix/security/sec3` — 머신 신원 관리
- [ ] `AppendixSec4Page.jsx` — `/appendix/security/sec4` — 권한 관리
- [ ] `AppendixSec5Page.jsx` — `/appendix/security/sec5` — 탐지 제어
- [ ] `AppendixSec6Page.jsx` — `/appendix/security/sec6` — 네트워크 보호
- [ ] `AppendixSec7Page.jsx` — `/appendix/security/sec7` — 컴퓨팅 보호
- [ ] `AppendixSec8Page.jsx` — `/appendix/security/sec8` — 저장 데이터 보호
- [ ] `AppendixSec9Page.jsx` — `/appendix/security/sec9` — 전송 데이터 보호
- [ ] App.jsx 라우트 추가 (SEC batch)
- [ ] navigation.js 업데이트 (SEC batch)
- [ ] git commit + push (SEC batch)

#### REL — 안정성 (9개)
- [ ] `AppendixRel1Page.jsx` — `/appendix/reliability/rel1` — 서비스 한도 관리
- [ ] `AppendixRel2Page.jsx` — `/appendix/reliability/rel2` — 네트워크 토폴로지
- [ ] `AppendixRel3Page.jsx` — `/appendix/reliability/rel3` — 워크로드 서비스 아키텍처
- [ ] `AppendixRel4Page.jsx` — `/appendix/reliability/rel4` — 분산 시스템 상호작용
- [ ] `AppendixRel5Page.jsx` — `/appendix/reliability/rel5` — 모니터링
- [ ] `AppendixRel6Page.jsx` — `/appendix/reliability/rel6` — 수요 적응
- [ ] `AppendixRel7Page.jsx` — `/appendix/reliability/rel7` — 변경 구현
- [ ] `AppendixRel8Page.jsx` — `/appendix/reliability/rel8` — 백업
- [ ] `AppendixRel9Page.jsx` — `/appendix/reliability/rel9` — 재해 복구
- [ ] App.jsx 라우트 추가 (REL batch)
- [ ] navigation.js 업데이트 (REL batch)
- [ ] git commit + push (REL batch)

#### PERF — 성능 효율성 (8개)
- [ ] `AppendixPerf1Page.jsx` — `/appendix/performance-efficiency/perf1` — 아키텍처 선택
- [ ] `AppendixPerf2Page.jsx` — `/appendix/performance-efficiency/perf2` — 컴퓨팅 솔루션
- [ ] `AppendixPerf3Page.jsx` — `/appendix/performance-efficiency/perf3` — 스토리지 솔루션
- [ ] `AppendixPerf4Page.jsx` — `/appendix/performance-efficiency/perf4` — 데이터베이스 솔루션
- [ ] `AppendixPerf5Page.jsx` — `/appendix/performance-efficiency/perf5` — 네트워크 솔루션
- [ ] `AppendixPerf6Page.jsx` — `/appendix/performance-efficiency/perf6` — 성능 검토
- [ ] `AppendixPerf7Page.jsx` — `/appendix/performance-efficiency/perf7` — 성능 모니터링
- [ ] `AppendixPerf8Page.jsx` — `/appendix/performance-efficiency/perf8` — 트레이드오프
- [ ] App.jsx 라우트 추가 (PERF batch)
- [ ] navigation.js 업데이트 (PERF batch)
- [ ] git commit + push (PERF batch)

#### COST — 비용 최적화 (7개)
- [ ] `AppendixCost1Page.jsx` — `/appendix/cost-optimization/cost1` — 클라우드 재무 관리 방법
- [ ] `AppendixCost2Page.jsx` — `/appendix/cost-optimization/cost2` — 거버넌스
- [ ] `AppendixCost3Page.jsx` — `/appendix/cost-optimization/cost3` — 비용 효율적 리소스 유형
- [ ] `AppendixCost4Page.jsx` — `/appendix/cost-optimization/cost4` — 요금 모델 활용
- [ ] `AppendixCost5Page.jsx` — `/appendix/cost-optimization/cost5` — 리소스 관리
- [ ] `AppendixCost6Page.jsx` — `/appendix/cost-optimization/cost6` — 수요와 공급 관리
- [ ] `AppendixCost7Page.jsx` — `/appendix/cost-optimization/cost7` — 시간 경과에 따른 최적화
- [ ] App.jsx 라우트 추가 (COST batch)
- [ ] navigation.js 업데이트 (COST batch)
- [ ] git commit + push (COST batch)

#### SUS — 지속 가능성 (6개)
- [ ] `AppendixSus1Page.jsx` — `/appendix/sustainability/sus1` — 지역 선택
- [ ] `AppendixSus2Page.jsx` — `/appendix/sustainability/sus2` — 사용자 행동 패턴 정렬
- [ ] `AppendixSus3Page.jsx` — `/appendix/sustainability/sus3` — 소프트웨어 및 아키텍처
- [ ] `AppendixSus4Page.jsx` — `/appendix/sustainability/sus4` — 데이터 관리
- [ ] `AppendixSus5Page.jsx` — `/appendix/sustainability/sus5` — 하드웨어 패턴
- [ ] `AppendixSus6Page.jsx` — `/appendix/sustainability/sus6` — 개발 및 배포 프로세스
- [ ] App.jsx 라우트 추가 (SUS batch)
- [ ] navigation.js 업데이트 (SUS batch)
- [ ] git commit + push (SUS batch)

**Phase B Total: 44 pages**

---

## Phase C — Individual Best Practice Detail Pages (future)

Each question has 3–8 best practices, each with its own page. ~300+ pages total. Scope and URLs to be determined when Phase B is complete.

---

## File Naming Conventions

- Page components: `src/pages/{Abbr}{Description}Page.jsx`
  - Abbreviations: `OE` (Operational Excellence), `Sec` (Security), `Rel` (Reliability), `Perf` (Performance Efficiency), `Cost` (Cost Optimization), `Sus` (Sustainability), `Abstract`
- CSS: existing `DocContent.css` shared across all pages — no new CSS files needed per page
- Data: `src/data/navigation.js`, `src/data/pageOrder.js`

## Code Pattern for New Pages

```jsx
import "../components/DocContent.css";

export default function PageNamePage() {
  return (
    <article className="doc-content">
      <h1>한국어 제목</h1>
      <p>내용...</p>
    </article>
  );
}
```

Use `<h2>`, `<h3>`, `<ul>`, `<ol>`, `<p>`, `<strong>`, `<code>` for content structure.
Use `<div className="doc-note">` for note/tip callout boxes.
Use `<div className="doc-table-wrapper"><table>` for tables.
