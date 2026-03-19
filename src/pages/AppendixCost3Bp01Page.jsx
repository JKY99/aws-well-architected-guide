import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost3Bp01Page() {
  return (
    <article className="doc-content">
      <h1>COST03-BP01 — 서비스 선택 비용 분석</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>요구사항을 충족하는 여러 AWS 서비스 옵션의 비용을 비교하여 가장 비용 효율적인 서비스를 선택합니다.</p>
      <h2>원하는 결과</h2>
      <p>동일한 요구사항 충족 시 가장 비용 효율적인 AWS 서비스를 선택합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>비용 비교 없이 친숙한 서비스를 선택합니다.</li>
        <li>관리형 서비스의 TCO를 고려하지 않습니다.</li>
        <li>장기적인 비용을 미고려합니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>초기부터 비용을 최적화합니다.</li>
        <li>불필요한 지출을 방지합니다.</li>
        <li>올바른 아키텍처를 선택합니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS Pricing Calculator로 서비스 비용을 비교합니다.</li>
        <li>관리형 서비스의 TCO를 분석합니다.</li>
        <li>서버리스 vs 서버 비용을 비교합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Pricing Calculator</li>
        <li>AWS Cost Explorer</li>
        <li>AWS Well-Architected Tool</li>
      </ul>
      <PageNav />
    </article>
  );
}
