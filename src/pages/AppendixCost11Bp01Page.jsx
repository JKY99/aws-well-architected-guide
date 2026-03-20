import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost11Bp01Page() {
  return (
    <article className="doc-content">
      <h1>COST11-BP01 — 운영 자동화 수행</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 낮음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 낮습니다.</p>
      </div>
      <p>클라우드 운영 비용을 평가하여 관리 작업, 배포, 인적 오류 위험 완화, 컴플라이언스, 기타 운영 활동의 시간과 노력 절감을 자동화를 통해 정량화합니다. 운영 노력과 관련 비용을 평가하고 인적 노력을 최소화하는 관리 작업 자동화를 구현합니다.</p>
      <h2>원하는 결과</h2>
      <p>운영 작업이 자동화되어 인적 노력이 최소화되고 운영 비용이 절감됩니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>수동 운영 프로세스에 의존합니다.</li>
        <li>자동화 가능한 반복 작업을 수동으로 수행합니다.</li>
        <li>인적 오류로 인한 추가 비용이 발생합니다.</li>
        <li>자동화 투자 대비 수익을 평가하지 않습니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>운영 비용이 자동화를 통해 절감됩니다.</li>
        <li>인적 오류가 감소합니다.</li>
        <li>운영 팀이 높은 가치의 작업에 집중할 수 있습니다.</li>
        <li>일관되고 신뢰할 수 있는 운영 프로세스가 구현됩니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>운영 비용 평가: 각 운영 활동의 소요 시간과 관련 비용을 정량화합니다.</li>
        <li>자동화 우선순위 지정: 반복적이고 시간이 많이 소요되는 활동부터 자동화합니다.</li>
        <li>IaC 구현: CloudFormation 또는 Terraform으로 인프라를 코드로 관리합니다.</li>
        <li>운영 자동화 도구 활용: Systems Manager, Config, Lambda 등을 사용하여 운영을 자동화합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Systems Manager</li>
        <li>AWS CloudFormation</li>
        <li>AWS Config</li>
        <li>AWS Lambda</li>
        <li>Amazon EventBridge</li>
        <li>AWS Step Functions</li>
        <li>AWS Managed Services</li>
      </ul>
      <PageNav />
    </article>
  );
}
