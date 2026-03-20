import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps5Bp08Page() {
  return (
    <article className="doc-content">
      <h1>OPS05-BP08 — 여러 환경 사용</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간 수준입니다.</p>
      </div>

      <p>
        컴플라이언스 및 거버넌스 요구사항을 반영하는 여러 환경을 보유합니다.
        프로덕션으로 향하는 경로에서 환경을 통해 코드를 테스트하고 프로모션합니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        컴플라이언스 및 거버넌스 요구사항을 반영하는 여러 환경을 보유합니다.
        코드와 인프라가 프로덕션으로 배포되기 전에 여러 환경을 거쳐 검증됩니다.
        각 환경은 목적에 맞는 적절한 수준의 제어와 거버넌스를 적용합니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>개발자들이 서로의 코드를 덮어쓰는 공유 환경에서 개발을 수행하는 경우</li>
        <li>새로운 서비스 실험을 방해하는 지나치게 제한적인 보안 제어가 있는 경우</li>
        <li>프로덕션 시스템에서 부하 테스트를 수행하여 장애를 유발하는 경우</li>
        <li>중요한 오류를 재현하기 위해 프로덕션 환경에서만 테스트하는 경우</li>
        <li>단일 환경의 단순성이 변경 영향 범위를 능가한다고 믿는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>충돌 없이 여러 동시 개발, 테스트, 프로덕션 환경 지원</li>
        <li>랜딩 존과 같은 복잡한 기능에 대한 변경 위험 크게 감소</li>
        <li>개선 프로세스 단순화 및 중요 업데이트 위험 감소</li>
        <li>적절한 계정 구조, 거버넌스, 네트워크, 보안을 통한 멀티 계정의 자연스러운 이점</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>실험을 위해 최소화된 제어가 있는 샌드박스 환경을 제공합니다.</li>
        <li>병렬 작업과 민첩성을 위해 개별 개발 환경을 제공합니다.</li>
        <li>사전 프로덕션 및 프로덕션 환경에는 엄격한 제어를 구현합니다.</li>
        <li>일관된 배포를 위해 Infrastructure as Code와 구성 관리를 사용합니다.</li>
        <li>비용 절감을 위해 사용하지 않는 환경은 비활성화합니다.</li>
        <li>부하 테스트를 위해 프로덕션과 동등한 환경을 배포합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS CloudFormation — 일관된 환경 프로비저닝을 위한 Infrastructure as Code</li>
        <li>AWS Control Tower — 멀티 계정 환경 관리 및 거버넌스</li>
        <li>AWS IAM Identity Center — 여러 환경에 대한 접근 관리</li>
        <li>Instance Scheduler on AWS — 비용 절감을 위한 환경 일정 관리</li>
      </ul>

      <PageNav />
    </article>
  );
}
