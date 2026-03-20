import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel6Bp04Page() {
  return (
    <article className="doc-content">
      <h1>REL06-BP04 — 워크로드 모니터링 검토</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 낮음</div>
        <p>이 모범 사례를 따르지 않을 경우 워크로드 변화에 맞지 않는 모니터링 체계가 유지되어 새로운 장애 유형을 감지하지 못하게 됩니다.</p>
      </div>
      <p>워크로드 모니터링은 한 번 설정으로 끝나지 않습니다. 워크로드가 진화하고 새로운 기능이 추가됨에 따라 모니터링 전략을 주기적으로 검토하고 업데이트하여 지속적인 관측 가능성을 확보해야 합니다.</p>
      <h2>원하는 결과</h2>
      <p>모니터링 설정이 현재 워크로드의 아키텍처와 비즈니스 요구사항을 정확히 반영합니다. 불필요한 알람은 제거되고, 새로운 위험 영역에 대한 모니터링이 추가되며, 알람 임계값이 실제 운영 데이터를 기반으로 조정됩니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>초기 설정 이후 모니터링을 검토하지 않아 더 이상 존재하지 않는 리소스의 알람 유지</li>
        <li>새로운 서비스나 기능 추가 시 모니터링 업데이트를 개발 프로세스에 포함하지 않음</li>
        <li>장애 후 회고(post-mortem)에서 모니터링 개선 사항을 도출하지 않음</li>
        <li>알람 임계값을 초기 설정 이후 운영 데이터를 기반으로 재조정하지 않음</li>
        <li>모니터링 커버리지를 측정하지 않아 사각지대 파악 불가</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>워크로드 변화에 따른 모니터링 사각지대 제거</li>
        <li>알람 피로 감소 — 불필요한 알람 정리로 신뢰도 향상</li>
        <li>장애 후 회고를 통한 모니터링 개선으로 재발 방지</li>
        <li>비즈니스 목표 변화에 맞춘 KPI 지표 업데이트</li>
        <li>팀 역량 향상 — 정기 검토를 통해 모니터링 모범 사례 공유</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>분기별 또는 주요 출시 이후 모니터링 검토 세션을 운영 캘린더에 포함</li>
        <li>장애 발생 시 해당 장애를 감지했어야 하는 모니터링이 있었는지 post-mortem에서 검토</li>
        <li>CloudWatch의 알람 히스토리를 분석하여 자주 발생하지만 무시되는 알람 식별 및 임계값 조정</li>
        <li>새로운 서비스 또는 기능 배포 시 모니터링 체크리스트를 배포 프로세스에 포함</li>
        <li>AWS Well-Architected Tool을 활용하여 주기적으로 관측 가능성 현황 평가</li>
        <li>모니터링 설정을 IaC로 관리하여 변경 이력 추적 및 검토 용이성 확보</li>
        <li>팀 내 모니터링 챔피언을 지정하여 모범 사례 전파 및 검토 주도</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Well-Architected Tool — 모니터링 성숙도 평가</li>
        <li>Amazon CloudWatch — 알람 히스토리 및 지표 분석</li>
        <li>AWS Config — 리소스 변경 추적 및 모니터링 갭 파악</li>
        <li>Amazon DevOps Guru — AI 기반 모니터링 커버리지 인사이트</li>
        <li>AWS Trusted Advisor — 운영 모범 사례 점검</li>
        <li>AWS Security Hub — 보안 모니터링 커버리지 평가</li>
      </ul>
      <PageNav />
    </article>
  );
}
