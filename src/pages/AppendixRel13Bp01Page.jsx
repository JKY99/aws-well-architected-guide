import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel13Bp01Page() {
  return (
    <article className="doc-content">
      <h1>REL13-BP01 — 다운타임 및 데이터 손실에 대한 복구 목표 정의</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 수립하지 않으면 높은 수준의 위험이 노출됩니다.</p>
      </div>
      <p>
        모든 워크로드에 기술적 고려사항과 비즈니스 영향을 기반으로 지정된 RTO와 RPO를 정의합니다.
        RTO(복구 시간 목표)는 서비스 중단과 복원 사이의 최대 허용 지연이며,
        RPO(복구 시점 목표)는 마지막 데이터 복구 지점 이후의 최대 허용 시간입니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        모든 워크로드에 기술적 고려사항과 비즈니스 영향을 기반으로 지정된 RTO와 RPO가 있습니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>복구 목표를 지정하지 않음</li>
        <li>임의의 복구 목표 선택</li>
        <li>복구 목표가 너무 완화되어 비즈니스 목표를 충족하지 못함</li>
        <li>다운타임 및 데이터 손실의 영향을 평가하지 않음</li>
        <li>비현실적인 목표 선택 (복구 시간 제로, 데이터 손실 제로)</li>
        <li>실제 비즈니스 필요보다 더 엄격한 목표 설정 (불필요한 비용 발생)</li>
        <li>의존하는 워크로드와 호환되지 않는 복구 목표</li>
        <li>규제 및 컴플라이언스 요구사항 미고려</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>비즈니스 요구사항에 기반한 명확하고 측정 가능한 복구 목표 수립</li>
        <li>비즈니스 목표에 맞는 맞춤형 재해 복구 계획 수립 가능</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>비즈니스 영향 계층에 따라 워크로드를 분류하고 관련 RTO/RPO 목표를 가진 매트릭스 생성: 중요(Critical), 높음(High), 중간(Medium), 낮음(Low)</li>
        <li>분석 시 고려할 핵심 질문: 허용되지 않는 비즈니스 영향 전 최대 사용 불가 시간? 영향 유형(재정적, 평판, 운영, 규제)? 최대 허용 데이터 손실? 파생 데이터를 다른 소스에서 재생성 가능한가? 다운스트림 워크로드의 복구 목표? 업스트림 워크로드의 복구 목표? 계절성/이벤트 기반 목표 차이? 법적/계약적 SLA 패널티? 규제/컴플라이언스 데이터 무결성 요구사항?</li>
        <li>이해관계자 식별: 각 워크로드에 대한 비즈니스 및 기술 팀</li>
        <li>카테고리 정의: 해당 RTO/RPO 목표와 함께 중요도 계층 생성</li>
        <li>워크로드 할당: 각 워크로드를 적절한 영향 카테고리에 매핑</li>
        <li>검증 및 조정: 비즈니스 및 기술 팀과 함께 달성 가능성 검토</li>
        <li>AWS Resilience Hub를 사용하여 RTO/RPO 목표를 기반으로 복원력 정책 정의 및 워크로드 평가</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Resilience Hub (복원력 정책 관리 및 RTO/RPO 평가)</li>
        <li>AWS Well-Architected Tool (DR 관련 위험 평가)</li>
        <li>AWS Backup (RPO에 맞는 백업 빈도 설정)</li>
      </ul>
      <PageNav />
    </article>
  );
}
