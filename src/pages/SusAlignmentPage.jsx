import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function SusAlignmentPage() {
  return (
    <article className="doc-content">
      <h1>지속 가능성 — 사용자 행동 패턴 정렬</h1>

      <p>
        실제 사용자 행동에 맞게 리소스를 조정하여 프로비저닝된 리소스가
        실제 수요에 부합하도록 합니다.
      </p>

      <h2>모범 사례</h2>

      <h3>SUS02-BP01: 사용자 행동 패턴에 따른 인프라 규모 조정</h3>
      <p>
        사용자의 실제 요구에 맞게 인프라를 확장 및 축소하여 유휴 리소스를 줄입니다.
        Auto Scaling을 활용하여 수요에 따라 동적으로 리소스를 조정합니다.
      </p>

      <h3>SUS02-BP02: 사용 패턴에 맞는 SLA 정렬</h3>
      <p>
        사용자가 실제로 필요로 하는 가용성과 성능 수준에 맞게 SLA를 조정합니다.
        과도하게 높은 SLA는 불필요한 리소스 프로비저닝으로 이어집니다.
      </p>

      <h3>SUS02-BP03: 지속 가능성을 위한 소프트웨어 및 아키텍처 최적화</h3>
      <p>
        불필요한 리소스 소비를 제거하는 효율적인 소프트웨어 및 아키텍처를 구현합니다.
      </p>

      <h3>SUS02-BP04: 미사용 자산, 리소스 및 서비스 제거</h3>
      <p>
        유휴 또는 사용하지 않는 리소스를 식별하고 제거하여 에너지 낭비를 줄입니다.
        AWS Trusted Advisor 및 AWS Cost Explorer를 통해 미사용 리소스를 파악합니다.
      </p>

      <h3>SUS02-BP05: 완전히 활용되는 서비스를 선택하는 IaC 사용</h3>
      <p>
        Infrastructure as Code를 통해 리소스를 정확하게 프로비저닝하고
        과도한 프로비저닝을 방지합니다.
      </p>

      <h3>SUS02-BP06: 비활성 기간 동안 리소스 종료</h3>
      <p>
        개발/테스트 환경 등 비업무 시간에 불필요한 리소스를 종료하여 에너지 소비를 줄입니다.
        AWS Instance Scheduler를 활용하여 자동화합니다.
      </p>

      <PageNav />
    </article>
  );
}
