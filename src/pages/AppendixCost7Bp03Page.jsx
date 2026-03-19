import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost7Bp03Page() {
  return (
    <article className="doc-content">
      <h1>COST07-BP03 — 클라우드 운영 검토 및 자동화</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>
        반복적인 운영 작업을 자동화하여 인력 비용을 절감하고 효율성을 높입니다.
        수동 운영 작업을 식별하고 자동화하면 운영 오버헤드를 줄이면서 더 높은 가치의 활동에
        집중할 수 있습니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        반복적이고 수동적인 운영 작업이 자동화되어 인력 비용이 절감됩니다.
        운영팀이 전략적이고 고부가가치 활동에 집중할 수 있는 환경이 구축됩니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>수동 프로세스를 자동화하지 않고 반복 수행</li>
        <li>자동화 투자를 비용 항목으로만 보고 ROI를 계산하지 않음</li>
        <li>자동화 스크립트의 유지보수 비용을 간과</li>
        <li>자동화 실패 시 알림 및 롤백 절차 미비</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>반복적인 작업에 소요되는 인력 비용 절감</li>
        <li>운영 오류 감소로 인한 장애 비용 절감</li>
        <li>운영팀의 혁신 활동을 위한 시간 확보</li>
        <li>일관된 운영 프로세스로 품질 향상</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>AWS Systems Manager Automation으로 EC2 패치, AMI 생성 등 반복 작업 자동화</li>
        <li>AWS Lambda와 EventBridge를 사용하여 이벤트 기반 운영 자동화 구현</li>
        <li>AWS Config Rules와 자동 수정(Auto Remediation)으로 컴플라이언스 자동 유지</li>
        <li>Infrastructure as Code(IaC)를 통해 인프라 프로비저닝과 변경 자동화</li>
        <li>CI/CD 파이프라인으로 소프트웨어 배포 프로세스 자동화</li>
        <li>CloudWatch Alarm과 Systems Manager를 연동하여 일반적인 운영 이슈 자동 해결</li>
        <li>비용 자동화 작업의 ROI를 정기적으로 측정하고 개선</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Systems Manager</li>
        <li>Amazon EventBridge</li>
        <li>AWS Lambda</li>
        <li>AWS Config</li>
        <li>AWS CodePipeline</li>
        <li>AWS CloudFormation</li>
        <li>Amazon CloudWatch</li>
      </ul>

      <PageNav />
    </article>
  );
}
