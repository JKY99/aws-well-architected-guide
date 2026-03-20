import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel1Bp05Page() {
  return (
    <article className="doc-content">
      <h1>REL01-BP05 — 할당량 관리 자동화</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 수립하지 않으면 중간 수준의 위험이 노출됩니다.</p>
      </div>
      <p>
        서비스 할당량(한도라고도 함)은 AWS 계정의 리소스에 대한 최대값입니다. 각 AWS 서비스는 기본값으로 할당량을 정의합니다.
        워크로드 소비량 증가는 할당량을 초과할 경우 안정성과 사용자 경험을 위협할 수 있습니다.
        이 모범 사례에서는 한도에 근접할 때 경고를 보내고 적절한 경우 할당량 증가 요청을 자동화하는 도구를 구현해야 합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        각 AWS 계정 및 리전에서 실행되는 워크로드에 맞게 할당량이 적절하게 구성되어 있습니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>워크로드 요구 사항을 충족하도록 할당량을 적절하게 조정하지 않음</li>
        <li>스프레드시트와 같은 구식 방법을 사용하여 할당량 추적</li>
        <li>정기적인 일정에 따라서만 서비스 한도 업데이트</li>
        <li>할당량을 검토하고 증가를 요청하는 운영 프로세스 부재</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>워크로드 복원력 향상: AWS 리소스 할당량 초과로 인한 오류 방지</li>
        <li>재해 복구 간소화: 기본 리전에서 구축된 자동화된 할당량 관리 메커니즘을 DR 설정 시 재사용 가능</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS Service Quotas 콘솔, AWS CLI, AWS SDK를 사용하여 할당량 조회 및 추적</li>
        <li>구성 관리 데이터베이스(CMDB) 및 IT 서비스 관리(ITSM) 시스템을 AWS Service Quotas API와 통합</li>
        <li>CloudFormation StackSets를 통한 자동 모니터링을 위해 Quota Monitor for AWS 솔루션 구현</li>
        <li>Service Quotas 요청 템플릿 및 AWS Control Tower를 사용하여 설정 간소화</li>
        <li>Trusted Advisor 조직 대시보드 및 Cloud Intelligence Dashboard를 통해 모든 계정 및 리전에 걸친 대시보드 구축</li>
        <li>임계값을 낮추어 비프로덕션 계정에서 자동화 테스트</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Service Quotas</li>
        <li>AWS Trusted Advisor</li>
        <li>AWS Control Tower</li>
        <li>Amazon CloudWatch</li>
        <li>AWS CloudFormation StackSets</li>
        <li>Quota Monitor for AWS 솔루션</li>
      </ul>
      <PageNav />
    </article>
  );
}
