import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps11Bp04Page() {
  return (
    <article className="doc-content">
      <h1>OPS11-BP04 — 지식 관리 수행</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>

      <p>
        팀원들이 적시에 정확한 정보에 접근할 수 있습니다.
        정보가 검색 가능하며 정보를 추가, 업데이트, 아카이브하는 메커니즘이 있습니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        팀원들이 적시에 정확한 정보에 접근할 수 있습니다.
        정보가 검색 가능합니다.
        정보를 추가, 업데이트, 아카이브하는 메커니즘이 있습니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>중앙화된 지식 저장소가 없어 팀원들이 로컬 컴퓨터에서 자체 메모를 관리하는 경우</li>
        <li>자체 호스팅 위키가 있지만 정보 관리 메커니즘이 없어 오래된 정보가 쌓이는 경우</li>
        <li>정보 추가 요청 프로세스가 없어 임시로 추가된 내용이 중요한 단계를 누락하여 장애를 유발하는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>자유롭게 공유되는 정보를 통해 팀원들이 역량을 갖출 수 있음</li>
        <li>최신의 검색 가능한 문서로 신규 팀원의 온보딩 시간 단축</li>
        <li>정보가 적시에 정확하고 실행 가능한 상태로 유지됨</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>이해관계자 합의를 통해 지식 저장을 위한 콘텐츠 관리 시스템을 식별합니다(자체 호스팅 위키 또는 버전 관리 저장소).</li>
        <li>정보 추가, 업데이트, 아카이브를 위한 런북을 개발하고 팀에 교육합니다.</li>
        <li>저장할 지식을 식별합니다(런북과 플레이북 같은 일상 활동부터 시작).</li>
        <li>오래된 정보를 정기적으로 검토하고 아카이브하거나 업데이트합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS re:Post Private — 조직 내부 지식 공유 서비스</li>
        <li>AWS Systems Manager — 자동화된 런북 저장 및 관리</li>
        <li>Amazon S3 — 문서 저장 및 버전 관리</li>
      </ul>

      <PageNav />
    </article>
  );
}
