import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel13Bp02Page() {
  return (
    <article className="doc-content">
      <h1>REL13-BP02 — 복구 목표를 충족하는 복구 전략 사용</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 재해 발생 시 RTO/RPO 목표를 달성하지 못하여 비즈니스에 큰 손실이 발생할 수 있습니다.</p>
      </div>
      <p>
        정의된 RTO와 RPO 목표에 맞는 DR 전략을 선택하고 구현합니다.
        AWS에서는 백업/복원, 파일럿 라이트, 웜 스탠바이, 멀티 사이트 액티브-액티브의
        네 가지 주요 DR 전략을 지원합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        선택된 DR 전략이 RTO/RPO 목표를 달성할 수 있으며, DR 환경이 구현되어
        정기적인 테스트를 통해 목표 달성이 검증됩니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>RTO/RPO 목표보다 훨씬 낮은 수준의 DR 전략을 선택하여 비용을 낭비하는 경우</li>
        <li>RTO/RPO 목표를 달성할 수 없는 DR 전략을 선택하는 경우</li>
        <li>DR 전략을 문서화했지만 실제로 구현하지 않는 경우</li>
        <li>DR 환경을 구축했지만 테스트하지 않아 실제 재해 시 작동하지 않는 경우</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>RTO/RPO 목표에 최적화된 비용 효율적인 DR 전략</li>
        <li>재해 발생 시 예측 가능하고 검증된 복구</li>
        <li>비즈니스 연속성 보장</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li><strong>백업/복원 (RTO: 수 시간, RPO: 수 시간~1일):</strong> AWS Backup으로 정기 백업을 수행하고 S3에 저장합니다. 비용이 가장 낮지만 RTO가 가장 깁니다.</li>
        <li><strong>파일럿 라이트 (RTO: 수십 분):</strong> 핵심 데이터(데이터베이스 복제)만 DR 리전에 유지하고, 재해 시 나머지 인프라를 빠르게 프로비저닝합니다.</li>
        <li><strong>웜 스탠바이 (RTO: 수 분):</strong> 축소된 규모의 완전한 스택을 DR 리전에서 상시 운영하다가 재해 시 프로덕션 규모로 확장합니다.</li>
        <li><strong>멀티 사이트 액티브-액티브 (RTO: 수 초):</strong> 두 리전에서 동시에 트래픽을 처리합니다. 비용이 가장 높지만 RTO가 가장 짧습니다.</li>
        <li>Amazon Aurora Global Database, DynamoDB Global Tables를 사용하여 리전 간 데이터 복제를 구성합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Backup — 백업/복원 전략 구현</li>
        <li>Amazon Aurora Global Database — 리전 간 데이터베이스 복제</li>
        <li>Amazon DynamoDB Global Tables — 멀티 리전 데이터 복제</li>
        <li>Amazon Route 53 — DR 리전으로 트래픽 전환</li>
        <li>AWS Elastic Disaster Recovery — 빠른 DR 복구 자동화</li>
      </ul>
      <PageNav />
    </article>
  );
}
