import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AbstractDefinitionsPage() {
  return (
    <article className="doc-content">
      <h1>정의</h1>

      <p>
        AWS Well-Architected Framework는 AWS 전문가들이 수많은 고객 아키텍처 컨설팅 경험을 바탕으로 만든,
        아키텍처 평가와 모범 사례 정렬을 위한 일관된 기준입니다.
      </p>

      <h2>6개 핵심 원칙(Pillar)</h2>

      <div className="doc-table-wrapper">
        <table>
          <thead>
            <tr>
              <th>원칙</th>
              <th>설명</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>운영 우수성 (Operational Excellence)</strong></td>
              <td>워크로드를 효과적으로 운영하고, 운영 통찰을 얻으며, 지속적으로 프로세스를 개선하여 비즈니스 가치를 창출하는 능력</td>
            </tr>
            <tr>
              <td><strong>보안 (Security)</strong></td>
              <td>클라우드 기술을 활용해 데이터, 시스템, 자산을 보호하고 보안 태세를 강화하는 방법</td>
            </tr>
            <tr>
              <td><strong>안정성 (Reliability)</strong></td>
              <td>워크로드가 예상대로 올바르고 일관되게 기능을 수행하는 능력. 전체 생명주기에 걸친 운영 및 테스트 포함</td>
            </tr>
            <tr>
              <td><strong>성능 효율성 (Performance Efficiency)</strong></td>
              <td>시스템 요구사항을 충족하면서 컴퓨팅 자원을 효율적으로 사용하고, 수요 변화와 기술 발전에도 효율성을 유지하는 능력</td>
            </tr>
            <tr>
              <td><strong>비용 최적화 (Cost Optimization)</strong></td>
              <td>가장 낮은 비용으로 비즈니스 가치를 제공하는 시스템을 운영하는 능력</td>
            </tr>
            <tr>
              <td><strong>지속 가능성 (Sustainability)</strong></td>
              <td>에너지 소비를 줄이고 워크로드 전 구성요소에서 효율성을 높여 지속 가능성 영향을 지속적으로 개선하는 능력</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>주요 용어 정의</h2>

      <ul>
        <li>
          <strong>컴포넌트 (Component):</strong> 요구사항을 충족하는 코드, 설정, AWS 리소스의 집합.
          기술 소유권의 단위이며 다른 컴포넌트와 분리됩니다.
        </li>
        <li>
          <strong>워크로드 (Workload):</strong> 비즈니스 가치를 함께 제공하는 컴포넌트들의 집합.
          비즈니스 및 기술 리더가 주로 이 단위로 소통합니다.
        </li>
        <li>
          <strong>아키텍처 (Architecture):</strong> 워크로드 내 컴포넌트들이 함께 작동하는 방식.
          컴포넌트 간 통신과 상호작용에 초점을 맞춥니다.
        </li>
        <li>
          <strong>마일스톤 (Milestones):</strong> 설계·구현·테스트·출시·운영 등 제품 생명주기에서의
          주요 아키텍처 변화 시점.
        </li>
        <li>
          <strong>기술 포트폴리오 (Technology Portfolio):</strong> 비즈니스 운영에 필요한 워크로드 전체 집합.
        </li>
        <li>
          <strong>작업 수준 (Level of Effort):</strong> 구현에 필요한 시간·노력·복잡도 분류
          <ul>
            <li><strong>상 (High):</strong> 수 주~수 개월; 여러 스토리, 릴리즈, 태스크로 분할</li>
            <li><strong>중 (Medium):</strong> 수 일~수 주; 여러 릴리즈와 태스크로 분할</li>
            <li><strong>하 (Low):</strong> 수 시간~수 일; 여러 태스크로 분할</li>
          </ul>
        </li>
      </ul>

      <h2>아키텍처 트레이드오프</h2>

      <p>
        비즈니스 맥락에 따라 원칙 간 트레이드오프가 발생합니다:
      </p>

      <ul>
        <li>개발 환경: 안정성을 희생하여 비용·지속 가능성 최적화</li>
        <li>미션 크리티컬 환경: 비용·지속 가능성 증가를 감수하고 안정성 최우선</li>
        <li>이커머스 환경: 매출·고객 행동 영향으로 성능을 우선시</li>
      </ul>

      <div className="doc-note">
        <div className="doc-note-title">중요</div>
        <p>
          보안과 운영 우수성은 일반적으로 다른 원칙과 트레이드오프하지 않습니다.
        </p>
      </div>

      <PageNav />
    </article>
  );
}
