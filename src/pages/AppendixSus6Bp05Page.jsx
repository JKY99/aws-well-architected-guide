import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSus6Bp05Page() {
  return (
    <article className="doc-content">
      <h1>SUS06-BP05 — 테스트에 관리형 디바이스 팜 사용</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 낮음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 낮은 수준입니다.</p>
      </div>

      <p>
        관리형 디바이스 팜을 사용하여 대표적인 하드웨어 세트에서 새 기능을 효율적으로 테스트합니다.
        물리적 디바이스 인프라를 직접 유지 관리하는 대신 공유 관리형 서비스를 활용하면 테스트에
        사용되는 하드웨어의 활용도를 높이고 환경적 영향을 줄일 수 있습니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        공유 관리형 디바이스 팜을 활용하여 다양한 디바이스와 브라우저에서 효율적으로 테스트하고,
        물리적 디바이스 인프라 유지 관리에 따른 에너지 소비와 하드웨어 낭비를 줄입니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>각 팀이 독립적으로 물리적 테스트 디바이스를 구매하고 유지 관리하는 경우</li>
        <li>활용률이 낮은 전용 테스트 하드웨어를 유지하는 경우</li>
        <li>제한된 디바이스 세트에서만 테스트하여 호환성 문제를 놓치는 경우</li>
        <li>수동 디바이스 테스트로 CI/CD 파이프라인 통합이 어려운 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>공유 디바이스 인프라를 통한 하드웨어 활용도 향상</li>
        <li>물리적 디바이스 구매 및 유지 관리 비용 절감</li>
        <li>다양한 디바이스와 브라우저에서의 광범위한 테스트 가능</li>
        <li>CI/CD 파이프라인에 통합하여 자동화된 테스트 실행</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>AWS Device Farm을 사용하여 실제 모바일 디바이스와 브라우저에서 자동화된 테스트를 실행합니다.</li>
        <li>Amazon CloudWatch RUM을 활용하여 실제 사용자 환경에서의 성능을 모니터링합니다.</li>
        <li>CI/CD 파이프라인에 AWS Device Farm을 통합하여 배포 전 자동 테스트를 수행합니다.</li>
        <li>크로스 브라우저 및 크로스 디바이스 테스트 매트릭스를 정의하여 광범위한 호환성을 확인합니다.</li>
        <li>테스트 자동화 프레임워크를 활용하여 반복적인 수동 테스트를 제거합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Device Farm — 실제 디바이스 및 브라우저에서의 관리형 테스트 서비스</li>
        <li>Amazon CloudWatch RUM — 실제 사용자 모니터링</li>
        <li>AWS CodePipeline — CI/CD 파이프라인에 디바이스 테스트 통합</li>
        <li>AWS CodeBuild — 자동화된 테스트 실행 환경</li>
      </ul>

      <PageNav />
    </article>
  );
}
