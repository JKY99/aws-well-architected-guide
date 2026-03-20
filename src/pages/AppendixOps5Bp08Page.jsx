import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps5Bp08Page() {
  return (
    <article className="doc-content">
      <h1>OPS05-BP08 — 여러 환경 사용</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 노출되는 위험 수준이 중간입니다.</p>
      </div>

      <p>
        워크로드를 실험, 개발, 테스트하기 위해 여러 환경을 사용하고 프로덕션에 가까워질수록
        제어 수준을 높입니다. 이렇게 하면 코드와 정책 변경 사항이 프로덕션에 도달하기 전에
        검증되어 결함이 줄고 배포 흐름이 개선됩니다.
      </p>

      <h2>원하는 결과</h2>
      <ul>
        <li>개발자 충돌 없이 여러 동시 개발, 테스트, 프로덕션 환경을 지원합니다.</li>
        <li>랜딩 존과 같은 복잡한 시스템에 대한 변경 위험을 크게 줄입니다.</li>
        <li>개선 프로세스를 단순화하고 중요 업데이트 위험을 줄입니다.</li>
        <li>적절한 거버넌스, 네트워킹, 보안을 통한 멀티 계정 AWS 환경의 자연스러운 이점을 활용합니다.</li>
      </ul>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>개발자들이 서로의 코드를 덮어쓰는 공유 환경에서 개발을 수행하는 경우</li>
        <li>새 서비스 실험을 방해하는 지나치게 제한적인 개발 환경 보안 제어가 있는 경우</li>
        <li>프로덕션 시스템에서 부하 테스트를 수행하여 중단을 유발하는 경우</li>
        <li>중요한 오류(예: 데이터 손실 시나리오)를 파악하기 위해 프로덕션에서만 테스트하는 경우</li>
        <li>단일 환경의 단순성이 변경 영향 범위를 능가한다고 믿는 경우</li>
        <li>랜딩 존 업그레이드가 계정 생성 또는 팀 배포 기능을 저해하는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>충돌 없이 여러 동시 개발, 테스트, 프로덕션 환경을 지원합니다.</li>
        <li>랜딩 존과 같은 복잡한 시스템에 대한 변경 위험을 크게 줄입니다.</li>
        <li>개선 프로세스를 단순화하고 중요 업데이트 위험을 줄입니다.</li>
        <li>적절한 계정 구조, 거버넌스, 네트워크, 보안을 통한 멀티 계정 AWS 환경의 자연스러운 이점을 활용합니다.</li>
        <li>보안과 워크로드 구성을 유지하면서 조직 성장을 지원합니다.</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>실험을 위해 최소화된 제어가 있는 샌드박스 환경을 제공합니다.</li>
        <li>병렬 작업과 민첩성을 위해 개별 개발 환경을 제공합니다.</li>
        <li>프로덕션에 가까워질수록 엄격한 제어를 구현합니다.</li>
        <li>일관된 환경 구성을 위해 Infrastructure as Code(CloudFormation)를 사용합니다.</li>
        <li>비용 최소화를 위해 사용하지 않는 환경을 비활성화합니다.</li>
        <li>부하 테스트를 위해 프로덕션과 동등한 환경을 배포합니다.</li>
        <li>플랫폼 수준 요구 사항(플랫폼 엔지니어링, 네트워킹, 보안)을 위해 별도의 AWS Organizations를 사용합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Control Tower — 랜딩 존 거버넌스 및 관리</li>
        <li>AWS IAM Identity Center — 접근 관리</li>
        <li>AWS CloudFormation — 코드형 인프라</li>
        <li>AWS Organizations — 멀티 계정 조직</li>
        <li>Instance Scheduler on AWS — 환경 스케줄링을 통한 비용 최적화</li>
      </ul>

      <PageNav />
    </article>
  );
}
