import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost1Bp04Page() {
  return (
    <article className="doc-content">
      <h1>COST01-BP04 — 비용 인식 프로세스 구현</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>개발부터 운영까지 모든 단계에서 비용을 고려하는 문화와 프로세스를 구현하여 "설계부터 비용 고려(Cost by Design)"를 실천합니다.</p>
      <h2>원하는 결과</h2>
      <p>개발 라이프사이클 전반에 비용 의식이 내재화된 조직 문화를 형성합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>구축 후에야 비용을 고려합니다.</li>
        <li>비용 리뷰 없이 배포합니다.</li>
        <li>비용 교육이 없습니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>아키텍처 단계에서 비용 최적화가 가능합니다.</li>
        <li>예상치 못한 청구서 충격을 방지합니다.</li>
        <li>지속적인 개선이 이루어집니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>설계 검토에 비용 체크리스트를 포함합니다.</li>
        <li>코드 리뷰 시 비용을 고려합니다.</li>
        <li>AWS Well-Architected Review를 활용합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Well-Architected Tool</li>
        <li>AWS Pricing Calculator</li>
        <li>AWS Cost Explorer</li>
      </ul>
      <PageNav />
    </article>
  );
}
