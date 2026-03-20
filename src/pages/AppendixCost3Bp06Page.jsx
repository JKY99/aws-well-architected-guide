import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost3Bp06Page() {
  return (
    <article className="doc-content">
      <h1>COST03-BP06 — 워크로드 지표 기반 비용 할당</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 낮음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 낮습니다.</p>
      </div>
      <p>워크로드 지표를 사용하여 공유 리소스의 비용을 적절히 할당합니다. 사용량에 비례한 공정한 비용 배분을 구현합니다.</p>
      <h2>원하는 결과</h2>
      <p>공유 리소스 비용이 실제 사용량에 기반하여 공정하게 배분됩니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>공유 리소스 비용이 균등하게 나뉘어 실제 사용량을 반영하지 않습니다.</li>
        <li>공유 서비스 비용이 미할당 상태로 남습니다.</li>
        <li>비용 귀속 방법론이 없거나 불일치합니다.</li>
        <li>팀이 자신의 실제 사용량에 대한 가시성이 없습니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>사용량에 비례한 공정한 비용 배분이 가능합니다.</li>
        <li>팀이 자신의 실제 클라우드 사용에 대한 책임을 집니다.</li>
        <li>비용 귀속의 정확성이 향상됩니다.</li>
        <li>클라우드 자원 낭비에 대한 인센티브가 감소합니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>워크로드 메트릭 수집: CloudWatch를 사용하여 팀/서비스별 사용량 지표를 수집합니다.</li>
        <li>비용 배분 공식 정의: 사용량 지표에 기반한 비용 배분 공식을 정의합니다.</li>
        <li>자동화된 보고: 정기적으로 배분된 비용 보고서를 생성하는 프로세스를 자동화합니다.</li>
        <li>AWS Cost Categories: 사용자 정의 비용 분류를 통해 비용 배분을 구현합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Cost Categories</li>
        <li>Amazon CloudWatch</li>
        <li>AWS Cost and Usage Report</li>
        <li>Amazon QuickSight</li>
      </ul>
      <PageNav />
    </article>
  );
}
