import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost2Bp01Page() {
  return (
    <article className="doc-content">
      <h1>COST02-BP01 — 조직 요구사항에 기반한 정책 개발</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>조직 요구사항을 기반으로 리소스 관리 방법을 정의하는 정책을 개발하고 주기적으로 검토합니다. 정책은 리소스의 생성, 수정, 폐기에 걸친 비용 측면을 포함해야 합니다.</p>
      <h2>원하는 결과</h2>
      <p>클라우드 사용과 리소스 관리에 관한 명확한 정책이 수립되어 있으며, 이는 비용 효율적인 운영의 기반이 됩니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>정책 없이 클라우드 리소스를 임의로 생성합니다.</li>
        <li>정책이 모호하거나 해석이 불분명합니다.</li>
        <li>정책이 정기적으로 검토되거나 업데이트되지 않습니다.</li>
        <li>정책 준수 여부를 모니터링하지 않습니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>클라우드 사용이 조직 요구사항에 부합합니다.</li>
        <li>불필요한 리소스 생성이 방지됩니다.</li>
        <li>비용 귀속과 책임이 명확해집니다.</li>
        <li>규정 준수와 거버넌스가 향상됩니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>이해관계자 협의: 정책 개발을 위해 클라우드 비즈니스 오피스, 엔지니어, 의사결정자와 협력합니다.</li>
        <li>정책 문서화: 명확하고 간결한 정책을 작성하여 쉽게 이해하고 구현할 수 있게 합니다.</li>
        <li>온보딩 교육: 신규 팀원에게 클라우드 거버넌스 정책 교육을 의무화합니다.</li>
        <li>컴플라이언스 도구 활용: AWS Config 규칙을 통해 정책 준수를 자동으로 확인합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Config</li>
        <li>AWS Organizations</li>
        <li>Service Control Policies (SCP)</li>
        <li>AWS Service Catalog</li>
        <li>AWS Lambda</li>
      </ul>
      <PageNav />
    </article>
  );
}
