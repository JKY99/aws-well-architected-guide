import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf5Bp04Page() {
  return (
    <article className="doc-content">
      <h1>PERF05-BP04 — 워크로드 부하 테스트</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 낮음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 낮습니다.</p>
      </div>
      <p>워크로드에 대한 부하 테스트를 수행하여 성능 한계, 병목 지점, 확장성 한계를 파악합니다. 프로덕션 배포 전 실제 트래픽 패턴을 시뮬레이션합니다.</p>
      <h2>원하는 결과</h2>
      <p>부하 테스트를 통해 워크로드의 성능 특성을 파악하고, 예상 트래픽 수준에서 안정적으로 동작함을 확인합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>부하 테스트 없이 프로덕션에 배포하여 성능 문제 발견</li>
        <li>실제 트래픽 패턴과 다른 단순한 테스트 시나리오 사용</li>
        <li>부하 테스트 결과를 분석하지 않고 단순히 통과 여부만 확인</li>
        <li>일회성 테스트만 수행하고 지속적으로 테스트하지 않음</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>프로덕션 환경의 성능 문제 사전 발견 및 해소</li>
        <li>성능 한계와 확장성 특성 파악</li>
        <li>용량 계획 및 오토스케일링 구성 최적화</li>
        <li>성능 회귀(regression) 조기 감지</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>실제 사용 패턴을 반영한 부하 테스트 시나리오 설계</li>
        <li>점진적 부하 증가, 스파이크 테스트, 지속 부하 테스트 수행</li>
        <li>CI/CD 파이프라인에 성능 테스트 통합하여 자동화</li>
        <li>AWS Load Testing 솔루션 또는 서드파티 도구 활용</li>
        <li>테스트 결과를 기준선으로 설정하고 지속적으로 비교</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Distributed Load Testing — 분산 부하 테스트 솔루션</li>
        <li>Amazon CloudWatch — 부하 테스트 중 메트릭 모니터링</li>
        <li>AWS CodePipeline — 자동화된 성능 테스트 파이프라인</li>
        <li>AWS X-Ray — 부하 테스트 중 성능 병목 추적</li>
      </ul>
      <PageNav />
    </article>
  );
}
