import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost11Bp01Page() {
  return (
    <article className="doc-content">
      <h1>COST11-BP01 — 운영 자동화 수행</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>반복적인 운영 작업을 자동화하면 인력 비용을 절감하고, 오류를 줄이며, 팀이 더 가치 있는 활동에 집중할 수 있습니다. 자동화는 클라우드 운영 비용(노력)을 최소화하는 핵심 전략입니다.</p>
      <h2>원하는 결과</h2>
      <p>반복적이고 수동적인 운영 작업이 자동화되어, 운영 팀이 비즈니스 가치를 창출하는 혁신 활동에 더 많은 시간을 투자합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>배포, 패치, 백업 등 반복적인 작업을 수동으로 수행합니다.</li>
        <li>자동화 도구 도입 비용이 높다고 판단하여 수동 프로세스를 유지합니다.</li>
        <li>자동화 스크립트가 문서화되지 않고 특정 개인에 의존합니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>운영 인력 비용이 절감됩니다.</li>
        <li>인적 오류가 줄어 운영 신뢰성이 향상됩니다.</li>
        <li>운영 팀이 혁신적인 업무에 집중할 수 있습니다.</li>
        <li>일관된 프로세스 실행으로 컴플라이언스가 향상됩니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS Systems Manager Automation을 사용하여 일반적인 운영 작업(패치, 백업, 인스턴스 관리)을 자동화합니다.</li>
        <li>AWS Lambda와 Amazon EventBridge를 사용하여 이벤트 기반 자동화 워크플로우를 구축합니다.</li>
        <li>Infrastructure as Code(IaC)를 도입하여 인프라 프로비저닝과 변경을 자동화합니다.</li>
        <li>CI/CD 파이프라인을 구축하여 소프트웨어 배포 프로세스를 자동화합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Systems Manager</li>
        <li>AWS Lambda</li>
        <li>Amazon EventBridge</li>
        <li>AWS CloudFormation</li>
        <li>AWS CodePipeline</li>
      </ul>
      <PageNav />
    </article>
  );
}
