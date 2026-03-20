import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps7Bp03Page() {
  return (
    <article className="doc-content">
      <h1>OPS07-BP03 — 절차 수행을 위한 런북 사용</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간 수준입니다.</p>
      </div>

      <p>
        팀은 워크로드 작업을 수행하기 위한 단계별 가이드 컬렉션을 보유합니다.
        런북은 원하는 결과, 필요한 도구와 권한, 오류 처리 지침을 포함하며
        중앙 위치에 저장되고 자주 업데이트됩니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        팀이 워크로드 작업을 수행하기 위한 단계별 가이드 컬렉션을 보유합니다.
        런북에는 원하는 결과, 필요한 도구와 권한, 오류 처리 지침이 포함됩니다.
        런북은 버전 관리 시스템의 중앙 위치에 저장되고 자주 업데이트됩니다.
        팀원들이 AWS Health 이벤트 및 애플리케이션 알람에 일관되게 대응합니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>프로세스의 각 단계를 완료하기 위해 기억에 의존하는 경우</li>
        <li>체크리스트 없이 수동으로 변경을 배포하는 경우</li>
        <li>서로 다른 팀원들이 동일한 프로세스를 다른 단계나 결과로 수행하는 경우</li>
        <li>런북이 시스템 변경 및 자동화와 동기화되지 않아 최신 상태를 유지하지 못하는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>수동 작업의 오류율 감소</li>
        <li>운영이 일관된 방식으로 수행됨</li>
        <li>신규 팀원이 더 빨리 작업을 시작할 수 있음</li>
        <li>런북을 자동화하여 운영 부담 감소 가능</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>Markdown을 사용한 간단한 텍스트 기반 단계별 문서로 시작합니다.</li>
        <li>런북 메타데이터(ID, 설명, 도구, 권한, 작성자, 마지막 업데이트, 에스컬레이션 담당자)를 포함합니다.</li>
        <li>팀원들이 런북을 테스트하여 검증합니다.</li>
        <li>중앙 위치에 게시하고 변경 관리 프로세스에 따라 업데이트합니다.</li>
        <li>조직이 성숙해짐에 따라 AWS Systems Manager Automation을 사용하여 자동화합니다.</li>
        <li>짧고 자주 사용되는 런북에 대한 자동화를 먼저 진행합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Systems Manager Automation — 텍스트 런북을 자동화로 변환하여 이벤트에 대응하여 워크로드에 실행</li>
        <li>AWS Systems Manager Incident Manager — 인시던트 대응 시 런북 실행</li>
      </ul>

      <PageNav />
    </article>
  );
}
