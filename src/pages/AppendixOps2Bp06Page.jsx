import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps2Bp06Page() {
  return (
    <article className="doc-content">
      <h1>OPS02-BP06 — 팀 간 책임이 사전에 정의되거나 협의됨</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 낮음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 낮습니다.</p>
      </div>

      <p>
        팀 간 협업 또는 지원 계약이 합의되고 문서화되어 있습니다.
        서로 지원하거나 협력하는 팀들은 명확한 커뮤니케이션 채널과 응답 기대치를 정의합니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        팀 간 협업 및 지원 계약이 합의되고 문서화되어 있습니다.
        서로 지원하거나 협력하는 팀들은 명확한 커뮤니케이션 채널과 응답 기대치를 보유합니다.
        운영팀과 개발팀 간에 인시던트 대응 시 명확한 역할과 책임이 정의되어 있습니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>프로덕션 인시던트 발생 시 두 팀이 독립적으로 문제를 해결하려 하여 사일로화된 노력으로 장애 시간이 연장되는 경우</li>
        <li>운영팀이 개발팀의 지원이 필요하지만 합의된 응답 시간이 없어 요청이 백로그에 방치되는 경우</li>
        <li>팀 간 프로세스나 절차가 공유될 때 협업 방식이 명확하지 않은 경우</li>
        <li>팀 간 의존성이 있지만 요청에 대한 SLA가 합의되지 않은 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>팀들이 서로 상호작용하고 지원하는 방법을 알 수 있음</li>
        <li>응답성에 대한 기대치가 명확히 알려짐</li>
        <li>커뮤니케이션 채널이 명확하게 정의됨</li>
        <li>인시던트 대응 시 역할 혼란 감소 및 복구 시간 단축</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>조직 전반의 이해관계자들과 함께 프로세스 및 절차를 기반으로 팀 간 합의를 개발합니다.</li>
        <li>프로세스나 절차가 두 팀 사이에 공유되는 경우, 팀들이 어떻게 협력할지에 대한 런북을 개발합니다.</li>
        <li>팀 간 의존성이 있는 경우 요청에 대한 응답 SLA를 합의합니다.</li>
        <li>지식 관리 시스템(위키 등)에 책임을 문서화합니다.</li>
        <li>인시던트 대응 시나리오에서 팀 간 협력을 정기적으로 훈련합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Systems Manager Incident Manager — 인시던트 대응 시 팀 간 협력 관리</li>
        <li>AWS Well-Architected Tool — 운영 우수성 검토 및 팀 간 책임 평가</li>
        <li>Amazon Connect — 커뮤니케이션 채널 구축</li>
      </ul>

      <PageNav />
    </article>
  );
}
