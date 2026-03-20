import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec1Bp08Page() {
  return (
    <article className="doc-content">
      <h1>SEC01-BP08 — 새로운 보안 서비스 및 기능을 정기적으로 평가하고 구현</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 낮음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 낮습니다.</p>
      </div>
      <p>
        AWS는 지속적으로 새로운 보안 서비스와 기능을 출시합니다. 이러한 새로운 기능을 정기적으로
        평가하고 적절한 것을 구현함으로써 보안 태세를 지속적으로 개선하고 진화하는 위협에 대응할 수 있습니다.
        보안은 한 번의 구현으로 완성되는 것이 아닌 지속적인 개선 과정입니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        보안팀은 AWS 보안 서비스의 최신 업데이트를 정기적으로 검토하는 프로세스를 갖추고 있습니다.
        새로운 서비스와 기능은 조직의 보안 요구사항과 위험 프로파일에 따라 평가되고, 가치 있는 것은
        계획된 일정에 따라 도입됩니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>AWS re:Invent나 블로그 발표를 모니터링하지 않아 유용한 보안 기능을 인지하지 못함</li>
        <li>새로운 보안 서비스를 평가하는 공식 프로세스 없이 개인적 관심에만 의존함</li>
        <li>기존 아키텍처와 프로세스에 미치는 영향을 평가하지 않고 새로운 서비스를 즉시 도입함</li>
        <li>비용 효과 분석 없이 모든 새로운 보안 서비스를 도입하거나 반대로 모두 무시함</li>
        <li>도입한 보안 서비스의 효과를 측정하고 검증하는 메커니즘이 없음</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>AWS의 지속적인 보안 혁신을 활용하여 추가 개발 비용 없이 보안 태세 강화</li>
        <li>새로운 위협 벡터에 대응하는 최신 보안 기능을 적시에 도입</li>
        <li>더 효율적인 보안 도구 도입으로 보안 운영 비용 절감</li>
        <li>보안팀의 AWS 보안 서비스에 대한 전문 지식 향상</li>
        <li>경쟁사 대비 최신 보안 태세 유지</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS 보안 블로그, AWS What's New 피드, AWS Security Bulletins를 정기적으로 구독하고 검토하는 팀 프로세스를 수립합니다.</li>
        <li>분기별 보안 서비스 검토 회의를 개최하여 새로운 AWS 보안 기능을 평가하고 도입 여부를 결정합니다.</li>
        <li>AWS 파트너 또는 엔터프라이즈 지원을 통해 보안 전문가의 권고사항을 정기적으로 받습니다.</li>
        <li>비프로덕션 환경(샌드박스 계정)에서 새로운 보안 서비스를 실험하고 효과를 검증한 후 프로덕션에 도입합니다.</li>
        <li>AWS Security Hub의 보안 표준(AWS Foundational Security Best Practices 등)을 활성화하여 새로운 보안 모범 사례를 자동으로 평가받습니다.</li>
        <li>AWS re:Invent, AWS Summit 등 주요 AWS 행사에 참가하거나 세션 자료를 검토하여 새로운 보안 발표를 파악합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Security Hub — 보안 모범 사례 준수 여부 자동 평가</li>
        <li>AWS Well-Architected Tool — 최신 Well-Architected 보안 모범 사례 검토</li>
        <li>AWS Trusted Advisor — 보안 최적화 권고사항 자동 제공</li>
        <li>AWS 보안 블로그 — 최신 보안 서비스 및 모범 사례 정보</li>
        <li>AWS re:Post — AWS 커뮤니티 보안 Q&amp;A 및 지식 공유</li>
      </ul>
      <PageNav />
    </article>
  );
}
