import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps10Bp01Page() {
  return (
    <article className="doc-content">
      <h1>OPS10-BP01 — 이벤트, 인시던트, 문제 관리를 위한 프로세스 사용</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>

      <p>
        잘 문서화되고 중앙에 저장된 프로세스를 통해 운영 이벤트, 인시던트, 문제를 효과적으로 관리합니다.
        높은 서비스 신뢰성을 유지하고 워크로드 성과를 지속합니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        잘 문서화되고 중앙에 저장된 프로세스를 통해 운영 이벤트, 인시던트, 문제를 효과적으로 관리합니다.
        이벤트(관찰된 행동 또는 상태 변화), 인시던트(대응이 필요한 이벤트), 문제(인시던트의 근본 원인)를
        구분하여 처리합니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>반응적으로 이벤트에 대응하는 경우(사전 예방적 접근 부재)</li>
        <li>다양한 유형의 이벤트나 인시던트에 일관성 없는 접근법을 사용하는 경우</li>
        <li>인시던트를 분석하고 미래 발생을 방지하기 위한 교훈을 얻는 데 실패하는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>간소화되고 표준화된 대응 프로세스</li>
        <li>서비스 및 고객에 대한 인시던트 영향 감소</li>
        <li>신속한 문제 해결</li>
        <li>운영 프로세스의 지속적인 개선</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>이벤트를 Amazon EventBridge 및 AWS CloudTrail을 사용하여 모니터링합니다.</li>
        <li>중요한 이벤트를 평가하고 임계값을 설정하는 프로세스를 만듭니다.</li>
        <li>이벤트를 인시던트로 에스컬레이션하는 기준을 결정합니다.</li>
        <li>AWS Systems Manager Ops Center와 인시던트 대응을 사용하여 구조화된 인시던트 관리를 수립합니다.</li>
        <li>인시던트를 심각도별로 분류하고 사전 정의된 대응 계획을 갖춥니다.</li>
        <li>사후 인시던트 분석을 수행하고 교훈을 공유합니다.</li>
        <li>인시던트 데이터에서 반복 패턴을 식별하고 근본 원인 분석(RCA)을 적용합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon EventBridge — 운영 변화에 실시간 대응</li>
        <li>AWS CloudTrail — 사용자, 역할, 서비스 작업 기록</li>
        <li>AWS Config — 리소스 구성 변경 평가 및 모니터링</li>
        <li>Amazon CloudWatch — 인시던트 분석 및 문제 해결</li>
        <li>AWS Systems Manager Ops Center — 운영 항목 집계 및 우선순위 지정</li>
        <li>AWS Incident Manager — 인시던트 대응 워크플로 관리</li>
      </ul>

      <PageNav />
    </article>
  );
}
