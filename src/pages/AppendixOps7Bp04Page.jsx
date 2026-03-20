import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps7Bp04Page() {
  return (
    <article className="doc-content">
      <h1>OPS07-BP04 — 문제 조사를 위한 플레이북 사용</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간 수준입니다.</p>
      </div>

      <p>
        조직은 일반적인 인시던트에 대한 플레이북을 보유합니다.
        플레이북은 중앙 위치에 저장되고 팀원들이 접근할 수 있으며 자주 업데이트됩니다.
        알려진 근본 원인에 대해서는 동반 런북이 구축됩니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        조직이 일반적인 인시던트에 대한 플레이북을 보유합니다.
        플레이북이 중앙 위치에 저장되고 팀원들이 접근할 수 있습니다.
        플레이북이 자주 업데이트됩니다.
        알려진 근본 원인에 대해 동반 런북이 구축되어 복구 시간을 단축합니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>인시던트를 조사하는 표준 방법이 없는 경우</li>
        <li>팀원들이 실패한 배포를 해결하기 위해 근육 기억이나 제도적 지식에 의존하는 경우</li>
        <li>신규 팀원들이 시행착오를 통해 문제 조사 방법을 배우는 경우</li>
        <li>문제 조사를 위한 모범 사례가 팀 간에 공유되지 않는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>플레이북이 인시던트 완화 노력을 강화</li>
        <li>서로 다른 팀원들이 동일한 플레이북을 사용하여 일관된 방식으로 근본 원인을 식별</li>
        <li>알려진 근본 원인에 대한 런북을 개발하여 복구 시간 단축</li>
        <li>팀원들이 더 빨리 기여를 시작할 수 있음</li>
        <li>반복 가능한 플레이북으로 프로세스 확장 가능</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>중앙에 저장된 텍스트 기반 플레이북으로 시작한 다음 점진적으로 자동화합니다.</li>
        <li>플레이북을 위한 버전 관리 저장소를 만듭니다.</li>
        <li>낮은 위험의 일반적인 인시던트를 식별합니다.</li>
        <li>Markdown 템플릿을 사용하여 플레이북을 문서화합니다.</li>
        <li>팀원들과 함께 검증하고 플레이북 라이브러리를 성장시킵니다.</li>
        <li>성숙도가 높아짐에 따라 AWS Systems Manager Automation을 사용하여 자동화합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Systems Manager Automation — 텍스트 플레이북을 자동화로 변환</li>
        <li>AWS Systems Manager Incident Manager — 인시던트 분류, 이해관계자 커뮤니케이션, 협업을 위한 단일 인터페이스</li>
      </ul>

      <PageNav />
    </article>
  );
}
