import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel6Bp04Page() {
  return (
    <article className="doc-content">
      <h1>REL06-BP04 — 응답 자동화 (실시간 처리 및 경보)</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 수립하지 않으면 중간 수준의 위험이 노출됩니다.</p>
      </div>
      <p>
        실시간 경보를 식별하고 경보에 대한 자동화 처리를 설정하여 서비스 수준 목표(SLO)와
        서비스 수준 계약(SLA)을 유지하기 위한 적절한 조치가 취해지도록 합니다.
        자동화는 단일 구성 요소의 자가 치유 활동에서 전체 사이트 장애 조치까지 다양합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        실시간 경보가 식별되고 SLO와 SLA를 유지하기 위해 적절한 조치가 취해지도록
        경보에 대한 자동화 처리가 설정됩니다.
        자동화는 단일 구성 요소의 자가 치유에서 전체 사이트 장애 조치까지 다양합니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>주요 실시간 경보의 명확한 인벤토리 또는 카탈로그 없음</li>
        <li>중요한 경보에 대한 자동화 응답 없음(예: 컴퓨팅이 한계에 가까워질 때 Auto Scaling이 작동하지 않음)</li>
        <li>모순된 경보 응답 작업</li>
        <li>경보 알림을 받을 때 운영자가 따를 표준 운영 절차(SOP) 없음</li>
        <li>구성 변경을 모니터링하지 않아 감지되지 않은 구성 변경으로 워크로드 중단 발생</li>
        <li>의도하지 않은 구성 변경을 되돌리는 전략 없음</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>시스템 복원력 향상: 자동화된 경보 처리로 빠른 수정 조치 가능</li>
        <li>인적 오류 감소: 수동적이고 오류가 발생하기 쉬운 개입 최소화</li>
        <li>가용성 목표 달성: 워크로드가 가용성 목표 충족</li>
        <li>서비스 중단 감소: 감지된 문제에 더 빠른 대응</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>경보 인벤토리 생성: AWS CLI와 Amazon CloudWatch를 사용하여 모든 경보를 검색하고 목록화</li>
        <li>모든 경보 작업 문서화: 모든 경보와 해당 작업(수동 또는 자동화)이 포함된 런북 업데이트</li>
        <li>경보 작업 설정 및 관리: CloudWatch SDK를 사용하여 자동화된 작업 지정, EventBridge를 사용하여 시스템 이벤트에 대응</li>
        <li>표준 운영 절차(SOP) 수립: AWS Resilience Hub를 사용하여 SOP 템플릿을 구성하고 Systems Manager와 통합</li>
        <li>Amazon DevOps Guru를 활용하여 애플리케이션 리소스의 이상 동작을 모니터링하고 표적화된 수정 권장 사항 제공</li>
        <li>AWS Config를 사용하여 구성 변경을 모니터링하고 의도하지 않은 변경에 대한 자동 수정 구현</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon CloudWatch (경보 정의 및 모니터링)</li>
        <li>AWS Systems Manager (런북 및 자동화 문서)</li>
        <li>Amazon EventBridge (이벤트 기반 자동화)</li>
        <li>AWS Lambda (자동화 응답)</li>
        <li>AWS Resilience Hub (SOP 템플릿 및 권장 사항)</li>
        <li>Amazon DevOps Guru (이상 감지 및 자동화 수정)</li>
        <li>AWS Config (구성 변경 모니터링)</li>
      </ul>
      <PageNav />
    </article>
  );
}
