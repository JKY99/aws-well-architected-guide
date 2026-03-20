import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps2Bp01Page() {
  return (
    <article className="doc-content">
      <h1>OPS02-BP01 — 리소스에 식별된 소유자가 있음</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 노출되는 위험 수준이 높습니다.</p>
      </div>

      <p>
        워크로드의 리소스에는 변경 제어, 문제 해결 등의 기능을 위해 식별된 소유자가 있어야 합니다.
        소유자는 워크로드, 계정, 인프라, 플랫폼, 애플리케이션에 대해 지정됩니다.
        소유권은 중앙 레지스트리나 리소스에 연결된 메타데이터를 사용하여 기록합니다.
        구성요소의 비즈니스 가치는 해당 구성요소에 적용되는 프로세스와 절차에 반영됩니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        리소스에는 메타데이터 또는 중앙 레지스트리를 사용하여 식별된 소유자가 있습니다.
        팀 구성원이 리소스를 소유한 사람을 식별할 수 있습니다.
        계정에는 가능한 경우 단일 소유자가 있습니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>AWS 계정의 대체 연락처가 채워지지 않은 경우</li>
        <li>리소스에 소유 팀을 식별하는 태그가 없는 경우</li>
        <li>이메일 매핑 없이 ITSM 대기열이 있는 경우</li>
        <li>두 팀이 중요한 인프라 구성요소에 대해 겹치는 소유권을 갖는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>소유권이 지정되어 리소스의 변경 제어가 간단해집니다.</li>
        <li>문제 해결 시 올바른 소유자를 참여시킬 수 있습니다.</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>소유권의 의미 정의: 소유권이 변경 사항을 감독하는 사람, 문제 해결 중 리소스를 지원하는 사람, 또는 재정적으로 책임지는 사람을 가리키는지 명확히 합니다.</li>
        <li>AWS Organizations 사용: 계정을 중앙에서 관리하고 그룹 이메일 주소/배포 목록(개인이 아닌)을 사용하여 대체 연락처를 구성합니다.</li>
        <li>태깅 전략 구현: AWS 태그를 사용하여 소유자와 연락처 정보를 식별하고 AWS Config 규칙을 활용하여 필수 소유권 태그를 강제합니다.</li>
        <li>Amazon Q Business 사용: 엔터프라이즈 데이터 소스(40개 이상의 커넥터 사용 가능)에 연결하여 소유권 문서 검색을 지원합니다.</li>
        <li>AWS 외부 리소스 문서화: 플랫폼과 인프라의 소유권 및 연락처 정보를 식별하는 접근 가능한 문서(위키, ITSM 도구)를 만듭니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Organizations</li>
        <li>AWS Config (Config Rules의 required-tags)</li>
        <li>Amazon Q Business</li>
        <li>AWS 태깅 모범 사례 백서</li>
        <li>관련 모범 사례: OPS02-BP02 프로세스 및 절차에 식별된 소유자가 있음, OPS02-BP04 책임과 소유권을 관리하는 메커니즘이 있음</li>
      </ul>

      <PageNav />
    </article>
  );
}
