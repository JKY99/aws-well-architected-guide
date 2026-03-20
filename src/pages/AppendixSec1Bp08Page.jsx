import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec1Bp08Page() {
  return (
    <article className="doc-content">
      <h1>SEC01-BP08 — 새로운 보안 서비스 및 기능을 정기적으로 평가하고 구현</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 낮음</div>
        <p>이 모범 사례를 따르지 않을 경우 보안 태세 개선 기회를 놓칠 수 있습니다.</p>
      </div>
      <p>
        AWS는 지속적으로 새로운 보안 서비스와 기능을 출시합니다. 새로운 기능을 정기적으로 평가하고 적절한 것을 구현함으로써 보안 태세를 지속적으로 개선하고 진화하는 위협에 대응할 수 있습니다.
      </p>
      <h2>원하는 결과</h2>
      <ul>
        <li>AWS 보안 서비스 업데이트, AWS What's New, AWS Security Bulletins를 정기적으로 검토</li>
        <li>새로운 보안 서비스 및 기능의 가치를 평가하고 환경에 도입하는 공식 프로세스 보유</li>
        <li>AWS 이벤트, 블로그, 파트너, 지원팀을 통해 최신 보안 정보 파악</li>
        <li>잠재적으로 유익한 새 서비스 식별 시 SNS 구독으로 자동 알림 설정</li>
      </ul>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>새로운 AWS 보안 서비스 및 기능 발표를 모니터링하지 않음</li>
        <li>AWS 보안 관련 이벤트, 블로그, 고객 지원 채널을 활용하지 않음</li>
        <li>새로운 보안 서비스를 평가하는 공식 프로세스 부재</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>AWS의 지속적인 보안 혁신을 활용하여 보안 태세 강화</li>
        <li>새로운 위협 벡터에 대응하는 최신 보안 기능 적시 도입</li>
        <li>더 효율적인 보안 도구 도입으로 보안 운영 비용 절감</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS What's New 피드, AWS 보안 블로그, AWS Security Bulletins RSS 피드를 구독합니다.</li>
        <li>AWS 이벤트(re:Invent, Summit 등), 고객 지원 채널, AWS 파트너를 통해 최신 보안 정보를 파악합니다.</li>
        <li>새 서비스 및 기능에 대한 알림을 받기 위해 SNS 구독을 설정합니다.</li>
        <li>새로운 보안 서비스를 비프로덕션 환경에서 먼저 평가하고 도입 여부를 결정하는 공식 프로세스를 수립합니다.</li>
        <li>AWS Security Hub의 AWS Foundational Security Best Practices 표준을 활성화하여 최신 보안 모범 사례를 자동으로 평가받습니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS What's New — 새로운 AWS 서비스 및 기능 발표</li>
        <li>AWS 보안 블로그 — 최신 보안 서비스 및 모범 사례 정보</li>
        <li>AWS Security Hub — 보안 모범 사례 준수 여부 자동 평가</li>
        <li>AWS re:Post — AWS 커뮤니티 보안 Q&amp;A 및 지식 공유</li>
      </ul>
      <PageNav />
    </article>
  );
}
