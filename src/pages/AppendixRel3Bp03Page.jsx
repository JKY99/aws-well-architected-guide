import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel3Bp03Page() {
  return (
    <article className="doc-content">
      <h1>REL03-BP03 — API별 서비스 계약 제공</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 수립하지 않으면 중간 수준의 위험이 노출됩니다.</p>
      </div>
      <p>
        서비스 지향 또는 마이크로서비스 아키텍처로 구축된 애플리케이션은 통합된 런타임 의존성을 가지면서도
        독립적으로 운영할 수 있습니다. API 소비자와 생산자 모두 공통 API 계약을 따를 때 배포된 변경 사항이
        전체 시스템의 안정성을 방해하지 않습니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        API 소비자나 생산자에게 배포된 변경 사항이 양측 모두 공통 API 계약을 따를 때 전체 시스템의 안정성을 방해하지 않습니다.
        서비스 API를 통해 통신하는 컴포넌트는 독립적인 기능 릴리스, 런타임 의존성 업그레이드, 또는 재해 복구(DR) 사이트로의
        장애 조치를 서로에게 거의 또는 전혀 영향을 주지 않고 수행할 수 있습니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>강력하게 유형화된 스키마 없이 서비스 API 생성(API 바인딩 생성 불가, 페이로드 프로그래밍 방식 검증 불가)</li>
        <li>버전 관리 전략 미채택으로 서비스 계약이 발전할 때 API 소비자가 강제 업데이트</li>
        <li>기본 서비스 구현 세부 정보가 유출되는 오류 메시지(도메인 컨텍스트로 통합 실패를 설명해야 함)</li>
        <li>API 계약을 사용하여 서비스 컴포넌트의 독립적 테스트를 위한 테스트 케이스 및 모의 API 구현을 개발하지 않음</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>API 서비스 계약을 통해 통신하는 컴포넌트로 구성된 분산 시스템의 신뢰성 향상</li>
        <li>컴파일 시 타입 검사로 개발 프로세스 초기에 잠재적 문제 포착 가능</li>
        <li>API 계약은 API에 대한 명확한 자체 문서화 인터페이스를 제공하고 서로 다른 시스템 및 프로그래밍 언어 간의 상호 운용성 향상</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>비즈니스 도메인 식별 및 워크로드 세분화 결정</li>
        <li>API에 대한 머신 판독 가능한 서비스 계약 정의</li>
        <li>API 버전 관리 전략 구현</li>
        <li>REST, GraphQL 또는 비동기 이벤트와 같은 공통 프로토콜을 통해 서비스 통합</li>
        <li>API Gateway를 사용하여 엔드포인트의 OpenAPI 사양 가져오기/내보내기</li>
        <li>AWS AppSync를 사용하여 GraphQL 스키마 파일을 정의하여 GraphQL API 정의 및 관리</li>
        <li>정의된 스키마를 준수하여 Amazon EventBridge에서 서비스 이벤트 사용</li>
        <li>기본값이 있는 선택적 필드 추가 시 API 확장을 더 간단한 옵션으로 고려</li>
        <li>단일 코드베이스에서 여러 버전을 지원하는 파사드를 사용한 프록시 버전 관리 구현</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon API Gateway</li>
        <li>AWS AppSync</li>
        <li>Amazon EventBridge</li>
        <li>AWS Amplify</li>
        <li>AWS Serverless Application Model (SAM)</li>
        <li>AWS Cloud Development Kit (AWS CDK)</li>
        <li>Amazon DynamoDB</li>
      </ul>
      <PageNav />
    </article>
  );
}
