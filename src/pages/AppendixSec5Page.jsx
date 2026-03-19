import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec5Page() {
  return (
    <article className="doc-content">
      <h1>SEC 5 — 보안 이벤트를 어떻게 탐지하고 조사합니까?</h1>

      <p>
        보안 이벤트를 신속하게 탐지하고 조사하기 위해 로깅, 모니터링, 경보 체계를 구축합니다.
        위협 인텔리전스를 활용하여 알려진 위협을 자동으로 탐지합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong>SEC05-BP01:</strong> 서비스 및 애플리케이션 로깅 구성<br />
          <span>AWS CloudTrail, VPC Flow Logs, Application Load Balancer 로그 등 모든 관련 로그를 활성화합니다.</span>
        </li>
        <li>
          <strong>SEC05-BP02:</strong> AWS Security Hub 분석<br />
          <span>AWS Security Hub를 사용하여 여러 서비스의 보안 결과를 중앙에서 집계하고 우선순위를 지정합니다.</span>
        </li>
        <li>
          <strong>SEC05-BP03:</strong> Amazon GuardDuty를 사용한 위협 탐지<br />
          <span>GuardDuty를 활성화하여 악의적인 활동과 비정상적인 동작을 자동으로 탐지합니다.</span>
        </li>
        <li>
          <strong>SEC05-BP04:</strong> AWS Config를 사용한 구성 변경 감지<br />
          <span>AWS Config로 리소스 구성 변경을 추적하고 규정 준수 여부를 평가합니다.</span>
        </li>
        <li>
          <strong>SEC05-BP05:</strong> 보안 이벤트에 대한 경보 구현<br />
          <span>중요한 보안 이벤트에 대해 자동 경보를 설정하여 즉각적인 알림을 받습니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
