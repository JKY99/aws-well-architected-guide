import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function SusSoftwareArchPage() {
  return (
    <article className="doc-content">
      <h1>지속 가능성 — 소프트웨어 및 아키텍처 패턴</h1>

      <p>
        지속 가능한 소프트웨어 아키텍처 패턴을 구현하여 리소스 사용을 최소화하고
        환경적 영향을 줄입니다.
      </p>

      <h2>모범 사례</h2>

      <h3>SUS03-BP01: 비동기 및 예약 패턴 최적화</h3>
      <p>
        실시간 처리 대신 비동기 패턴을 사용하여 피크 수요를 평준화하고
        리소스 활용도를 높입니다. Amazon SQS, Amazon EventBridge를 활용합니다.
      </p>

      <h3>SUS03-BP02: 오래된 리소스를 제거하기 위한 코드 리팩터링</h3>
      <p>
        레거시 코드와 사용하지 않는 기능을 제거하여 처리 오버헤드를 줄입니다.
        불필요한 연산을 줄이면 전력 소비도 감소합니다.
      </p>

      <h3>SUS03-BP03: 관리형 수명 주기 정책 사용</h3>
      <p>
        데이터 및 리소스의 수명 주기를 자동으로 관리하여
        더 이상 필요하지 않은 리소스를 자동으로 정리합니다.
      </p>

      <h3>SUS03-BP04: 작업에 적합한 컴퓨팅 및 스토리지 사용</h3>
      <p>
        워크로드 요구사항에 맞는 컴퓨팅 및 스토리지 리소스를 선택합니다.
        GPU 인스턴스, ARM 기반 Graviton 프로세서 등 작업에 특화된 하드웨어를 활용합니다.
      </p>

      <h3>SUS03-BP05: 공유 서비스 사용</h3>
      <p>
        여러 팀이나 애플리케이션이 공유할 수 있는 서비스를 구축하여
        중복 리소스를 줄이고 효율성을 높입니다.
      </p>

      <h3>SUS03-BP06: 캐싱 전략 최적화</h3>
      <p>
        적절한 캐싱 전략을 사용하여 반복적인 계산과 데이터 검색을 줄입니다.
        Amazon ElastiCache, Amazon CloudFront를 활용하여 캐싱을 구현합니다.
      </p>

      <PageNav />
    </article>
  );
}
