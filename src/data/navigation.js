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
      },
      {
        id: "security-questions",
        title: "보안",
        path: "/appendix/security",
      },
      {
        id: "reliability-questions",
        title: "안정성",
        path: "/appendix/reliability",
      },
      {
        id: "performance-efficiency-questions",
        title: "성능 효율성",
        path: "/appendix/performance-efficiency",
      },
      {
        id: "cost-optimization-questions",
        title: "비용 최적화",
        path: "/appendix/cost-optimization",
      },
      {
        id: "sustainability-questions",
        title: "지속 가능성",
        path: "/appendix/sustainability",
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
