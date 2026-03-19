import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSus6Bp02Page() {
  return (
    <article className="doc-content">
      <h1>SUS06-BP02 — 개발자를 위한 교육 자원 개발</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>
        개발자들이 지속 가능한 방식으로 개발할 수 있도록 교육과 가이드라인을 제공합니다.
        지속 가능성 지식이 부족하면 에너지 비효율적인 코드, 과도한 리소스 사용, 불필요한 데이터 전송 등이 발생합니다.
        체계적인 교육 프로그램과 내부 가이드라인을 통해 지속 가능한 소프트웨어 개발 역량을 전사적으로 강화하십시오.
      </p>
      <h2>원하는 결과</h2>
      <p>
        모든 개발자가 지속 가능한 소프트웨어 개발 원칙을 이해하고, 코드 작성, 아키텍처 설계,
        인프라 선택 시 에너지 효율과 환경적 영향을 자연스럽게 고려합니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>지속 가능성 교육 없이 개발자가 에너지 효율을 스스로 파악하기를 기대하는 것</li>
        <li>기능 개발에만 집중하고 리소스 효율성 측면의 코드 리뷰를 생략하는 것</li>
        <li>지속 가능성 모범 사례가 문서화되지 않아 팀마다 다른 접근법을 사용하는 것</li>
        <li>일회성 교육으로 끝내고 지속적인 학습 기회를 제공하지 않는 것</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>개발 초기 단계부터 에너지 효율적인 설계로 사후 수정 비용 절감</li>
        <li>조직 전반의 지속 가능성 역량 강화로 일관된 고품질 코드 작성</li>
        <li>지속 가능성을 가치로 여기는 인재 유치 및 유지에 기여</li>
        <li>AWS 지속 가능성 서비스와 기능을 효과적으로 활용하는 팀 역량 향상</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS Well-Architected Framework 지속 가능성 기둥 기반의 내부 교육 자료 개발</li>
        <li>코드 리뷰 체크리스트에 리소스 효율성 및 에너지 소비 항목 추가</li>
        <li>지속 가능한 소프트웨어 개발 패턴 및 안티패턴을 담은 내부 위키 구축</li>
        <li>AWS re:Invent, AWS Skill Builder 등 외부 교육 참여를 장려하고 비용 지원</li>
        <li>지속 가능성 챔피언 프로그램을 운영하여 팀 내 전문가를 육성하고 지식 전파</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Skill Builder — AWS 지속 가능성 관련 온라인 학습 플랫폼</li>
        <li>AWS Well-Architected Labs — 지속 가능성 기둥 실습 환경</li>
        <li>AWS Sustainability Blog — 최신 지속 가능성 모범 사례 및 사례 연구</li>
        <li>AWS Architecture Center — 지속 가능한 아키텍처 참조 설계</li>
        <li>AWS Training and Certification — 공식 AWS 교육 프로그램</li>
      </ul>
      <PageNav />
    </article>
  );
}
