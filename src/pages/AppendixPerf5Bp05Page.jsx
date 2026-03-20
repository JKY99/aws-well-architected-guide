import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf5Bp05Page() {
  return (
    <article className="doc-content">
      <h1>PERF05-BP05 — 자동화를 통한 성능 관련 문제 사전 해결</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 보통</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 보통입니다.</p>
      </div>
      <p>자동화를 활용하여 성능 관련 문제를 사전에 감지하고 해결합니다. 오토스케일링, 자동화된 최적화, 자동 복구 메커니즘을 구현합니다.</p>
      <h2>원하는 결과</h2>
      <p>자동화된 메커니즘을 통해 성능 문제를 인간의 개입 없이 신속하게 감지하고 해결하여 지속적인 성능 효율성을 유지합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>성능 문제 발생 후 수동으로 대응하여 지연 발생</li>
        <li>자동화 없이 모든 스케일링 작업을 수동으로 수행</li>
        <li>성능 이상 감지 후 자동 조치 없이 알람만 발송</li>
        <li>자동화된 최적화 없이 성능이 점진적으로 저하</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>성능 문제에 대한 즉각적인 자동 대응</li>
        <li>운영 부담 감소로 팀이 전략적 개선에 집중</li>
        <li>일관된 성능 기준 유지</li>
        <li>야간 및 주말에도 자동으로 성능 관리</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>Amazon EC2 Auto Scaling으로 수요에 따른 자동 확장 구성</li>
        <li>Amazon CloudWatch Alarms와 AWS Systems Manager Automation 연동</li>
        <li>AWS Lambda를 활용한 성능 이상 감지 시 자동 조치 구현</li>
        <li>AWS Auto Scaling으로 여러 서비스의 스케일링 정책 통합 관리</li>
        <li>성능 회귀 감지 시 자동 롤백 메커니즘 구현</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon EC2 Auto Scaling — 자동 용량 조정</li>
        <li>AWS Auto Scaling — 통합 자동 스케일링</li>
        <li>AWS Systems Manager Automation — 운영 자동화</li>
        <li>Amazon EventBridge — 이벤트 기반 자동화 트리거</li>
      </ul>
      <PageNav />
    </article>
  );
}
