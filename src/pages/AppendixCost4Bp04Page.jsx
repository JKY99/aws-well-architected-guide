import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost4Bp04Page() {
  return (
    <article className="doc-content">
      <h1>COST04-BP04 — 리소스 자동 폐기</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 낮음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 낮습니다.</p>
      </div>
      <p>수명 주기 정책과 자동화를 사용하여 리소스를 자동으로 폐기합니다. 인적 개입 없이 불필요한 리소스를 자동으로 제거합니다.</p>
      <h2>원하는 결과</h2>
      <p>자동화된 폐기 메커니즘이 구현되어 있어 지속적으로 불필요한 리소스를 제거합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>모든 리소스 폐기에 수동 개입이 필요합니다.</li>
        <li>자동화 없이 대규모 리소스 폐기가 비효율적입니다.</li>
        <li>인적 오류로 인해 폐기가 지연됩니다.</li>
        <li>폐기 자동화로 절약할 수 있는 비용을 낭비합니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>인적 개입 없이 불필요한 리소스가 자동으로 제거됩니다.</li>
        <li>비용 절감이 지속적으로 이루어집니다.</li>
        <li>운영 부담이 감소합니다.</li>
        <li>리소스 폐기의 일관성이 향상됩니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>수명 주기 정책 구성: S3 수명 주기 정책, EBS 스냅샷 정책 등을 자동화합니다.</li>
        <li>Lambda 함수 활용: 사용하지 않는 리소스를 자동으로 감지하고 중지/삭제하는 Lambda 함수를 구현합니다.</li>
        <li>AWS Config 규칙: 폐기 기준을 충족하는 리소스를 자동으로 식별하는 Config 규칙을 만듭니다.</li>
        <li>스케줄 기반 폐기: EventBridge로 정기적인 정리 작업을 스케줄링합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Lambda</li>
        <li>Amazon EventBridge</li>
        <li>AWS Config</li>
        <li>Amazon S3 Lifecycle Policies</li>
        <li>AWS Systems Manager Automation</li>
      </ul>
      <PageNav />
    </article>
  );
}
