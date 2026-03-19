import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSus5Bp03Page() {
  return (
    <article className="doc-content">
      <h1>SUS05-BP03 — 관리형 서비스 사용</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>
        관리형 서비스를 활용하여 AWS의 규모 경제와 효율적인 인프라 공유의 이점을 누립니다.
        서버리스 및 완전 관리형 서비스는 수많은 고객이 동일한 인프라를 공유함으로써 개별 운영보다 훨씬 높은 리소스 활용률을 달성합니다.
        이를 통해 동일한 워크로드를 더 적은 전력으로 실행할 수 있습니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        워크로드가 AWS의 공유 인프라 위에서 실행되어 고유한 규모의 경제 효과를 누리고,
        자체 인프라 운영 없이도 높은 가용성과 에너지 효율성을 달성합니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>관리형 대안이 있음에도 EC2에서 직접 데이터베이스나 미들웨어를 운영하는 것</li>
        <li>항상 켜져 있는 서버를 사용하여 간헐적 워크로드를 처리하는 것</li>
        <li>서버리스 적합 워크로드에 고정 용량 서버를 유지하는 것</li>
        <li>활용률이 낮은 전용 인스턴스를 오랫동안 유지하는 것</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>AWS의 대규모 인프라 공유로 물리적 하드웨어당 탄소 효율 극대화</li>
        <li>사용한 만큼만 과금되는 구조로 유휴 리소스 에너지 낭비 제거</li>
        <li>인프라 관리 부담 감소로 팀이 애플리케이션 혁신에 집중 가능</li>
        <li>AWS가 지속적으로 개선하는 인프라 효율성 자동 혜택</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>자체 관리 데이터베이스를 Amazon RDS, Aurora, DynamoDB 등 관리형 서비스로 전환</li>
        <li>이벤트 기반 또는 간헐적 워크로드에 AWS Lambda 서버리스 아키텍처 적용</li>
        <li>컨테이너 워크로드에 EC2 직접 관리 대신 AWS Fargate 활용</li>
        <li>메시지 큐 및 이벤트 스트리밍에 Amazon SQS, SNS, EventBridge 사용</li>
        <li>캐싱 레이어에 자체 Redis/Memcached 대신 Amazon ElastiCache 활용</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Lambda — 서버 없이 코드 실행하는 서버리스 컴퓨팅</li>
        <li>AWS Fargate — 서버 관리 없는 컨테이너 실행 환경</li>
        <li>Amazon RDS / Aurora — 완전 관리형 관계형 데이터베이스</li>
        <li>Amazon DynamoDB — 완전 관리형 NoSQL 데이터베이스</li>
        <li>Amazon S3 — 완전 관리형 객체 스토리지</li>
      </ul>
      <PageNav />
    </article>
  );
}
