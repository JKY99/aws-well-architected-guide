import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSus3Bp04Page() {
  return (
    <article className="doc-content">
      <h1>SUS03-BP04 — 공유 서비스 사용</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>공유 서비스와 멀티 테넌트 아키텍처를 활용하여 리소스 효율성을 극대화합니다. 각 애플리케이션이나 팀이 별도의 전용 인프라를 운영하는 대신 공유 클러스터, 관리형 서비스, 서버리스 아키텍처를 활용하면 전체 리소스 사용량과 에너지 소비를 크게 줄일 수 있습니다.</p>
      <h2>원하는 결과</h2>
      <p>공유 인프라와 관리형 서비스 활용을 통해 유휴 리소스를 최소화하고, 여러 워크로드 간 리소스를 효율적으로 공유하여 전체 탄소 발자국을 줄입니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>각 팀이나 프로젝트마다 별도의 전용 데이터베이스 서버를 운영합니다.</li>
        <li>낮은 활용률에도 불구하고 전용 컨테이너 클러스터를 유지합니다.</li>
        <li>관리형 서비스 대신 직접 관리하는 오픈소스 솔루션을 운영합니다.</li>
        <li>멀티 테넌트 아키텍처 설계 없이 모든 고객에게 전용 리소스를 할당합니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>공유 인프라를 통해 전체 리소스 활용률이 향상됩니다.</li>
        <li>관리형 서비스는 AWS가 인프라를 최적화하므로 에너지 효율이 높습니다.</li>
        <li>서버리스 서비스는 사용한 만큼만 리소스를 소비하여 낭비가 없습니다.</li>
        <li>운영 오버헤드가 줄어들고 개발 생산성이 향상됩니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>Amazon RDS나 Amazon Aurora를 사용하여 데이터베이스 인프라를 공유합니다.</li>
        <li>Amazon EKS나 Amazon ECS로 컨테이너 워크로드를 단일 클러스터에서 운영합니다.</li>
        <li>AWS Lambda와 같은 서버리스 서비스를 활용하여 유휴 컴퓨팅을 제거합니다.</li>
        <li>Amazon ElastiCache를 여러 애플리케이션이 공유하는 캐시 계층으로 활용합니다.</li>
        <li>Amazon S3, Amazon DynamoDB 등 완전 관리형 서비스를 우선적으로 선택합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon EKS / Amazon ECS — 공유 컨테이너 오케스트레이션 플랫폼</li>
        <li>Amazon RDS / Amazon Aurora — 관리형 공유 데이터베이스 서비스</li>
        <li>AWS Lambda — 서버리스 컴퓨팅으로 유휴 리소스 제거</li>
        <li>Amazon ElastiCache — 공유 인메모리 캐시 서비스</li>
        <li>AWS Fargate — 서버리스 컨테이너 실행 환경</li>
      </ul>
      <PageNav />
    </article>
  );
}
