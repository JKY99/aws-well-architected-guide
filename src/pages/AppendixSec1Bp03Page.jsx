import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec1Bp03Page() {
  return (
    <article className="doc-content">
      <h1>SEC01-BP03 — 제어 목표 식별 및 검증</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 규정 준수 요건과 위협으로부터 워크로드를 보호하는 데 필요한 제어가 부재하여 보안 위험에 노출됩니다.</p>
      </div>
      <p>
        규정 준수 요건과 위협 모델에서 식별된 위험을 기반으로 워크로드에 적용할 제어 목표와 통제를 도출하고 검증합니다. 제어 목표와 통제를 지속적으로 검증하면 위험 완화의 효과성을 측정할 수 있습니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        비즈니스의 보안 제어 목표가 명확하게 정의되고 규정 준수 요건에 부합합니다. 자동화와 정책을 통해 통제가 구현·적용되며, 목표 달성 효과성이 지속적으로 평가됩니다. 특정 시점과 기간에 걸친 효과성 증거를 감사자에게 쉽게 보고할 수 있습니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>비즈니스에 대한 규제 요건, 시장 기대치, 업계 표준을 충분히 이해하지 못함</li>
        <li>사이버 보안 프레임워크와 제어 목표가 비즈니스 요건과 불일치</li>
        <li>통제 구현이 측정 가능한 방식으로 제어 목표와 강하게 연결되지 않음</li>
        <li>자동화를 사용하여 통제 효과성을 보고하지 않음</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>비즈니스 요건에 맞는 사이버 보안 프레임워크 선택 및 정렬</li>
        <li>AWS Artifact를 통한 AWS 책임 범위 및 조직의 남은 책임 파악</li>
        <li>SCP, 리소스 정책, 역할 신뢰 정책을 통한 예방적 제어 구현</li>
        <li>AWS Config 규칙을 통한 탐지적 제어 모니터링 및 보고</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>비즈니스 요건에 맞는 사이버 보안 프레임워크(AICPA SOC 2, HITRUST, PCI-DSS, ISO 27001, NIST SP 800-53 등)를 평가하고 정렬합니다.</li>
        <li>AWS Artifact를 사용하여 AWS의 책임 범위와 조직의 남은 책임을 설명하는 문서를 확인합니다.</li>
        <li>SCP, 리소스 정책, 역할 신뢰 정책을 통해 예방적 제어를 구현합니다.</li>
        <li>AWS Security Hub CSPM 표준(AWS FSBP, CIS AWS Foundations Benchmark 등)을 배포하여 규정 준수를 모니터링합니다.</li>
        <li>추가로 필요한 곳에 AWS Config 규정 준수 패키지를 보완합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Artifact — 프레임워크 문서 및 규정 준수 보고서</li>
        <li>서비스 제어 정책(SCP) — 조직 수준의 예방적 제어</li>
        <li>AWS Config — 규정 준수 모니터링 및 규칙 적용</li>
        <li>AWS Security Hub — CSPM 표준 및 규정 준수 표준 관리</li>
        <li>AWS Config 규정 준수 패키지 — 프레임워크에 맞는 사전 정의 규칙 세트</li>
      </ul>
      <PageNav />
    </article>
  );
}
