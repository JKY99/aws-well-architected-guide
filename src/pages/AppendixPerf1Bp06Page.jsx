import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf1Bp06Page() {
  return (
    <article className="doc-content">
      <h1>PERF01-BP06 — 벤치마킹을 통한 아키텍처 결정</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>벤치마킹을 활용하여 아키텍처 결정을 주도합니다. 다양한 옵션을 실제로 측정하고 비교하여 워크로드에 가장 적합한 아키텍처를 선택합니다.</p>
      <h2>원하는 결과</h2>
      <p>벤치마킹 데이터를 기반으로 아키텍처 결정을 내립니다. 다양한 서비스와 구성 옵션을 비교하여 성능, 비용, 복잡성 간의 최적 균형을 달성합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>벤치마킹 없이 특정 서비스나 아키텍처를 선택</li>
        <li>프로덕션 워크로드와 다른 조건으로 벤치마킹 수행</li>
        <li>벤치마킹 결과를 문서화하지 않아 의사결정 근거 소실</li>
        <li>단일 지표만으로 아키텍처 비교</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>객관적인 데이터 기반의 아키텍처 결정</li>
        <li>성능 요구사항 충족 여부를 사전에 검증</li>
        <li>과도한 또는 부족한 리소스 프로비저닝 방지</li>
        <li>다양한 옵션의 비용 대비 성능 비교</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>프로덕션 환경과 유사한 조건에서 벤치마킹 수행</li>
        <li>실제 워크로드 패턴을 반영한 테스트 시나리오 구성</li>
        <li>응답 시간, 처리량, 리소스 사용률 등 다양한 지표 측정</li>
        <li>AWS 서비스 간 성능 비교 시 동일한 기준 적용</li>
        <li>벤치마킹 결과를 문서화하여 향후 의사결정에 활용</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon CloudWatch — 성능 메트릭 수집 및 시각화</li>
        <li>AWS X-Ray — 분산 추적 및 성능 분석</li>
        <li>AWS Compute Optimizer — 컴퓨팅 리소스 최적화 권고</li>
        <li>AWS Well-Architected Tool — 아키텍처 검토 및 개선</li>
      </ul>
      <PageNav />
    </article>
  );
}
