import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost10Bp02Page() {
  return (
    <article className="doc-content">
      <h1>COST10-BP02 — 정기적으로 이 워크로드를 검토 및 분석</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>워크로드를 정기적으로 검토하면 새로운 AWS 서비스나 기능이 기존 구현보다 더 비용 효율적인지 평가하고 지속적으로 아키텍처를 개선할 수 있습니다.</p>
      <h2>원하는 결과</h2>
      <p>워크로드가 정기적으로 검토되어 최신 AWS 서비스를 활용하는 비용 최적화된 아키텍처를 유지합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>워크로드를 초기 배포 후 재평가하지 않습니다.</li>
        <li>더 비용 효율적인 신규 서비스가 출시되어도 기존 구현을 유지합니다.</li>
        <li>비용 최적화를 일회성 프로젝트로 취급합니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>지속적인 비용 최적화를 통해 장기적인 비용 절감 효과를 거둡니다.</li>
        <li>기술 부채가 축적되지 않습니다.</li>
        <li>AWS 플랫폼의 발전에 따른 혜택을 지속적으로 누릴 수 있습니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS Well-Architected Framework 검토를 연간 또는 주요 변경 사항 발생 시 수행합니다.</li>
        <li>AWS Trusted Advisor의 비용 최적화 권장 사항을 정기적으로 검토하고 실행합니다.</li>
        <li>AWS Cost Explorer의 Rightsizing 추천을 검토하고 적용합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Well-Architected Tool</li>
        <li>AWS Trusted Advisor</li>
        <li>AWS Compute Optimizer</li>
        <li>AWS Cost Explorer Rightsizing</li>
      </ul>
      <PageNav />
    </article>
  );
}
