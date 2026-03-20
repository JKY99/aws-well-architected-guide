import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec1Bp06Page() {
  return (
    <article className="doc-content">
      <h1>SEC01-BP06 — 표준 보안 제어의 배포 자동화</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 수동 설정 오류와 일관성 부재로 인해 보안 위험이 발생합니다.</p>
      </div>
      <p>
        AWS 환경 전반에 표준이 되는 보안 제어를 개발하고 배포할 때 현대적인 DevOps 방식을 적용합니다. IaC 템플릿을 사용하여 표준 보안 제어 및 구성을 정의하고, 버전 제어 시스템에 변경 사항을 캡처하며, CI/CD 파이프라인의 일부로 변경 사항을 테스트하고, AWS 환경에 대한 변경 사항 배포를 자동화합니다.
      </p>
      <h2>원하는 결과</h2>
      <ul>
        <li>IaC 템플릿이 표준화된 보안 제어를 캡처하고 버전 제어 시스템에 커밋</li>
        <li>CI/CD 파이프라인이 변경 사항을 감지하고 AWS 환경 테스트 및 배포 자동화</li>
        <li>배포 전 템플릿의 잘못된 구성을 탐지하고 경보를 발생시키는 가드레일 구축</li>
        <li>표준 제어가 적용된 환경에 워크로드 배포</li>
        <li>셀프서비스 메커니즘을 통해 팀이 승인된 서비스 구성을 배포할 수 있는 액세스 권한 보유</li>
      </ul>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>웹 콘솔 또는 CLI를 통해 표준 보안 제어를 수동으로 변경</li>
        <li>개별 워크로드 팀이 중앙에서 정의한 제어를 수동으로 구현하는 것에 의존</li>
        <li>중앙 보안 팀이 워크로드 팀 요청에 따라 워크로드 수준의 제어를 배포하는 것에 의존</li>
        <li>적절한 역할 분리나 견제와 균형 없이 동일한 개인/팀이 자동화 스크립트를 개발·테스트·배포</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>버전 제어를 사용하여 시간에 따른 변경 사항 추적 및 비교</li>
        <li>자동화된 테스트 및 배포를 통한 표준화와 예측 가능성</li>
        <li>성공적인 배포 가능성 향상 및 수동 반복 작업 감소</li>
        <li>셀프서비스 메커니즘으로 잘못된 구성 및 오용 위험 감소</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS CloudFormation을 사용하여 보안 제어를 선언적 IaC 템플릿으로 정의합니다.</li>
        <li>소스 제어 시스템에 템플릿을 저장하고 DevOps 방식으로 자동화된 테스트와 드리프트 탐지를 구현합니다.</li>
        <li>AWS CodePipeline, AWS CodeBuild, AWS CodeDeploy를 사용하여 CI/CD 파이프라인을 구현합니다.</li>
        <li>AWS CloudFormation Guard를 사용하여 템플릿 규정 준수를 자동으로 검증합니다.</li>
        <li>AWS Service Catalog를 통해 워크로드 팀에게 셀프서비스 템플릿 제품을 제공합니다.</li>
        <li>AWS Control Tower와 Account Factory를 사용하여 표준화된 계정 생성 프로세스를 구축합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS CloudFormation — IaC 템플릿 정의 및 배포</li>
        <li>AWS CloudFormation Guard — 자동화된 템플릿 검증 및 규정 준수 확인</li>
        <li>AWS CodePipeline — CI/CD 오케스트레이션</li>
        <li>AWS CodeBuild — 자동화된 테스트 및 빌드</li>
        <li>AWS CodeDeploy — 배포 자동화</li>
        <li>AWS Service Catalog — 워크로드 팀을 위한 셀프서비스 템플릿 제품</li>
        <li>AWS Control Tower — 계정 거버넌스 및 표준화</li>
        <li>AWS Organizations — 다중 계정 관리</li>
      </ul>
      <PageNav />
    </article>
  );
}
