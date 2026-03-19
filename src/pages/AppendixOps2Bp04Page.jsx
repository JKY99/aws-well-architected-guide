import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps2Bp04Page() {
  return (
    <article className="doc-content">
      <h1>OPS02-BP04 — 팀 구성원의 책임 인식</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>

      <p>
        모든 팀 구성원이 자신의 역할과 책임을 명확히 인식하도록 합니다.
        역할 혼동은 운영 공백, 중복 작업, 장애 시 대응 지연을 유발합니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        각 팀 구성원이 자신이 책임지는 리소스, 프로세스, 활동을 알고 있습니다.
        RACI 매트릭스 또는 유사한 도구로 역할과 책임이 명확히 정의되어 있습니다.
        신규 팀원도 온보딩을 통해 자신의 책임을 빠르게 이해합니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>장애 시 "그건 제 책임이 아닌 줄 알았어요"라는 상황이 발생하는 경우</li>
        <li>역할 정의 없이 팀을 구성하여 업무가 중복되거나 공백이 생기는 경우</li>
        <li>팀 구조 변경 시 역할 재정의를 업데이트하지 않는 경우</li>
        <li>구두로만 역할을 전달하여 새 팀원이 이해하기 어려운 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>장애 시 신속하고 명확한 역할 기반 대응</li>
        <li>업무 중복 제거로 팀 효율성 향상</li>
        <li>신규 팀원의 빠른 생산성 달성</li>
        <li>팀 간 협업 효율성 향상</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>RACI(Responsible, Accountable, Consulted, Informed) 매트릭스를 작성하여 역할을 명확히 합니다.</li>
        <li>온보딩 체크리스트에 역할과 책임 설명 세션을 포함합니다.</li>
        <li>조직도와 함께 책임 매트릭스를 팀 Wiki에 게시합니다.</li>
        <li>분기별 역할 검토를 통해 팀 변화를 반영합니다.</li>
        <li>비상 연락망과 에스컬레이션 경로를 문서화하고 팀에 공유합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS IAM — 역할 기반 접근 제어로 책임 경계 기술적 구현</li>
        <li>AWS Organizations — 계정 단위 책임 분리</li>
        <li>AWS Single Sign-On — 역할별 접근 권한 중앙 관리</li>
      </ul>

      <PageNav />
    </article>
  );
}
