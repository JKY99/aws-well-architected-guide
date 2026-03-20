import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost10Bp01Page() {
  return (
    <article className="doc-content">
      <h1>COST10-BP01 — 워크로드 검토 프로세스 개발</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>새로운 AWS 서비스 및 기능을 정기적으로 검토하고 기존 워크로드에 적용 가능성을 평가하는 공식 프로세스를 수립하면 지속적인 비용 최적화가 가능합니다.</p>
      <h2>원하는 결과</h2>
      <p>조직이 새로운 AWS 서비스를 체계적으로 평가하고, 비용 절감 또는 효율성 향상 기회를 신속하게 적용합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>새로운 AWS 서비스를 검토하는 공식 프로세스가 없습니다.</li>
        <li>기존 아키텍처를 정기적으로 재평가하지 않습니다.</li>
        <li>새로운 서비스를 인지해도 기존 방식을 유지합니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>새로운 AWS 서비스를 통한 비용 절감 기회를 신속하게 포착합니다.</li>
        <li>기술 부채가 줄어들고 최신 아키텍처가 유지됩니다.</li>
        <li>경쟁사 대비 더 빠른 혁신이 가능합니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>분기별 아키텍처 검토 회의를 정례화하고 새로운 AWS 서비스 평가를 의제에 포함합니다.</li>
        <li>AWS Well-Architected Tool을 사용하여 워크로드를 정기적으로 검토합니다.</li>
        <li>새로운 서비스 도입 시 개념 증명(PoC)을 위한 샌드박스 환경을 활용합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Well-Architected Tool</li>
        <li>AWS Trusted Advisor</li>
        <li>AWS Cost Explorer</li>
      </ul>
      <PageNav />
    </article>
  );
}
