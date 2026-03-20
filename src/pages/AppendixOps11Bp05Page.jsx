import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps11Bp05Page() {
  return (
    <article className="doc-content">
      <h1>OPS11-BP05 — 개선 동인 정의</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간 수준입니다.</p>
      </div>

      <p>
        원하는 결과가 지원될 때만 변경을 수행합니다.
        이벤트 기반 동기나 감정적 투자를 최소화하기 위해 개선 기준을 결정합니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        환경 전반에 걸쳐 데이터를 추적합니다.
        이벤트와 활동을 비즈니스 결과와 연관시킵니다.
        환경과 시스템 간에 비교하고 대조합니다.
        배포 및 결과에 대한 상세한 활동 이력을 유지합니다.
        보안 태세를 지원하는 데이터를 수집합니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>이벤트와 활동을 상관시키지 않고 데이터만 수집하는 경우</li>
        <li>의미 있는 활용 없이 높은 CloudWatch 및 CloudTrail 비용을 유발하는 상세 데이터를 수집하는 경우</li>
        <li>개선을 정의할 때 비즈니스 결과를 고려하지 않는 경우</li>
        <li>새로운 기능의 효과를 측정하지 않는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>개선 기준을 결정하여 이벤트 기반 동기나 감정적 투자의 영향 최소화</li>
        <li>기술적 이벤트뿐만 아니라 비즈니스 이벤트에도 대응</li>
        <li>개선 영역을 식별하기 위한 환경 측정</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>원하는 기능과 역량을 평가합니다(AWS What's New 참조).</li>
        <li>버그, 취약점, 최적화 기회 등 허용할 수 없는 문제를 평가합니다(AWS Trusted Advisor, 최신 보안 공지).</li>
        <li>규제 컴플라이언스 또는 타사 지원을 위해 필요한 업데이트를 평가합니다.</li>
        <li>데이터를 수집하는 이유를 명확히 하고 의미 없이 비용만 발생시키는 데이터 수집은 피합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon Athena — 데이터 분석</li>
        <li>Amazon QuickSight — 데이터 시각화</li>
        <li>AWS Glue — 데이터 통합</li>
        <li>Amazon CloudWatch — 메트릭 및 이벤트 모니터링</li>
        <li>AWS CloudTrail — 활동 기록</li>
        <li>AWS Trusted Advisor — 모범 사례 권장사항</li>
      </ul>

      <PageNav />
    </article>
  );
}
