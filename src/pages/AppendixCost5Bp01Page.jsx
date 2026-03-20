import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost5Bp01Page() {
  return (
    <article className="doc-content">
      <h1>COST05-BP01 — 비용에 대한 조직 요구사항 식별</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>서비스 선택 전 비용에 관한 조직의 요구사항을 파악합니다. 비용 목표, 예산 제약, 허용 가능한 트레이드오프를 명확히 합니다.</p>
      <h2>원하는 결과</h2>
      <p>서비스 선택 시 조직의 비용 요구사항이 명확하게 정의되어 있으며 이를 기반으로 의사결정을 내립니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>비용 목표 없이 서비스를 선택합니다.</li>
        <li>조직의 예산 제약을 고려하지 않고 서비스를 선택합니다.</li>
        <li>비용과 성능/기능 간의 트레이드오프를 고려하지 않습니다.</li>
        <li>이해관계자의 비용 요구사항을 수집하지 않습니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>서비스 선택이 조직의 비용 목표와 일치합니다.</li>
        <li>예상치 못한 비용 초과를 방지합니다.</li>
        <li>이해관계자들이 비용 트레이드오프를 이해하고 동의합니다.</li>
        <li>비즈니스 요구사항을 충족하는 비용 효율적인 아키텍처를 구축합니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>요구사항 워크숍: 비즈니스, 기술, 재무 팀과 함께 비용 요구사항을 수집합니다.</li>
        <li>비용 제약 문서화: 예산 한도, 비용 목표, 허용 가능한 ROI를 문서화합니다.</li>
        <li>트레이드오프 분석: 비용 절감과 성능, 가용성, 보안 간의 트레이드오프를 분석합니다.</li>
        <li>승인 프로세스: 비용 요구사항에 대한 이해관계자 승인을 받습니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Pricing Calculator</li>
        <li>AWS Cost Explorer</li>
        <li>AWS Trusted Advisor</li>
      </ul>
      <PageNav />
    </article>
  );
}
