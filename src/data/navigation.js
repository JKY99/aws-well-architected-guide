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
          },
          {
            id: "security",
            title: "보안",
            path: "/pillars/security",
          },
          {
            id: "reliability",
            title: "안정성",
            path: "/pillars/reliability",
          },
          {
            id: "performance-efficiency",
            title: "성능 효율성",
            path: "/pillars/performance-efficiency",
          },
          {
            id: "cost-optimization",
            title: "비용 최적화",
            path: "/pillars/cost-optimization",
          },
          {
            id: "sustainability",
            title: "지속 가능성",
            path: "/pillars/sustainability",
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
