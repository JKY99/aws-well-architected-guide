import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps2Bp01Page() {
  return (
    <article className="doc-content">
      <h1>OPS02-BP01 — 리소스 소유권 부여</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>

      <p>
        모든 리소스(애플리케이션, 인프라, 데이터)에 명확한 소유자를 지정합니다.
        소유권이 명확하지 않으면 유지보수, 보안 패치, 비용 관리가 방치될 수 있습니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        모든 워크로드 구성요소에 식별된 소유자가 있으며, 소유자는 해당 리소스의
        운영, 보안, 비용에 책임을 집니다. 소유권 정보가 태그나 CMDB에 기록되어 있습니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>소유자 없이 배포된 리소스가 방치되어 보안 취약점이 되는 경우</li>
        <li>팀 전환 시 소유권 이전 없이 리소스가 고아 상태로 남는 경우</li>
        <li>소유권이 문서화되지 않아 장애 시 담당자를 찾는 데 시간이 낭비되는 경우</li>
        <li>리소스 소유권과 비용 책임이 분리되어 클라우드 비용이 증가하는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>장애 발생 시 신속한 담당자 식별로 MTTR 감소</li>
        <li>보안 취약점 발생 시 책임 있는 대응 가능</li>
        <li>비용 청구 및 예산 관리의 정확성 향상</li>
        <li>고아 리소스 제거로 불필요한 비용 절감</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>모든 AWS 리소스에 Owner, Team, CostCenter 등의 필수 태그를 적용합니다.</li>
        <li>AWS Organizations의 태그 정책으로 태그 표준을 강제합니다.</li>
        <li>AWS Config 규칙으로 소유자 태그가 없는 리소스를 자동 감지합니다.</li>
        <li>리소스 인벤토리(CMDB)를 유지하여 소유권 정보를 중앙에서 관리합니다.</li>
        <li>팀 변경 시 소유권 이전 프로세스를 표준화합니다.</li>
        <li>정기적으로 태그 없는 리소스를 감사하고 소유자를 할당합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Resource Tagging API — 리소스 태그 일괄 관리</li>
        <li>AWS Organizations 태그 정책 — 태그 표준 적용</li>
        <li>AWS Config — 태그 규정 준수 모니터링</li>
        <li>AWS Systems Manager Inventory — 리소스 인벤토리 관리</li>
      </ul>

      <PageNav />
    </article>
  );
}
