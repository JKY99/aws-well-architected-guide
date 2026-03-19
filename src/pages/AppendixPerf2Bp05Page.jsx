import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf2Bp05Page() {
  return (
    <article className="doc-content">
      <h1>PERF02-BP05 — 서버리스 컴퓨팅 사용</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 낮음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 낮습니다.</p>
      </div>
      <p>서버리스 서비스를 활용하여 인프라 관리 부담 없이 자동 스케일링과 고가용성을 활용하고 실제 사용량에만 비용을 지불합니다.</p>
      <h2>원하는 결과</h2>
      <p>서버리스 아키텍처로 운영 부담을 최소화하고 자동 확장성을 달성합니다. 개발팀이 인프라 관리 대신 비즈니스 로직 개발에 집중할 수 있으며, 사용량에 따라 자동으로 확장되는 탄력적인 시스템을 구축합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>장시간 실행 또는 상태 유지가 필요한 서버리스 부적합 워크로드에 적용</li>
        <li>콜드 스타트 지연을 고려하지 않아 성능 저하 발생</li>
        <li>모든 워크로드를 서버리스로 전환하려는 과도한 접근</li>
        <li>Lambda 함수 타임아웃 및 메모리 설정 미최적화</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>인프라 프로비저닝 및 관리 불필요</li>
        <li>트래픽에 따른 자동 스케일링으로 성능 일관성 유지</li>
        <li>실제 사용량 기반 과금으로 비용 최적화</li>
        <li>빠른 개발 및 배포 사이클</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS Lambda로 이벤트 기반 처리 구현</li>
        <li>Amazon API Gateway로 HTTP 엔드포인트를 서버리스로 구성</li>
        <li>Lambda Provisioned Concurrency를 설정하여 콜드 스타트 지연 최소화</li>
        <li>Lambda 함수 메모리 크기를 조정하여 성능과 비용 균형 최적화</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Lambda — 서버리스 함수 실행</li>
        <li>Amazon API Gateway — 서버리스 HTTP API 엔드포인트</li>
        <li>AWS Fargate — 서버리스 컨테이너 실행</li>
        <li>Amazon DynamoDB — 서버리스 NoSQL 데이터베이스</li>
      </ul>
      <PageNav />
    </article>
  );
}
