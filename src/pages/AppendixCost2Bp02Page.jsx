import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost2Bp02Page() {
  return (
    <article className="doc-content">
      <h1>COST02-BP02 — AWS 계정 구조를 통한 비용 구분</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>AWS Organizations를 활용하여 환경(개발/스테이징/프로덕션)이나 비즈니스 단위별로 별도 계정을 사용하여 비용을 명확히 구분합니다.</p>
      <h2>원하는 결과</h2>
      <p>계정 구조를 통한 명확한 비용 경계와 청구 분리를 실현합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>단일 계정에 모든 워크로드를 운영합니다.</li>
        <li>환경 간 비용이 혼재합니다.</li>
        <li>비용 구분이 불가능합니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>비용이 격리됩니다.</li>
        <li>보안이 강화됩니다.</li>
        <li>청구가 명확해집니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS Organizations로 계정 구조를 설계합니다.</li>
        <li>Consolidated Billing을 활용합니다.</li>
        <li>Service Control Policy로 거버넌스를 적용합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Organizations</li>
        <li>AWS Control Tower</li>
        <li>AWS Cost and Usage Report</li>
      </ul>
      <PageNav />
    </article>
  );
}
