import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AbstractGeneralDesignPrinciplesPage() {
  return (
    <article className="doc-content">
      <h1>일반 설계 원칙</h1>

      <p>
        Well-Architected Framework는 클라우드에서 좋은 설계를 촉진하기 위한 6가지 일반 설계 원칙을 제시합니다.
      </p>

      <h2>1. 용량 추측을 멈춰라 (Stop guessing your capacity needs)</h2>

      <p>
        잘못된 용량 판단은 비싼 유휴 자원 낭비나 성능 저하를 초래합니다.
        클라우드에서는 필요한 만큼만 사용하고 자동으로 스케일 인/아웃이 가능하여 이 문제가 사라집니다.
      </p>

      <h2>2. 프로덕션 규모로 시스템을 테스트하라 (Test systems at production scale)</h2>

      <p>
        클라우드에서는 온디맨드로 프로덕션 규모의 테스트 환경을 생성하고, 테스트 완료 후 삭제할 수 있습니다.
        실행 중일 때만 비용이 발생하므로 온프레미스 테스트 비용의 일부로 실제 환경을 시뮬레이션할 수 있습니다.
      </p>

      <h2>3. 아키텍처 실험을 염두에 두고 자동화하라 (Automate with architectural experimentation in mind)</h2>

      <p>
        자동화를 통해 낮은 비용으로 워크로드를 생성·복제하고 수동 작업 비용을 줄일 수 있습니다.
        자동화 변경 이력 추적, 영향 감사, 이전 설정으로의 롤백이 가능합니다.
      </p>

      <h2>4. 진화적 아키텍처를 고려하라 (Consider evolutionary architectures)</h2>

      <p>
        전통적 환경에서 아키텍처 결정은 정적이고 단발성이었습니다.
        클라우드에서는 자동화와 온디맨드 테스트로 설계 변경의 위험이 낮아져,
        비즈니스 변화에 맞춰 시스템이 지속적으로 진화할 수 있습니다.
      </p>

      <h2>5. 데이터를 기반으로 아키텍처를 발전시켜라 (Drive architectures using data)</h2>

      <p>
        클라우드에서는 아키텍처 선택이 워크로드 동작에 미치는 영향에 대한 데이터를 수집할 수 있습니다.
        클라우드 인프라는 코드이므로, 이 데이터를 활용해 사실 기반의 아키텍처 개선 결정을 내릴 수 있습니다.
      </p>

      <h2>6. 게임 데이를 통해 개선하라 (Improve through game days)</h2>

      <p>
        정기적으로 게임 데이를 일정으로 잡아 프로덕션 이벤트를 시뮬레이션함으로써
        아키텍처와 프로세스의 성능을 테스트합니다.
        개선 포인트를 파악하고 조직의 이벤트 대응 경험을 쌓을 수 있습니다.
      </p>

      <PageNav />
    </article>
  );
}
