import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel9Page() {
  return (
    <article className="doc-content">
      <h1>REL 9 — 재해 복구(DR)를 어떻게 계획합니까?</h1>

      <p>
        비즈니스 요구사항에 맞는 재해 복구 전략을 수립하고
        정기적으로 테스트하여 실제 재해 시 신속하게 복구할 수 있도록 합니다.
      </p>

      <h2>DR 전략 (RTO/RPO 기준)</h2>
      <ul>
        <li>
          <strong>백업 및 복원:</strong> 가장 낮은 비용. RTO 수 시간, RPO 수 시간~1일.<br />
          <span>백업 데이터에서 수동으로 복원. 비용에 민감하고 RTO/RPO 요건이 느슨한 경우 적합.</span>
        </li>
        <li>
          <strong>파일럿 라이트:</strong> 핵심 구성 요소만 상시 운영. RTO 수십 분.<br />
          <span>데이터베이스 복제 등 핵심 데이터만 DR 리전에 유지. 재해 시 나머지 리소스를 신속하게 프로비저닝.</span>
        </li>
        <li>
          <strong>웜 스탠바이:</strong> 축소된 스케일로 상시 운영. RTO 수 분.<br />
          <span>DR 환경을 최소한의 규모로 상시 운영하다가 재해 시 프로덕션 규모로 확장.</span>
        </li>
        <li>
          <strong>멀티 사이트 액티브-액티브:</strong> 두 리전 모두 풀 프로덕션. RTO 수 초~분.<br />
          <span>두 리전에서 동시에 트래픽을 처리. 가장 높은 복원력이지만 비용도 가장 높음.</span>
        </li>
      </ul>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong>REL09-BP01:</strong> RTO/RPO 목표 정의<br />
          <span>비즈니스 영향 분석을 통해 각 워크로드의 복구 목표를 정의합니다.</span>
        </li>
        <li>
          <strong>REL09-BP02:</strong> DR 전략 사용<br />
          <span>RTO/RPO 목표에 맞는 DR 전략을 선택하고 구현합니다.</span>
        </li>
        <li>
          <strong>REL09-BP03:</strong> DR 테스트<br />
          <span>Game Day, 카오스 엔지니어링을 통해 DR 계획을 정기적으로 테스트합니다.</span>
        </li>
        <li>
          <strong>REL09-BP04:</strong> 자동화를 통한 복구 절차 관리<br />
          <span>수동 복구 절차를 자동화하여 인적 오류를 줄이고 RTO를 단축합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
