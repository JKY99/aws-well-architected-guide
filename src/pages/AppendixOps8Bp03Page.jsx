import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps8Bp03Page() {
  return (
    <article className="doc-content">
      <h1>OPS08-BP03 — 워크로드 트레이스 분석</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간 수준입니다.</p>
      </div>

      <p>
        애플리케이션의 분산 운영에 대한 명확한 가시성을 확보하여 더 빠른 문제 해결과
        향상된 사용자 경험을 실현합니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        애플리케이션의 분산 운영에 대한 명확한 가시성을 확보합니다.
        더 빠른 문제 해결 및 평균 해결 시간(MTTR) 감소를 달성합니다.
        의존성과 그 영향에 대한 인사이트를 얻고 성능 이상을 신속하게 식별합니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>로그와 메트릭에만 의존하고 트레이스 데이터를 간과하는 경우</li>
        <li>트레이스 데이터를 관련 로그와 상관하지 않는 경우</li>
        <li>대기 시간 및 오류율과 같은 트레이스에서 파생된 메트릭을 무시하는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>문제 해결 개선 및 평균 해결 시간(MTTR) 감소</li>
        <li>의존성과 그 영향에 대한 인사이트 확보</li>
        <li>성능 문제의 신속한 식별 및 수정</li>
        <li>트레이스에서 파생된 메트릭을 활용한 정보 기반 의사결정</li>
        <li>최적화된 구성 요소 상호작용을 통한 향상된 사용자 경험</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>AWS X-Ray를 통합하여 트레이스 데이터를 캡처합니다.</li>
        <li>X-Ray 메트릭(대기 시간, 요청 비율, 오류율, 응답 시간 분포)을 분석합니다.</li>
        <li>ServiceLens 맵을 사용하여 향상된 관찰 가능성을 구현합니다.</li>
        <li>X-Ray Insights를 활성화하여 자동화된 이상 감지를 수행합니다.</li>
        <li>X-Ray Analytics를 사용하여 트레이스 데이터를 탐색하고 인사이트를 추출합니다.</li>
        <li>실시간 사용자 트레이싱을 위해 CloudWatch RUM(실제 사용자 모니터링)을 구현합니다.</li>
        <li>트레이스 데이터를 관련 로그와 상관합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS X-Ray — 분산 트레이싱의 기본 서비스</li>
        <li>Amazon CloudWatch ServiceLens — 향상된 관찰 가능성</li>
        <li>Amazon DevOps Guru — 머신 러닝 기반 인사이트</li>
        <li>CloudWatch Synthetics — 카나리 모니터링</li>
        <li>CloudWatch RUM — 실제 사용자 모니터링</li>
      </ul>

      <PageNav />
    </article>
  );
}
