import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps11Bp01Page() {
  return (
    <article className="doc-content">
      <h1>OPS11-BP01 — 지속적인 개선 프로세스 보유</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>

      <p>
        워크로드를 아키텍처 모범 사례에 대해 자주 분석하고,
        개선 기회를 소프트웨어 개발 프로세스에서 기능과 동등한 우선순위로 부여합니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        문서화된 아키텍처 표준을 사용하여 합의된 빈도로 프로덕션 워크로드에 대한 정기적인 아키텍처 검토를 수행합니다.
        검토 중에 식별된 개선 기회가 소프트웨어 개발 프로세스에 우선순위화됩니다.
        워크로드가 최신 아키텍처 모범 사례에 부합합니다.
        의도적인 워크로드 발전이 이루어집니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>워크로드 배포 이후 수년간 아키텍처 검토가 수행되지 않은 경우</li>
        <li>개선 기회가 새로운 기능에 비해 낮은 우선순위로 백로그에 남아있는 경우</li>
        <li>조직 전체에 걸쳐 모범 사례 수정을 구현하는 표준이 없는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>워크로드가 최신 아키텍처 모범 사례에 부합하게 유지됨</li>
        <li>의도적인 워크로드 발전이 이루어짐</li>
        <li>모든 워크로드에 걸쳐 조직 모범 사례를 활용 가능</li>
        <li>누적된 영향이 있는 한계 이득이 더 깊은 효율성을 이끌어냄</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>내부 정의 표준 또는 AWS Well-Architected 프레임워크를 사용하여 합의된 빈도로 프로덕션 워크로드의 정기적인 아키텍처 검토를 수행합니다.</li>
        <li>내부 모범 사례를 위해 사용자 정의 렌즈가 있는 AWS Well-Architected Tool을 활용합니다.</li>
        <li>안내된 검토를 위해 AWS Solution Architect 또는 Technical Account Manager와 협력합니다.</li>
        <li>검토 중에 식별된 개선 기회를 소프트웨어 개발 프로세스에 우선순위화합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Well-Architected Tool — 워크로드 검토 및 모범 사례 평가</li>
        <li>AWS Well-Architected Tool 사용자 정의 렌즈 — 내부 모범 사례 적용</li>
        <li>AWS Solution Architects 및 Technical Account Managers — 안내된 검토</li>
      </ul>

      <PageNav />
    </article>
  );
}
