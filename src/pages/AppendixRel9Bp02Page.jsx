import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel9Bp02Page() {
  return (
    <article className="doc-content">
      <h1>REL09-BP02 — DR 전략 사용</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>RTO/RPO 목표에 맞는 재해 복구 전략(백업-복원, 파일럿 라이트, 웜 스탠바이, 멀티 사이트)을 선택하고 구현합니다.</p>
      <h2>원하는 결과</h2>
      <p>RTO/RPO 목표를 달성하면서 비용 효율적인 DR 전략을 구현합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>모든 워크로드에 동일한 DR 전략 적용</li>
        <li>비용 대비 효과 미고려</li>
        <li>DR 환경 테스트 미실시</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>비즈니스 연속성 보장</li>
        <li>비용 최적화</li>
        <li>재해 대응 준비</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>RTO/RPO 기반 전략 선택</li>
        <li>교차 리전 복제 구성</li>
        <li>AWS Elastic Disaster Recovery 활용</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Elastic Disaster Recovery</li>
        <li>Amazon Route 53</li>
        <li>Amazon RDS (Multi-Region)</li>
        <li>AWS Global Accelerator</li>
      </ul>
      <PageNav />
    </article>
  );
}
