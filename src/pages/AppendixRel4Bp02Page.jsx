import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel4Bp02Page() {
  return (
    <article className="doc-content">
      <h1>REL04-BP02 — 느슨하게 결합된 의존성 구현</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 수립하지 않으면 높은 수준의 위험이 노출됩니다.</p>
      </div>
      <p>
        느슨하게 결합된 의존성을 구현하면 장애 표면적을 구성 요소 수준으로 최소화하여
        문제를 진단하고 해결하기가 쉬워집니다. 또한 개발 주기를 단순화하여 팀이 다른 구성 요소의
        성능에 영향을 주지 않고 모듈 수준에서 변경을 구현할 수 있습니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        느슨하게 결합된 의존성 구현을 통해 구성 요소 수준에서 장애 표면적을 최소화하고,
        문제 진단 및 해결이 용이해집니다. 리소스 요구 사항에 따라 구성 요소 수준에서 스케일 아웃하고,
        비용 효율성에 기여할 수 있습니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>모놀리식 워크로드 배포</li>
        <li>장애 조치 또는 비동기 요청 처리 기능 없이 워크로드 계층 간 직접 API 호출</li>
        <li>공유 데이터(공유 데이터베이스 또는 긴밀하게 결합된 데이터 스토리지)를 사용한 긴밀한 결합</li>
        <li>백프레셔 무시(구성 요소가 처리할 수 없을 때 들어오는 데이터를 늦추거나 중단하는 능력 부재)</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>느슨한 결합은 의존하는 다른 구성 요소로부터 구성 요소의 동작을 격리하여 복원력 및 민첩성 향상</li>
        <li>하나의 구성 요소 장애가 다른 구성 요소로 격리됨</li>
        <li>시스템에 대한 변경 또는 장애의 영향 최소화</li>
        <li>의존하는 구성 요소에 대한 최소한의 위험으로 코드를 수정하거나 기능을 추가 가능</li>
        <li>스케일 아웃 또는 기본 구현 변경 능력을 갖춘 구성 요소 수준의 세분화된 복원력 활성화</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>이벤트 기반 아키텍처 구축: Amazon EventBridge를 사용하여 느슨하게 결합된 분산 이벤트 기반 아키텍처 구축</li>
        <li>분산 시스템에 큐 구현: Amazon SQS를 사용하여 분산 시스템을 통합하고 분리</li>
        <li>구성 요소를 마이크로서비스로 컨테이너화: Amazon ECS 및 Amazon EKS 활용</li>
        <li>Step Functions로 워크플로우 관리: 여러 AWS 서비스를 유연한 워크플로우로 조율</li>
        <li>게시-구독 메시징 아키텍처 활용: Amazon SNS를 사용하여 게시자에서 구독자로 메시지 전달</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon EventBridge</li>
        <li>Amazon SQS (Simple Queue Service)</li>
        <li>Amazon SNS (Simple Notification Service)</li>
        <li>Amazon Kinesis</li>
        <li>AWS Step Functions</li>
        <li>Amazon ECS (Elastic Container Service)</li>
        <li>Amazon EKS (Elastic Kubernetes Service)</li>
      </ul>
      <PageNav />
    </article>
  );
}
