import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel3Bp01Page() {
  return (
    <article className="doc-content">
      <h1>REL03-BP01 — 워크로드 세분화 방법 선택</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 수립하지 않으면 높은 수준의 위험이 노출됩니다.</p>
      </div>
      <p>
        워크로드가 지원 가능하고, 확장 가능하며, 가능한 한 느슨하게 결합되도록 합니다.
        SOA, 마이크로서비스, 또는 모놀리식 아키텍처 중 워크로드 세분화 요구 사항에 따라 적절한 아키텍처 유형을 선택합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        워크로드가 지원 가능하고, 확장 가능하며, 가능한 한 느슨하게 결합된 상태입니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>마이크로서비스 데스 스타: 원자적 컴포넌트가 너무 높은 상호 의존성을 가지게 되어 하나의 장애가 훨씬 더 큰 장애를 초래하고, 컴포넌트가 모놀리스만큼 강직하고 취약해지는 상황</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>더 구체적인 세분화는 더 높은 민첩성, 조직 유연성 및 확장성 제공</li>
        <li>서비스 중단 영향 감소</li>
        <li>애플리케이션 컴포넌트의 다양한 가용성 요구 사항을 더 원자적인 세분화로 지원 가능</li>
        <li>워크로드를 지원하는 팀의 명확한 책임 정의</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>워크로드 세분화 요구 사항에 따라 아키텍처 유형(SOA, 마이크로서비스, 또는 모놀리식) 선택</li>
        <li>모놀리식 아키텍처는 모듈식으로 구성하고 제품이 성장함에 따라 SOA/마이크로서비스로 발전할 수 있도록 보장</li>
        <li>트레이드오프 고려: 분산 컴퓨팅 아키텍처는 지연 시간 복잡성과 디버깅 어려움 증가</li>
        <li>스트랭글러 피그 패턴을 사용하여 모놀리스를 점진적으로 더 작은 컴포넌트로 리팩터링</li>
        <li>분산 서비스를 위한 서비스 검색 메커니즘 구현</li>
        <li>공유 데이터베이스를 가진 기존 모놀리스의 경우 비즈니스 단위, 액세스 패턴 또는 데이터 구조별로 데이터 재구성</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS X-Ray (디버깅 및 추적)</li>
        <li>AWS App Mesh (서비스 검색 및 액세스)</li>
        <li>AWS Cloud Map (DNS 기반 서비스 검색)</li>
        <li>Amazon MQ (레거시 애플리케이션용 서비스 버스)</li>
        <li>AWS Migration Hub Refactor Spaces (증분 리팩터링)</li>
        <li>Amazon API Gateway</li>
      </ul>
      <PageNav />
    </article>
  );
}
