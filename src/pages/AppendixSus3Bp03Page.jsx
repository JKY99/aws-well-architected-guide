import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSus3Bp03Page() {
  return (
    <article className="doc-content">
      <h1>SUS03-BP03 — 가장 많은 시간이나 리소스를 소비하는 코드 영역 최적화</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간 수준입니다.</p>
      </div>

      <p>
        아키텍처 내 다양한 컴포넌트에서 실행되는 코드를 최적화하여 성능을 극대화하면서 리소스 사용을
        최소화합니다. 클라우드 아키텍처 애플리케이션의 코드를 포함한 모든 기능 영역을 지속적으로 검토하여
        리소스 사용과 성능을 최적화합니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        모든 코드 컴포넌트에 걸쳐 리소스 사용을 최소화합니다. 클라우드 아키텍처 애플리케이션의
        성능을 향상시키고 환경적 영향을 줄입니다. 리소스 비효율적인 코드 패턴을 지속적으로 식별하고 제거합니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>리소스 사용을 위한 코드 최적화를 무시하는 경우</li>
        <li>코드를 최적화하는 대신 리소스를 늘려 성능 문제에 대응하는 경우</li>
        <li>코드 검토 및 개발 프로세스에서 성능 추적이 없는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>효율적인 코드로 리소스 사용 최소화</li>
        <li>전반적인 성능 향상</li>
        <li>탄소 발자국 감소 및 환경적 영향 절감</li>
        <li>더 나은 리소스 활용을 통한 비용 최적화</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>에너지 효율성으로 알려진 Rust와 같은 효율적인 프로그래밍 언어를 사용합니다.</li>
        <li>Amazon Q Developer를 활용하여 효율적인 코드 작성을 지원합니다.</li>
        <li>Amazon CodeGuru Reviewer를 사용하여 코드 검토를 자동화하고 버그 및 안티패턴을 식별합니다.</li>
        <li>Amazon CodeGuru Profiler를 사용하여 높은 리소스 소비 영역을 식별합니다.</li>
        <li>리소스 집약적인 알고리즘을 더 간단하고 효율적인 대안으로 교체하고 불필요한 코드를 제거합니다.</li>
        <li>Amazon Q Code Transformation을 사용하여 애플리케이션 업그레이드 및 유지 관리를 자동화합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon CodeGuru Reviewer — 자동화된 코드 검토 및 품질 향상</li>
        <li>Amazon CodeGuru Profiler — 성능 프로파일링 및 최적화</li>
        <li>Amazon Q Developer — AI 지원 코드 생성</li>
        <li>Amazon Q Code Transformation — 자동화된 코드 업그레이드 및 유지 관리</li>
        <li>AWS SDK — 개발 도구 및 라이브러리</li>
      </ul>

      <PageNav />
    </article>
  );
}
