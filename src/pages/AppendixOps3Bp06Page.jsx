import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps3Bp06Page() {
  return (
    <article className="doc-content">
      <h1>OPS03-BP06 — 팀 구성원이 기술 역량을 유지하고 발전시키도록 장려</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간 수준입니다.</p>
      </div>

      <p>
        조직은 기술 격차를 지속적으로 평가하고 구조화된 예산과 투자로 이를 해소합니다.
        팀은 인증 취득, 지식 공유 프로그램, 최신 교육 시스템 등을 통해 팀원들의 역량 향상을 장려합니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        조직이 기술 격차를 지속적으로 평가하고 구조화된 예산과 투자로 이를 해소합니다.
        팀은 업스킬링 활동(산업 인증 취득, 런치 앤 런, 이머전 데이, 해커톤, 게임데이 등)으로 팀원들을 장려합니다.
        신규 입사자 온보딩과 교차 교육을 위한 최신 지식 시스템이 유지됩니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>구조화된 교육 프로그램과 예산이 없어 팀원들이 기술 발전 속도를 따라가지 못하고 이직률이 높아지는 경우</li>
        <li>클라우드 마이그레이션 시 업스킬링 없이 팀들이 레거시하고 비효율적인 클라우드 관리에 과부하가 걸리는 경우</li>
        <li>교육 기회가 특정 팀원에게만 집중되고 조직 전체로 확산되지 않는 경우</li>
        <li>기술 역량 발전이 성과 평가와 연계되지 않아 동기부여가 부족한 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>클라우드 도입과 최적화 가속화 및 확장</li>
        <li>혁신 주도 및 이벤트 처리를 위한 운영 능력 구축</li>
        <li>팀이 모범 사례 구현과 발전에 의식적으로 투자</li>
        <li>높은 팀 사기와 직원 만족도 증가</li>
        <li>중요한 제도적 지식을 보유한 팀원 이탈 위험 감소</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>구조화된 클라우드 옹호 프로그램(AWS Skills Guild 등)을 활용하여 컨설팅 교육을 제공합니다.</li>
        <li>전용 시간, 교육 자료, 컨퍼런스, 멘토십 프로그램 등 교육 리소스를 제공합니다.</li>
        <li>AWS re:Post와 같은 커뮤니티 지식을 활용하여 전문 기술 리소스를 장려합니다.</li>
        <li>위키, 런북, AWS re:Post Private를 활용하여 지식 저장소를 구축합니다.</li>
        <li>팀 간 순환 근무와 기술 공유 기회를 통해 교육과 팀 간 교류를 활성화합니다.</li>
        <li>인증 취득 및 유지를 지원하고 산업 인증을 장려합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Training and Certification — 공식 AWS 교육 및 자격증 프로그램</li>
        <li>AWS Skills Guild — 팀 교육 컨설팅 프로그램</li>
        <li>AWS Well-Architected Labs — 실습 기반 학습 환경</li>
        <li>AWS re:Post — 커뮤니티 지식 공유 플랫폼</li>
        <li>AWS re:Post Private — 조직 내부 지식 서비스</li>
      </ul>

      <PageNav />
    </article>
  );
}
