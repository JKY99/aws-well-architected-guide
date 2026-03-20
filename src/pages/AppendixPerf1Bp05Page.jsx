import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf1Bp05Page() {
  return (
    <article className="doc-content">
      <h1>PERF01-BP05 — 정책 및 참조 아키텍처 활용</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>조직의 아키텍처 정책과 검증된 참조 아키텍처를 활용합니다. 표준화된 아키텍처 패턴을 통해 일관성을 유지하고 반복적인 의사결정 부담을 줄입니다.</p>
      <h2>원하는 결과</h2>
      <p>검증된 정책과 참조 아키텍처를 활용하여 아키텍처 결정의 일관성을 높이고, 모범 사례를 조직 전반에 신속하게 적용합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>팀마다 동일한 문제에 대해 서로 다른 아키텍처 결정</li>
        <li>이미 검증된 참조 아키텍처를 활용하지 않고 처음부터 설계</li>
        <li>조직의 아키텍처 정책을 무시하거나 인식하지 못함</li>
        <li>참조 아키텍처를 맹목적으로 적용하고 워크로드 특성에 맞게 조정하지 않음</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>아키텍처 결정의 일관성으로 운영 복잡성 감소</li>
        <li>검증된 패턴 재사용으로 구현 시간 단축</li>
        <li>조직 전반의 모범 사례 공유 및 확산</li>
        <li>신규 팀이 빠르게 고품질 아키텍처 구현 가능</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS Solutions Library에서 워크로드 유형에 맞는 참조 아키텍처 검토</li>
        <li>조직 내 아키텍처 표준과 가이드라인 수립 및 공유</li>
        <li>AWS Quick Starts를 활용하여 검증된 배포 자동화 적용</li>
        <li>참조 아키텍처를 워크로드 특성에 맞게 조정하고 검토</li>
        <li>아키텍처 검토 보드(ARB)를 통해 표준 준수 여부 점검</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Solutions Library — 검증된 솔루션 및 참조 아키텍처</li>
        <li>AWS Well-Architected Tool — 아키텍처 평가 및 개선</li>
        <li>AWS Service Catalog — 승인된 서비스 및 제품 관리</li>
        <li>AWS CloudFormation — 참조 아키텍처 코드화 및 재사용</li>
      </ul>
      <PageNav />
    </article>
  );
}
