import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function SusDefinitionPage() {
  return (
    <article className="doc-content">
      <h1>지속 가능성 — 정의</h1>

      <p>
        지속 가능성 기둥은 클라우드 워크로드 실행의 환경적 영향,
        특히 에너지 소비 및 효율성에 초점을 맞춥니다.
      </p>

      <h2>공동 책임 모델</h2>
      <p>
        AWS는 클라우드의 지속 가능성을 책임지고,
        고객은 클라우드 내 지속 가능성을 책임집니다.
      </p>

      <div className="doc-note">
        <div className="doc-note-title">AWS의 책임 (클라우드의 지속 가능성)</div>
        <p>
          AWS는 데이터 센터, 네트워크 장비, 하드웨어의 에너지 효율성을 최적화합니다.
          재생 가능 에너지 구매, 물 효율성, 폐기물 관리 등 AWS 인프라의
          환경적 영향 최소화를 위해 지속적으로 투자합니다.
        </p>
      </div>

      <div className="doc-note">
        <div className="doc-note-title">고객의 책임 (클라우드 내 지속 가능성)</div>
        <p>
          고객은 아키텍처, 코드, 구성 최적화를 통해 워크로드에서 사용하는
          리소스 양을 줄일 책임이 있습니다.
        </p>
      </div>

      <h2>6가지 모범 사례 영역</h2>
      <ul>
        <li><strong>지역 선택:</strong> 탄소 집약도, 재생 가능 에너지 가용성 고려</li>
        <li><strong>사용자 행동 패턴 정렬:</strong> 수요에 따른 리소스 최적화</li>
        <li><strong>소프트웨어 및 아키텍처 패턴:</strong> 지속 가능한 설계 패턴 채택</li>
        <li><strong>데이터 패턴:</strong> 데이터 수명 주기 최적화</li>
        <li><strong>하드웨어 패턴:</strong> 효율적인 하드웨어 활용</li>
        <li><strong>개발 및 배포 프로세스:</strong> 지속 가능한 개발 문화 조성</li>
      </ul>

      <PageNav />
    </article>
  );
}
