import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost2Bp04Page() {
  return (
    <article className="doc-content">
      <h1>COST02-BP04 — 공유 서비스 비용 할당 방법 결정</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>여러 팀이 공유하는 서비스(네트워킹, 보안, 공통 플랫폼)의 비용을 공정하게 배분하는 방법론을 수립합니다.</p>
      <h2>원하는 결과</h2>
      <p>공유 서비스 비용의 공정하고 투명한 배분 체계를 구축합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>공유 비용을 단일 팀이 부담합니다.</li>
        <li>배분 방법론이 없습니다.</li>
        <li>이의 제기 메커니즘이 없습니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>공정한 비용 분담이 이루어집니다.</li>
        <li>책임감이 향상됩니다.</li>
        <li>공유 서비스 최적화가 촉진됩니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>사용량 기반 배분 방법을 정의합니다.</li>
        <li>AWS Cost Categories로 비용을 그룹화합니다.</li>
        <li>월별 배분 보고서를 발행합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Cost Categories</li>
        <li>AWS Cost and Usage Report</li>
        <li>AWS Cost Explorer</li>
      </ul>
      <PageNav />
    </article>
  );
}
