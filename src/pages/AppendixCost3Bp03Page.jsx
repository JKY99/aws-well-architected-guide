import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost3Bp03Page() {
  return (
    <article className="doc-content">
      <h1>COST03-BP03 — 비용 귀속 범주 식별</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>비용 귀속을 위한 범주를 식별하여 정의합니다. 조직의 구조와 요구사항에 맞는 비용 귀속 체계를 수립합니다.</p>
      <h2>원하는 결과</h2>
      <p>명확한 비용 귀속 범주가 정의되어 있어 비용이 적절한 비즈니스 단위에 할당됩니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>비용 귀속 기준이 명확하지 않습니다.</li>
        <li>공유 서비스 비용이 적절히 배분되지 않습니다.</li>
        <li>비용 귀속이 일관성 없이 수행됩니다.</li>
        <li>비즈니스 단위 간 비용 공정성 문제가 발생합니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>비용이 적절한 비즈니스 단위에 공정하게 귀속됩니다.</li>
        <li>비용 귀속의 투명성이 향상됩니다.</li>
        <li>비즈니스 단위별 실제 비용 현황을 파악합니다.</li>
        <li>차지백 및 쇼백 메커니즘의 기반이 마련됩니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>귀속 범주 정의: 비즈니스 단위, 프로젝트, 환경, 팀 등 조직에 맞는 범주를 정의합니다.</li>
        <li>공유 비용 배분 방식 결정: 공유 인프라 비용을 어떻게 배분할지 결정합니다(균등 분할, 사용량 비례 등).</li>
        <li>태그 분류 체계 구축: 정의된 범주와 일치하는 태그 구조를 만듭니다.</li>
        <li>귀속 정책 문서화: 비용 귀속 방법론을 문서화하여 일관성을 확보합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Cost Categories</li>
        <li>Cost Allocation Tags</li>
        <li>AWS Cost Explorer</li>
        <li>AWS Organizations</li>
      </ul>
      <PageNav />
    </article>
  );
}
