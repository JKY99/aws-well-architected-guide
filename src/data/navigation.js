export const navigationData = [
  {
    id: "framework",
    title: "Framework",
    path: "/",
    children: [
      {
        id: "welcome",
        title: "AWS Well-Architected Framework",
        path: "/",
      },
      {
        id: "abstract",
        title: "개요 및 소개",
        path: "/abstract-and-introduction",
        children: [
          {
            id: "abstract-definitions",
            title: "정의",
            path: "/abstract/definitions",
          },
          {
            id: "abstract-on-architecture",
            title: "건축에 관하여",
            path: "/abstract/on-architecture",
          },
          {
            id: "abstract-general-design-principles",
            title: "일반적인 설계 원칙",
            path: "/abstract/general-design-principles",
          },
        ],
      },
      {
        id: "pillars",
        title: "Framework의 기둥들",
        path: "/pillars",
        children: [
          {
            id: "operational-excellence",
            title: "운영 우수성",
            path: "/pillars/operational-excellence",
            children: [
              {
                id: "oe-design-principles",
                title: "설계 원칙",
                path: "/pillars/operational-excellence/design-principles",
              },
              {
                id: "oe-definition",
                title: "정의",
                path: "/pillars/operational-excellence/definition",
              },
              {
                id: "oe-best-practices",
                title: "모범 사례",
                path: "/pillars/operational-excellence/best-practices",
                children: [
                  {
                    id: "oe-organization",
                    title: "조직",
                    path: "/pillars/operational-excellence/organization",
                  },
                  {
                    id: "oe-prepare",
                    title: "준비",
                    path: "/pillars/operational-excellence/prepare",
                  },
                  {
                    id: "oe-operate",
                    title: "운영",
                    path: "/pillars/operational-excellence/operate",
                  },
                  {
                    id: "oe-evolve",
                    title: "발전",
                    path: "/pillars/operational-excellence/evolve",
                  },
                ],
              },
              {
                id: "oe-resources",
                title: "자원",
                path: "/pillars/operational-excellence/resources",
              },
            ],
          },
          {
            id: "security",
            title: "보안",
            path: "/pillars/security",
            children: [
              {
                id: "sec-design-principles",
                title: "설계 원칙",
                path: "/pillars/security/design-principles",
              },
              {
                id: "sec-definition",
                title: "정의",
                path: "/pillars/security/definition",
              },
              {
                id: "sec-best-practices",
                title: "모범 사례",
                path: "/pillars/security/best-practices",
                children: [
                  {
                    id: "sec-foundations",
                    title: "보안 기반",
                    path: "/pillars/security/security-foundations",
                  },
                  {
                    id: "sec-iam",
                    title: "신원 및 접근 관리",
                    path: "/pillars/security/iam",
                  },
                  {
                    id: "sec-detection",
                    title: "탐지",
                    path: "/pillars/security/detection",
                  },
                  {
                    id: "sec-infra-protection",
                    title: "인프라 보호",
                    path: "/pillars/security/infrastructure-protection",
                  },
                  {
                    id: "sec-data-protection",
                    title: "데이터 보호",
                    path: "/pillars/security/data-protection",
                  },
                  {
                    id: "sec-incident-response",
                    title: "사고 대응",
                    path: "/pillars/security/incident-response",
                  },
                  {
                    id: "sec-app-security",
                    title: "애플리케이션 보안",
                    path: "/pillars/security/application-security",
                  },
                ],
              },
              {
                id: "sec-resources",
                title: "자원",
                path: "/pillars/security/resources",
              },
            ],
          },
          {
            id: "reliability",
            title: "안정성",
            path: "/pillars/reliability",
            children: [
              {
                id: "rel-design-principles",
                title: "설계 원칙",
                path: "/pillars/reliability/design-principles",
              },
              {
                id: "rel-definition",
                title: "정의",
                path: "/pillars/reliability/definition",
              },
              {
                id: "rel-best-practices",
                title: "모범 사례",
                path: "/pillars/reliability/best-practices",
                children: [
                  {
                    id: "rel-foundations",
                    title: "기초",
                    path: "/pillars/reliability/foundations",
                  },
                  {
                    id: "rel-workload-arch",
                    title: "워크로드 아키텍처",
                    path: "/pillars/reliability/workload-architecture",
                  },
                  {
                    id: "rel-change-management",
                    title: "변화 관리",
                    path: "/pillars/reliability/change-management",
                  },
                  {
                    id: "rel-failure-management",
                    title: "실패 관리",
                    path: "/pillars/reliability/failure-management",
                  },
                ],
              },
              {
                id: "rel-resources",
                title: "자원",
                path: "/pillars/reliability/resources",
              },
            ],
          },
          {
            id: "performance-efficiency",
            title: "성능 효율성",
            path: "/pillars/performance-efficiency",
            children: [
              {
                id: "perf-design-principles",
                title: "설계 원칙",
                path: "/pillars/performance-efficiency/design-principles",
              },
              {
                id: "perf-definition",
                title: "정의",
                path: "/pillars/performance-efficiency/definition",
              },
              {
                id: "perf-best-practices",
                title: "모범 사례",
                path: "/pillars/performance-efficiency/best-practices",
                children: [
                  {
                    id: "perf-arch-selection",
                    title: "아키텍처 선택",
                    path: "/pillars/performance-efficiency/architecture-selection",
                  },
                  {
                    id: "perf-compute-hardware",
                    title: "컴퓨팅 및 하드웨어",
                    path: "/pillars/performance-efficiency/compute-hardware",
                  },
                  {
                    id: "perf-data-management",
                    title: "데이터 관리",
                    path: "/pillars/performance-efficiency/data-management",
                  },
                  {
                    id: "perf-networking",
                    title: "네트워킹 및 콘텐츠 전달",
                    path: "/pillars/performance-efficiency/networking",
                  },
                  {
                    id: "perf-process-culture",
                    title: "프로세스와 문화",
                    path: "/pillars/performance-efficiency/process-culture",
                  },
                ],
              },
              {
                id: "perf-resources",
                title: "자원",
                path: "/pillars/performance-efficiency/resources",
              },
            ],
          },
          {
            id: "cost-optimization",
            title: "비용 최적화",
            path: "/pillars/cost-optimization",
            children: [
              {
                id: "cost-design-principles",
                title: "설계 원칙",
                path: "/pillars/cost-optimization/design-principles",
              },
              {
                id: "cost-definition",
                title: "정의",
                path: "/pillars/cost-optimization/definition",
              },
              {
                id: "cost-best-practices",
                title: "모범 사례",
                path: "/pillars/cost-optimization/best-practices",
                children: [
                  {
                    id: "cost-cloud-financial",
                    title: "클라우드 기반 재무 관리",
                    path: "/pillars/cost-optimization/cloud-financial-management",
                  },
                  {
                    id: "cost-expenditure",
                    title: "지출 및 사용량 인식",
                    path: "/pillars/cost-optimization/expenditure-awareness",
                  },
                  {
                    id: "cost-effective-resources",
                    title: "비용 효율적인 리소스",
                    path: "/pillars/cost-optimization/cost-effective-resources",
                  },
                  {
                    id: "cost-manage-demand",
                    title: "수요와 공급 자원 관리",
                    path: "/pillars/cost-optimization/manage-demand-supply",
                  },
                  {
                    id: "cost-optimize-over-time",
                    title: "시간 경과에 따른 최적화",
                    path: "/pillars/cost-optimization/optimize-over-time",
                  },
                ],
              },
              {
                id: "cost-resources",
                title: "자원",
                path: "/pillars/cost-optimization/resources",
              },
            ],
          },
          {
            id: "sustainability",
            title: "지속 가능성",
            path: "/pillars/sustainability",
            children: [
              {
                id: "sus-design-principles",
                title: "설계 원칙",
                path: "/pillars/sustainability/design-principles",
              },
              {
                id: "sus-definition",
                title: "정의",
                path: "/pillars/sustainability/definition",
              },
              {
                id: "sus-best-practices",
                title: "모범 사례",
                path: "/pillars/sustainability/best-practices",
                children: [
                  {
                    id: "sus-region-selection",
                    title: "지역 선택",
                    path: "/pillars/sustainability/region-selection",
                  },
                  {
                    id: "sus-alignment",
                    title: "수요에 맞춘 조정",
                    path: "/pillars/sustainability/alignment-to-demand",
                  },
                  {
                    id: "sus-software-arch",
                    title: "소프트웨어 및 아키텍처",
                    path: "/pillars/sustainability/software-architecture",
                  },
                  {
                    id: "sus-data-management",
                    title: "데이터 관리",
                    path: "/pillars/sustainability/data-management",
                  },
                  {
                    id: "sus-hardware-services",
                    title: "하드웨어 및 서비스",
                    path: "/pillars/sustainability/hardware-services",
                  },
                  {
                    id: "sus-process-culture",
                    title: "프로세스와 문화",
                    path: "/pillars/sustainability/process-culture",
                  },
                ],
              },
              {
                id: "sus-resources",
                title: "자원",
                path: "/pillars/sustainability/resources",
              },
            ],
          },
        ],
      },
      {
        id: "review-process",
        title: "검토 프로세스",
        path: "/review-process",
      },
      {
        id: "conclusion",
        title: "결론",
        path: "/conclusion",
      },
      {
        id: "contributors",
        title: "기여자",
        path: "/contributors",
      },
      {
        id: "further-reading",
        title: "추가 참고 자료",
        path: "/further-reading",
      },
      {
        id: "document-revisions",
        title: "문서 개정 이력",
        path: "/document-revisions",
      },
    ],
  },
  {
    id: "appendix",
    title: "부록: 질문 및 모범 사례",
    path: "/appendix",
    children: [
      {
        id: "operational-excellence-questions",
        title: "운영 우수성",
        path: "/appendix/operational-excellence",
        children: [
          { id: "ops1", title: "OPS 1 — 우선순위 결정", path: "/appendix/operational-excellence/ops1" },
          { id: "ops2", title: "OPS 2 — 조직 구조", path: "/appendix/operational-excellence/ops2" },
          { id: "ops3", title: "OPS 3 — 조직 문화", path: "/appendix/operational-excellence/ops3" },
          { id: "ops4", title: "OPS 4 — 워크로드 상태 이해", path: "/appendix/operational-excellence/ops4" },
          { id: "ops5", title: "OPS 5 — 프로덕션 흐름 개선", path: "/appendix/operational-excellence/ops5" },
        ],
      },
      {
        id: "security-questions",
        title: "보안",
        path: "/appendix/security",
        children: [
          { id: "sec1", title: "SEC 1 — 보안 기반", path: "/appendix/security/sec1" },
          { id: "sec2", title: "SEC 2 — 사람 신원 관리", path: "/appendix/security/sec2" },
          { id: "sec3", title: "SEC 3 — 머신 신원 관리", path: "/appendix/security/sec3" },
          { id: "sec4", title: "SEC 4 — 권한 관리", path: "/appendix/security/sec4" },
          { id: "sec5", title: "SEC 5 — 보안 이벤트 탐지", path: "/appendix/security/sec5" },
          { id: "sec6", title: "SEC 6 — 네트워크 보호", path: "/appendix/security/sec6" },
          { id: "sec7", title: "SEC 7 — 컴퓨팅 보호", path: "/appendix/security/sec7" },
          { id: "sec8", title: "SEC 8 — 저장 데이터 보호", path: "/appendix/security/sec8" },
          { id: "sec9", title: "SEC 9 — 전송 데이터 보호", path: "/appendix/security/sec9" },
        ],
      },
      {
        id: "reliability-questions",
        title: "안정성",
        path: "/appendix/reliability",
        children: [
          { id: "rel1", title: "REL 1 — 서비스 한도 관리", path: "/appendix/reliability/rel1" },
          { id: "rel2", title: "REL 2 — 네트워크 토폴로지", path: "/appendix/reliability/rel2" },
          { id: "rel3", title: "REL 3 — 워크로드 아키텍처", path: "/appendix/reliability/rel3" },
          { id: "rel4", title: "REL 4 — 분산 시스템 상호작용", path: "/appendix/reliability/rel4" },
          { id: "rel5", title: "REL 5 — 모니터링", path: "/appendix/reliability/rel5" },
          { id: "rel6", title: "REL 6 — 수요 적응", path: "/appendix/reliability/rel6" },
          { id: "rel7", title: "REL 7 — 변경 구현", path: "/appendix/reliability/rel7" },
          { id: "rel8", title: "REL 8 — 백업", path: "/appendix/reliability/rel8" },
          { id: "rel9", title: "REL 9 — 재해 복구", path: "/appendix/reliability/rel9" },
        ],
      },
      {
        id: "performance-efficiency-questions",
        title: "성능 효율성",
        path: "/appendix/performance-efficiency",
        children: [
          { id: "perf1", title: "PERF 1 — 아키텍처 선택", path: "/appendix/performance-efficiency/perf1" },
          { id: "perf2", title: "PERF 2 — 컴퓨팅 솔루션", path: "/appendix/performance-efficiency/perf2" },
          { id: "perf3", title: "PERF 3 — 스토리지 솔루션", path: "/appendix/performance-efficiency/perf3" },
          { id: "perf4", title: "PERF 4 — 데이터베이스 솔루션", path: "/appendix/performance-efficiency/perf4" },
          { id: "perf5", title: "PERF 5 — 네트워크 솔루션", path: "/appendix/performance-efficiency/perf5" },
          { id: "perf6", title: "PERF 6 — 성능 검토", path: "/appendix/performance-efficiency/perf6" },
          { id: "perf7", title: "PERF 7 — 성능 모니터링", path: "/appendix/performance-efficiency/perf7" },
          { id: "perf8", title: "PERF 8 — 트레이드오프", path: "/appendix/performance-efficiency/perf8" },
        ],
      },
      {
        id: "cost-optimization-questions",
        title: "비용 최적화",
        path: "/appendix/cost-optimization",
        children: [
          { id: "cost1", title: "COST 1 — 클라우드 재무 관리", path: "/appendix/cost-optimization/cost1" },
          { id: "cost2", title: "COST 2 — 비용 거버넌스", path: "/appendix/cost-optimization/cost2" },
          { id: "cost3", title: "COST 3 — 비용 효율적 리소스", path: "/appendix/cost-optimization/cost3" },
          { id: "cost4", title: "COST 4 — 요금 모델 활용", path: "/appendix/cost-optimization/cost4" },
          { id: "cost5", title: "COST 5 — 비용 모니터링", path: "/appendix/cost-optimization/cost5" },
          { id: "cost6", title: "COST 6 — 수요와 공급 관리", path: "/appendix/cost-optimization/cost6" },
          { id: "cost7", title: "COST 7 — 시간 경과 최적화", path: "/appendix/cost-optimization/cost7" },
        ],
      },
      {
        id: "sustainability-questions",
        title: "지속 가능성",
        path: "/appendix/sustainability",
        children: [
          { id: "sus1", title: "SUS 1 — 지역 선택", path: "/appendix/sustainability/sus1" },
          { id: "sus2", title: "SUS 2 — 사용자 행동 정렬", path: "/appendix/sustainability/sus2" },
          { id: "sus3", title: "SUS 3 — 소프트웨어 및 아키텍처", path: "/appendix/sustainability/sus3" },
          { id: "sus4", title: "SUS 4 — 데이터 관리", path: "/appendix/sustainability/sus4" },
          { id: "sus5", title: "SUS 5 — 하드웨어 및 서비스", path: "/appendix/sustainability/sus5" },
          { id: "sus6", title: "SUS 6 — 개발 및 배포 프로세스", path: "/appendix/sustainability/sus6" },
        ],
      },
    ],
  },
  {
    id: "notices",
    title: "공지사항",
    path: "/notices",
  },
  {
    id: "aws-glossary",
    title: "AWS 용어집",
    path: "/aws-glossary",
  },
];
