import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSus2Bp05Page() {
  return (
    <article className="doc-content">
      <h1>SUS02-BP05 — 완전히 활용되는 서비스를 선택하는 IaC 사용</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 낮음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 낮습니다.</p>
      </div>

      <p>
        Infrastructure as Code(IaC)를 사용하여 리소스 활용률이 높은 서비스를 선택하고, 실제 필요한 만큼만
        정확하게 프로비저닝합니다. IaC는 표준화된 배포를 보장하고, 과잉 프로비저닝을 방지하며,
        지속 가능성 모범 사례를 코드로 인코딩하여 일관되게 적용할 수 있게 합니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        모든 인프라가 IaC로 정의되어 있으며, 리소스 규모와 서비스 선택이 실제 활용도 데이터를 기반으로
        최적화되어 있습니다. 수동 프로비저닝으로 인한 과잉 할당 없이 일관된 지속 가능성 기준이 적용됩니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>수동 콘솔 클릭으로 인프라를 프로비저닝하여 일관성 없이 과잉 리소스가 생성되는 경우</li>
        <li>IaC 템플릿에 실제 수요를 고려하지 않은 고정된 대형 인스턴스 유형이 하드코딩된 경우</li>
        <li>관리형 서비스 대신 직접 관리하는 서비스를 선택하여 리소스 활용률이 낮아지는 경우</li>
        <li>IaC 코드가 리뷰 없이 적용되어 지속 가능성 기준 위반이 감지되지 않는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>IaC 기반 표준화로 과잉 프로비저닝 패턴 제거</li>
        <li>지속 가능성 모범 사례를 코드로 인코딩하여 자동 적용</li>
        <li>관리형 서비스 활용으로 AWS 인프라의 높은 효율성 활용</li>
        <li>인프라 변경 이력 추적 및 탄소 영향 감사 가능</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>AWS CloudFormation 또는 Terraform으로 모든 인프라를 코드화하고 버전 관리합니다.</li>
        <li>서버리스(Lambda, Fargate) 및 관리형 서비스(RDS, ElastiCache)를 우선 선택하여 리소스 활용률을 높입니다.</li>
        <li>IaC 템플릿에 인스턴스 유형 파라미터를 변수화하여 Compute Optimizer 권장 사항을 쉽게 반영합니다.</li>
        <li>CI/CD 파이프라인에 IaC 정적 분석 도구(cfn-lint 등)를 통합하여 과잉 프로비저닝 설정을 사전에 검출합니다.</li>
        <li>AWS Service Catalog를 활용하여 지속 가능성 기준을 충족하는 승인된 인프라 패턴을 표준화합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS CloudFormation — 인프라를 코드로 정의하고 반복 가능한 배포 구현</li>
        <li>AWS CDK — 프로그래밍 언어로 클라우드 인프라 정의</li>
        <li>AWS Service Catalog — 승인된 IaC 템플릿 카탈로그 관리</li>
        <li>AWS Compute Optimizer — 인스턴스 유형 최적화 권장 사항 제공</li>
      </ul>

      <PageNav />
    </article>
  );
}
