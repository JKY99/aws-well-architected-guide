import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost2Bp03Page() {
  return (
    <article className="doc-content">
      <h1>COST02-BP03 — 계정 구조 구현</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>워크로드와 조직 구조에 맞는 AWS 계정 구조를 구현합니다. 적절한 계정 구조는 비용 귀속, 거버넌스, 보안의 기초가 됩니다.</p>
      <h2>원하는 결과</h2>
      <p>비용 귀속과 거버넌스를 지원하는 명확한 AWS 계정 구조가 구축되어 있습니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>단일 AWS 계정에서 모든 워크로드를 실행합니다.</li>
        <li>환경(개발, 스테이징, 프로덕션)이 계정 수준에서 분리되지 않습니다.</li>
        <li>비용 귀속을 위한 계정 구조가 없습니다.</li>
        <li>계정 수가 너무 많거나 관리가 복잡합니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>비용이 팀, 프로젝트, 환경별로 명확하게 귀속됩니다.</li>
        <li>보안과 거버넌스가 계정 수준에서 강화됩니다.</li>
        <li>비용 최적화 기회를 계정 수준에서 쉽게 식별합니다.</li>
        <li>예산 관리와 청구 분리가 용이합니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS Organizations 활용: 중앙 집중식 계정 관리와 통합 결제를 구현합니다.</li>
        <li>OU 구조 설계: 비즈니스 단위, 환경, 기능에 따른 조직 단위(OU)를 설계합니다.</li>
        <li>계정 명명 규칙: 일관된 계정 명명 규칙을 적용합니다.</li>
        <li>계정 분리 전략: 보안, 로그, 공유 서비스, 워크로드 계정을 분리합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Organizations</li>
        <li>AWS Control Tower</li>
        <li>AWS Service Catalog</li>
        <li>AWS Single Sign-On</li>
      </ul>
      <PageNav />
    </article>
  );
}
