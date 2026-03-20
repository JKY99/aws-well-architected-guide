import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel5Bp01Page() {
  return (
    <article className="doc-content">
      <h1>REL05-BP01 — 적용 가능한 강한 의존성을 약한 의존성으로 전환하기 위한 완만한 성능 저하 구현</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 수립하지 않으면 높은 수준의 위험이 노출됩니다.</p>
      </div>
      <p>
        구성 요소의 의존성이 비정상 상태이더라도 구성 요소 자체는 저하된 방식으로 기능할 수 있습니다.
        구성 요소의 장애 모드는 정상 운영의 일부로 간주되어야 합니다. 이러한 장애가 완전한 실패로 이어지지 않거나
        적어도 예측 가능하고 복구 가능한 상태로만 이어지도록 워크플로우를 설계해야 합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        구성 요소의 의존성이 비정상 상태이더라도 구성 요소 자체가 저하된 방식으로 기능합니다.
        이러한 장애가 완전한 실패로 이어지지 않거나 적어도 예측 가능하고 복구 가능한 상태로만 이어집니다.
        완만한 성능 저하는 전체 시스템 가용성을 향상시킵니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>필요한 핵심 비즈니스 기능을 파악하지 않음; 의존성 장애 시 구성 요소가 기능하는지 테스트하지 않음</li>
        <li>여러 의존성 중 하나만 사용 불가능할 때 오류 반환 또는 데이터 미제공(부분 결과 반환 가능한 경우)</li>
        <li>트랜잭션이 부분적으로 실패할 때 불일치 상태 생성</li>
        <li>중앙 파라미터 스토어에 액세스하는 대안적 방법 부재</li>
        <li>실패한 새로 고침 결과로 결과를 고려하지 않고 로컬 상태 무효화 또는 비움</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>완만한 성능 저하는 전체 시스템 가용성 향상</li>
        <li>장애 중에도 가장 중요한 기능의 기능성 유지</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>외부 및 내부 의존성과 잠재적 장애 모드 파악</li>
        <li>업스트림/다운스트림 시스템 및 고객에 대한 부정적 영향을 최소화하는 경로 설계</li>
        <li>성능 저하 경로가 기본 경로보다 훨씬 단순하도록 보장</li>
        <li>의존성 부분 장애: 비즈니스 컨텍스트에 따라 부분 결과 반환</li>
        <li>다운스트림 시스템 과부하: 높은 실패율 발생 시 재시도 중단을 위한 서킷 브레이커 패턴 사용</li>
        <li>파라미터 스토어 사용 불가: 컨테이너/머신 이미지에서 소프트 의존성 캐싱 또는 합리적 기본값 사용</li>
        <li>주요 데이터베이스 사용 불가: Multi-AZ, 읽기 복제본, 큐에 쓰기 버퍼링, Amazon Aurora Serverless 사용</li>
        <li>Saga 패턴을 사용하여 분산 트랜잭션에서 장애 시 롤백</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon API Gateway</li>
        <li>Amazon ElastiCache</li>
        <li>Amazon SQS</li>
        <li>Amazon Aurora Serverless</li>
        <li>Amazon CloudFront</li>
        <li>Amazon S3</li>
      </ul>
      <PageNav />
    </article>
  );
}
