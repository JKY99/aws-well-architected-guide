import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSus5Bp03Page() {
  return (
    <article className="doc-content">
      <h1>SUS05-BP03 — 관리형 서비스 사용</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간 수준입니다.</p>
      </div>

      <p>
        관리형 서비스를 사용하여 클라우드에서 더 효율적으로 운영합니다. 관리형 서비스는 배포된
        하드웨어의 높은 활용률과 지속 가능성 최적화 유지 책임을 AWS로 이전하여 운영 및 관리
        부담을 제거하고 팀이 혁신에 집중할 수 있게 합니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        수백만 고객에 대한 AWS의 통찰력을 활용하여 운영 효율성을 향상시킵니다. 공유 제어 플레인을
        통해 여러 사용자 간에 환경적 영향을 분산시키고 팀이 인프라 유지 관리보다 혁신에 집중합니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>활용률이 낮은 Amazon EC2 인스턴스로 애플리케이션을 실행하는 경우</li>
        <li>혁신이나 간소화를 위한 시간 없이 워크로드만 관리하는 팀</li>
        <li>관리형 서비스에서 더 효율적으로 실행할 수 있는 작업을 위해 기술을 배포·유지하는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>수백만 고객에 대한 통찰력을 보유한 AWS로 운영 책임 이전</li>
        <li>AWS 전문성을 통한 새로운 혁신 및 효율성 창출</li>
        <li>공유 제어 플레인을 통해 여러 테넌트 간 환경적 영향 분산</li>
        <li>팀의 운영 및 관리 부담 감소</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>워크로드의 서비스와 컴포넌트를 인벤토리합니다.</li>
        <li>관리형 서비스로 교체할 수 있는 컴포넌트를 평가합니다.</li>
        <li>AWS Application Discovery Service 등의 도구를 사용하여 의존성을 파악하고 마이그레이션 계획을 수립합니다.</li>
        <li>전체 마이그레이션 전에 테스트를 수행합니다.</li>
        <li>자체 호스팅 서비스를 교체하고 마이그레이션 후 지속적으로 최적화합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon RDS, DocumentDB, ElastiCache, Redshift — 관리형 데이터베이스</li>
        <li>Amazon Athena, EMR, OpenSearch Service — 관리형 분석</li>
        <li>AWS Fargate — 서버리스 컨테이너</li>
        <li>AWS Amplify Hosting — 웹 호스팅</li>
        <li>Amazon EKS — 관리형 Kubernetes</li>
        <li>Amazon MSK — 관리형 Kafka 스트리밍</li>
        <li>AWS Application Discovery Service — 마이그레이션 의존성 파악</li>
      </ul>

      <PageNav />
    </article>
  );
}
