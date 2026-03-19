import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf2Bp02Page() {
  return (
    <article className="doc-content">
      <h1>PERF02-BP02 — 유연한 인프라 사용</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>탄력적으로 확장/축소할 수 있는 인프라를 구성하여 수요에 따라 적절한 컴퓨팅 성능을 제공합니다.</p>
      <h2>원하는 결과</h2>
      <p>수요 변화에 자동으로 대응하는 탄력적 컴퓨팅 인프라를 구축합니다. 트래픽 급증 시 자동으로 확장되고, 유휴 시에는 자동으로 축소되어 성능과 비용을 동시에 최적화합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>최대 부하에 맞춰 고정 용량으로 프로비저닝</li>
        <li>수동 스케일링에 의존하여 운영 부담 증가</li>
        <li>탄력성을 고려하지 않은 아키텍처 설계</li>
        <li>단일 인스턴스 유형만 사용하여 유연성 부족</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>수요 변화에도 일관된 성능 제공</li>
        <li>실제 사용량에 맞는 비용 최적화</li>
        <li>자동화로 운영 부담 감소</li>
        <li>예상치 못한 트래픽 급증에도 안정적 서비스 제공</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>Auto Scaling 그룹을 설정하여 자동 수평 확장/축소 구성</li>
        <li>온디맨드, 스팟, 예약 인스턴스를 혼합하여 유연성과 비용 최적화</li>
        <li>CPU, 메모리, 사용자 정의 메트릭 기반 탄력적 스케일링 정책 구성</li>
        <li>스케일 아웃/인 쿨다운 기간을 적절히 설정하여 안정성 확보</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Auto Scaling — 다중 서비스 통합 스케일링</li>
        <li>Amazon EC2 Auto Scaling — EC2 인스턴스 자동 확장/축소</li>
        <li>AWS Fargate — 서버리스 컨테이너 컴퓨팅</li>
        <li>Amazon ECS — 컨테이너 오케스트레이션 및 스케일링</li>
      </ul>
      <PageNav />
    </article>
  );
}
