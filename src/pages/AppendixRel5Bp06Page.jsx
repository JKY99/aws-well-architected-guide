import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel5Bp06Page() {
  return (
    <article className="doc-content">
      <h1>REL05-BP06 — 시스템을 가능한 한 무상태로 구성</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 특정 서버에 종속된 세션 상태가 서버 장애 시 손실되어 사용자 경험을 저하시킵니다.</p>
      </div>
      <p>
        무상태(stateless) 컴포넌트는 로컬 상태를 유지하지 않기 때문에 어느 인스턴스에서도
        요청을 처리할 수 있습니다. 이를 통해 인스턴스 장애 시 다른 인스턴스로 즉시 트래픽을
        전환할 수 있으며, 수평 확장이 용이해집니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        애플리케이션 서버가 로컬 세션 상태를 보유하지 않으며, 어떤 인스턴스에서도
        동일한 사용자 요청을 처리할 수 있습니다. 인스턴스 교체나 확장 시 사용자 세션이 유지됩니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>애플리케이션 서버의 메모리에 HTTP 세션을 저장하는 경우</li>
        <li>로드 밸런서의 스티키 세션(Sticky Session)에 의존하여 특정 사용자를 특정 서버에 고정하는 경우</li>
        <li>서버 로컬 파일 시스템에 사용자 데이터나 임시 파일을 저장하는 경우</li>
        <li>서버 메모리에 캐시를 구성하여 서버 간 캐시 불일치가 발생하는 경우</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>서버 장애 시 사용자 세션 손실 방지</li>
        <li>수평 확장(Auto Scaling) 시 모든 인스턴스에서 동일한 서비스 제공</li>
        <li>배포 시 무중단 업데이트(Blue/Green, Rolling) 간소화</li>
        <li>인스턴스 크기 변경, 스팟 인스턴스 활용 등 유연한 인프라 운영</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>HTTP 세션 데이터를 Amazon ElastiCache(Redis 또는 Memcached)에 저장합니다.</li>
        <li>사용자 업로드 파일과 임시 데이터는 Amazon S3에 저장합니다.</li>
        <li>분산 캐시를 사용하여 서버 간 캐시를 공유하고 일관성을 유지합니다.</li>
        <li>JWT(JSON Web Token) 등 무상태 인증 메커니즘을 사용하여 세션 저장소 의존성을 제거합니다.</li>
        <li>로드 밸런서의 스티키 세션 설정을 제거하고 무상태 동작을 검증합니다.</li>
        <li>AWS Elastic Beanstalk, ECS, EKS 등에서 외부 세션 스토어를 사용하도록 구성합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon ElastiCache — Redis 또는 Memcached를 사용한 분산 세션 및 캐시 저장</li>
        <li>Amazon S3 — 사용자 파일 및 미디어 저장</li>
        <li>Amazon DynamoDB — 빠른 읽기/쓰기가 필요한 세션 데이터 저장</li>
        <li>AWS Elastic Load Balancing — 스티키 세션 없이 트래픽 분산</li>
      </ul>
      <PageNav />
    </article>
  );
}
