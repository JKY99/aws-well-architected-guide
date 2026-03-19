import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf1Bp01Page() {
  return (
    <article className="doc-content">
      <h1>PERF01-BP01 — 데이터 기반 아키텍처 결정 수행</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>벤치마킹, 부하 테스트, 실제 사용 데이터를 기반으로 성능 아키텍처를 결정합니다. 가정이 아닌 측정값을 기반으로 의사결정합니다.</p>
      <h2>원하는 결과</h2>
      <p>실측 데이터를 기반으로 성능 요구사항을 충족하는 아키텍처 결정을 내립니다. 모든 아키텍처 선택은 실험과 측정에 의해 뒷받침되며, 가정이나 직관이 아닌 객관적인 데이터에 근거합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>측정 없이 가정으로 아키텍처 결정</li>
        <li>과거 패턴에만 의존하여 새로운 워크로드에 적용</li>
        <li>성능 테스트 없이 프로덕션에 배포</li>
        <li>실제 사용 데이터 없이 용량 계획 수립</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>근거 있는 의사결정으로 아키텍처 리스크 감소</li>
        <li>과도한 프로비저닝 방지로 비용 절감</li>
        <li>성능 병목 사전 발견 및 해소</li>
        <li>지속적인 성능 개선을 위한 기준선 확보</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS 환경에서 프로덕션과 유사한 조건으로 벤치마크 수행</li>
        <li>실제 트래픽 패턴을 반영한 부하 테스트 시나리오 구성</li>
        <li>Amazon CloudWatch로 성능 기준선(baseline) 설정 및 지속 모니터링</li>
        <li>AWS X-Ray를 사용하여 분산 시스템의 성능 병목 추적</li>
        <li>테스트 결과를 문서화하고 아키텍처 결정의 근거로 활용</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon CloudWatch — 성능 메트릭 수집 및 모니터링</li>
        <li>AWS X-Ray — 분산 추적 및 성능 분석</li>
        <li>AWS Load Testing 솔루션 — 부하 테스트 자동화</li>
        <li>AWS Well-Architected Tool — 아키텍처 검토 및 개선 권고</li>
      </ul>
      <PageNav />
    </article>
  );
}
