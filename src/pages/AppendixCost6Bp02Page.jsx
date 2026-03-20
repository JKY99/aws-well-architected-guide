import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost6Bp02Page() {
  return (
    <article className="doc-content">
      <h1>COST06-BP02 — 데이터 기반 리소스 유형, 크기, 수량 선택</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>측정된 데이터와 분석에 기반하여 리소스 유형, 크기, 수량을 선택합니다. 추측이 아닌 실제 데이터로 의사결정을 내립니다.</p>
      <h2>원하는 결과</h2>
      <p>리소스 선택이 실제 사용 데이터에 기반하여 이루어집니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>추측이나 경험에만 의존하여 리소스를 선택합니다.</li>
        <li>사용량 데이터 없이 최대 용량으로 프로비저닝합니다.</li>
        <li>리소스 선택을 정기적으로 재검토하지 않습니다.</li>
        <li>AWS Compute Optimizer의 권고사항을 무시합니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>실제 필요에 맞는 리소스가 선택되어 비용이 절감됩니다.</li>
        <li>과다 및 과소 프로비저닝 모두 방지됩니다.</li>
        <li>워크로드 성능과 비용 효율성이 동시에 최적화됩니다.</li>
        <li>리소스 선택의 정확성이 지속적으로 향상됩니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>사용량 모니터링: CloudWatch 메트릭으로 CPU, 메모리, 네트워크 사용률을 지속적으로 모니터링합니다.</li>
        <li>AWS Compute Optimizer 활용: EC2, Lambda, EBS 등에 대한 최적화 권고사항을 검토합니다.</li>
        <li>비용 효율성 분석: 비용 대비 성능 지표를 분석하여 최적의 리소스를 선택합니다.</li>
        <li>정기적 재평가: 워크로드 특성 변화에 따라 리소스 선택을 정기적으로 재평가합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Compute Optimizer</li>
        <li>Amazon CloudWatch</li>
        <li>AWS Cost Explorer</li>
        <li>Amazon EC2 Instance Types</li>
      </ul>
      <PageNav />
    </article>
  );
}
