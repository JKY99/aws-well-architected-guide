import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSus6Bp05Page() {
  return (
    <article className="doc-content">
      <h1>SUS06-BP05 — 지속 가능성을 위한 배포 전략 사용</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 낮음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 낮습니다.</p>
      </div>
      <p>
        블루/그린 배포, 카나리 배포 등의 전략을 활용하여 배포 과정의 리소스 낭비를 최소화합니다.
        비효율적인 배포 전략은 중복 인프라 운영, 불필요한 롤백, 과도한 리소스 프로비저닝으로 에너지를 낭비합니다.
        검증된 배포 전략과 자동화를 통해 배포 과정의 환경적 영향을 줄이십시오.
      </p>
      <h2>원하는 결과</h2>
      <p>
        배포 프로세스가 최소한의 리소스 중복과 다운타임으로 진행되어 배포 인프라의 에너지 소비가 최적화되고,
        실패 시 빠른 롤백으로 불필요한 리소스 낭비 없이 안정적인 서비스를 유지합니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>블루/그린 배포 후 구버전 환경을 즉시 종료하지 않고 장기간 유지하는 것</li>
        <li>검증 없이 전체 트래픽을 한번에 전환하여 실패 시 대규모 롤백을 유발하는 것</li>
        <li>배포 시 실제 필요 이상으로 과도하게 리소스를 프로비저닝하는 것</li>
        <li>수동 배포 프로세스로 인해 배포 시간이 길어지고 리소스 중복 기간이 늘어나는 것</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>카나리 배포로 문제를 조기 감지하여 대규모 롤백에 따른 리소스 낭비 방지</li>
        <li>배포 완료 후 구환경 즉시 종료로 중복 인프라 운영 기간 최소화</li>
        <li>자동화된 배포로 인적 오류 감소 및 배포 속도 향상</li>
        <li>점진적 배포로 안정성 확보와 에너지 효율을 동시에 달성</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS CodeDeploy의 카나리 또는 선형 배포 구성을 사용하여 점진적 트래픽 전환</li>
        <li>블루/그린 배포 시 검증 완료 후 즉시 구버전 환경을 종료하는 자동화 구성</li>
        <li>AWS CloudFormation 또는 AWS CDK로 IaC 기반 배포를 자동화하여 인적 오류 최소화</li>
        <li>배포 파이프라인에 자동 롤백 조건을 설정하여 실패 시 신속하게 안정 버전으로 복원</li>
        <li>배포 중 리소스 사용량을 모니터링하고 목표 활용률 지표를 정의하여 효율성 측정</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS CodeDeploy — 카나리, 선형, 블루/그린 배포 전략 지원</li>
        <li>AWS CodePipeline — 자동화된 릴리스 파이프라인</li>
        <li>AWS CloudFormation — 인프라 배포 자동화 및 드리프트 감지</li>
        <li>Amazon ECS / EKS — 컨테이너 워크로드의 롤링 업데이트 지원</li>
        <li>AWS Lambda 별칭 및 가중치 기반 트래픽 — 서버리스 워크로드의 카나리 배포</li>
      </ul>
      <PageNav />
    </article>
  );
}
