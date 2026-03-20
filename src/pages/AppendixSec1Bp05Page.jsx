import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec1Bp05Page() {
  return (
    <article className="doc-content">
      <h1>SEC01-BP05 — 보안 관리 범위 축소</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 불필요한 보안 관리 오버헤드와 유지 관리 작업으로 인해 보안 위험과 총 소유 비용이 증가합니다.</p>
      </div>
      <p>
        특정 제어의 관리를 AWS로 이전하는 AWS 서비스(관리형 서비스)를 사용하여 보안 범위를 줄일 수 있는지 여부를 결정합니다. 이러한 서비스는 인프라 프로비저닝, 소프트웨어 설정, 패치, 백업 등의 보안 유지 관리 작업을 줄이는 데 도움이 됩니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        워크로드에 AWS 서비스를 선택할 때 보안 관리 범위를 고려합니다. 관리 오버헤드와 유지 관리 작업의 비용(총 소유 비용, TCO)을 선택한 서비스 비용 및 기타 Well-Architected 고려 사항과 비교하여 평가합니다. AWS 제어 및 규정 준수 문서를 제어 평가 및 검증 절차에 통합합니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>선택한 서비스에 대한 공유 책임 모델을 충분히 이해하지 않고 워크로드를 배포</li>
        <li>관리형 서비스 대안을 평가하지 않고 가상 머신에서 데이터베이스 및 기타 기술을 호스팅</li>
        <li>가상 머신에서 기술을 호스팅하는 경우 총 소유 비용에 보안 관리 작업을 포함하지 않음</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>운영 보안 제어 관리의 전반적인 부담 감소</li>
        <li>보안 위험 및 총 소유 비용 절감</li>
        <li>보안 작업에 소비되는 시간을 더 가치 있는 비즈니스 활동에 재투자</li>
        <li>일부 제어 요건을 AWS로 이전하여 규정 준수 요건 범위 축소</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>관리형 서비스로 대체할 수 있는 워크로드 구성 요소를 평가합니다(재호스팅, 리팩터링, 리플랫폼, 재구축, 교체 검토).</li>
        <li>자체 관리형 배포 대신 관리형 서비스를 구현합니다.</li>
        <li>AWS Artifact의 책임 지침을 사용하여 필요한 보안 제어를 결정합니다.</li>
        <li>리소스 인벤토리를 유지하고 새로운 서비스 및 기회에 대한 최신 정보를 확인합니다.</li>
        <li>관리형 서비스의 업데이트 프로세스와 타이밍 구성, 운영에 미치는 영향을 파악합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon Relational Database Service(Amazon RDS) — 관리형 데이터베이스 배포</li>
        <li>Amazon Elastic Kubernetes Service(Amazon EKS) — 컨테이너 오케스트레이션</li>
        <li>Amazon Elastic Container Service(Amazon ECS) — 컨테이너 오케스트레이션</li>
        <li>AWS Health — 서비스 업데이트 추적 및 관리</li>
        <li>AWS Artifact — 감사 아티팩트 및 규정 준수 문서</li>
        <li>AWS Lambda — 버전 관리가 포함된 서버리스 컴퓨팅</li>
      </ul>
      <PageNav />
    </article>
  );
}
