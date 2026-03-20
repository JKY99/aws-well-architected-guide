import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost1Bp04Page() {
  return (
    <article className="doc-content">
      <h1>COST01-BP04 — 조직 프로세스에 비용 인식 구현</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>비용 인식을 기존 조직 프로세스와 문화에 통합합니다. 모든 팀이 클라우드 사용과 관련된 비용을 이해하고 고려하도록 합니다.</p>
      <h2>원하는 결과</h2>
      <p>모든 팀이 클라우드 사용 결정을 내릴 때 비용을 자동으로 고려하는 비용 인식 조직을 구축합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>비용 고려 없이 새로운 리소스를 프로비저닝합니다.</li>
        <li>비용 검토가 아키텍처 리뷰 프로세스에 포함되지 않습니다.</li>
        <li>개발 주기에 비용 최적화가 통합되지 않습니다.</li>
        <li>팀이 자신의 클라우드 지출에 대한 가시성이 없습니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>팀이 비용을 고려한 의사결정을 내립니다.</li>
        <li>클라우드 리소스 낭비가 감소합니다.</li>
        <li>비용 책임이 분산됩니다.</li>
        <li>전체 클라우드 지출이 최적화됩니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>온보딩 교육: 새 팀원에게 클라우드 비용 인식 교육을 실시합니다.</li>
        <li>아키텍처 리뷰에 비용 포함: 설계 검토 시 비용 영향을 필수 항목으로 포함합니다.</li>
        <li>비용 가시성 대시보드: 팀에게 자신의 클라우드 지출에 대한 실시간 가시성을 제공합니다.</li>
        <li>비용 태깅 정책: 모든 리소스에 일관된 태그를 적용하여 비용 귀속을 가능하게 합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Cost Explorer</li>
        <li>AWS Budgets</li>
        <li>AWS Cost Categories</li>
        <li>AWS Resource Tagging</li>
      </ul>
      <PageNav />
    </article>
  );
}
