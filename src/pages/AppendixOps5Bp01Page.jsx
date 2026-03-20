import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps5Bp01Page() {
  return (
    <article className="doc-content">
      <h1>OPS05-BP01 — 버전 관리 사용</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 노출되는 위험 수준이 높습니다.</p>
      </div>

      <p>
        버전 관리 시스템(Git 등)을 사용하여 코드와 인프라 아티팩트(CloudFormation 템플릿 등)의 변경을
        추적하고 관리합니다. 이를 통해 팀이 안전하게 협업하고 일관성을 유지하며 오류 발생 시
        알려진 정상 상태로 쉽게 되돌릴 수 있습니다.
      </p>

      <h2>원하는 결과</h2>
      <ul>
        <li>팀이 일관성을 유지하며 코드에 협업하고 변경이 유실되지 않습니다.</li>
        <li>올바른 버전 관리를 통해 오류를 쉽게 되돌릴 수 있습니다.</li>
        <li>변경이 추적되고 자신감을 갖고 배포할 수 있습니다.</li>
      </ul>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>버전 관리 없이 워크스테이션에 로컬로 코드를 저장하여 저장 장치 장애 시 복구 불가능한 손실이 발생하는 경우</li>
        <li>되돌릴 능력 없이 기존 코드를 덮어써서 애플리케이션 장애를 유발하는 경우</li>
        <li>파일 충돌로 여러 팀 구성원이 동시에 작업할 수 없는 경우</li>
        <li>중요한 작업을 실수로 덮어쓰는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>알려진 정상 상태와 이전 버전으로 쉽게 되돌릴 수 있습니다.</li>
        <li>자산 손실 위험이 감소합니다.</li>
        <li>변경 추적 및 배포 기능이 향상됩니다.</li>
        <li>기존 버전에 대한 변경 감지를 지원합니다.</li>
        <li>장애 시 롤백을 지원합니다.</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>버전 관리 저장소에서 모든 자산을 유지 관리합니다.</li>
        <li>변경 추적, 새 버전 배포, 수정 감지, 이전 버전으로 되돌리기를 지원합니다.</li>
        <li>구성 관리 시스템의 버전 관리 기능을 절차에 통합합니다.</li>
        <li>코드 및 코드형 인프라 아티팩트에 개정 또는 소스 관리 시스템을 사용합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS CloudFormation — 코드형 인프라 관리</li>
        <li>AWS CodeCommit — 완전관리형 Git 저장소</li>
        <li>AWS Developer Tools — 소스 관리 및 빌드 관리 솔루션</li>
      </ul>

      <PageNav />
    </article>
  );
}
