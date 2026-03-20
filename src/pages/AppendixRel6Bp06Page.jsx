import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel6Bp06Page() {
  return (
    <article className="doc-content">
      <h1>REL06-BP06 — 모니터링 범위 및 지표 정기 검토</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 낮음</div>
        <p>이 모범 사례를 따르지 않을 경우 워크로드 변화에 따라 모니터링 사각지대가 생겨 장애를 늦게 감지할 수 있습니다.</p>
      </div>
      <p>
        워크로드는 지속적으로 변화합니다. 새로운 서비스가 추가되고, 아키텍처가 변경되며,
        트래픽 패턴이 달라집니다. 모니터링 설정이 이런 변화를 따라가지 못하면 중요한
        구성 요소가 모니터링 범위 밖에 남게 됩니다. 정기적인 검토를 통해 모니터링의
        완전성과 유효성을 유지합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        모든 워크로드 구성 요소가 모니터링 대상에 포함되고, 경보 임계값이 현재 트래픽 패턴과
        비즈니스 요구사항을 반영하며, 불필요한 알림(노이즈)이 최소화되어 있습니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>초기 구성 이후 모니터링 설정을 재검토하지 않는 경우</li>
        <li>새로운 서비스나 구성 요소를 추가할 때 모니터링 설정을 업데이트하지 않는 경우</li>
        <li>경보 임계값을 현재 트래픽 패턴에 맞게 조정하지 않아 노이즈가 많거나 감지가 늦는 경우</li>
        <li>발화하지 않는 경보와 관련 없는 대시보드를 정리하지 않아 운영팀이 중요 경보를 놓치는 경우</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>워크로드 변화에 따른 모니터링 사각지대 제거</li>
        <li>경보 피로(Alert fatigue) 감소로 운영 효율성 향상</li>
        <li>비즈니스 요구사항 변화에 맞는 모니터링 유지</li>
        <li>감사 및 규정 준수 요구사항 충족 확인</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>분기별로 CloudWatch 대시보드와 경보 목록을 검토하여 불필요하거나 누락된 항목을 확인합니다.</li>
        <li>새로운 서비스나 기능을 출시할 때 체크리스트에 "모니터링 추가" 항목을 포함합니다.</li>
        <li>경보 히스토리를 분석하여 너무 자주 발생하는 경보나 발화하지 않는 경보를 식별하고 조정합니다.</li>
        <li>AWS Well-Architected Tool을 정기적으로 실행하여 모니터링 관련 위험 항목을 확인합니다.</li>
        <li>Infrastructure as Code(CloudFormation, CDK)로 모니터링 리소스를 관리하여 변경 이력을 추적합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon CloudWatch — 경보 및 대시보드 관리</li>
        <li>AWS Well-Architected Tool — 모니터링 관련 위험 평가</li>
        <li>AWS Config — AWS 리소스 변경 이력 추적</li>
        <li>AWS CloudFormation — Infrastructure as Code로 모니터링 리소스 관리</li>
      </ul>
      <PageNav />
    </article>
  );
}
