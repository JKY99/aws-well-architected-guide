import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf3Bp03Page() {
  return (
    <article className="doc-content">
      <h1>PERF03-BP03 — 데이터 스토어 성능 메트릭 수집 및 기록</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>데이터 스토어의 성능 메트릭을 지속적으로 수집하고 기록합니다. 쿼리 응답 시간, 처리량, 연결 수, 캐시 적중률 등 핵심 지표를 추적하여 성능 문제를 조기에 감지합니다.</p>
      <h2>원하는 결과</h2>
      <p>데이터 스토어 성능 메트릭을 지속적으로 수집하고 기록하여 성능 추세를 파악하고 문제를 사전에 감지합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>데이터 스토어 성능 메트릭을 수집하지 않아 문제 감지 늦음</li>
        <li>장애 발생 후에만 성능 데이터 분석</li>
        <li>인프라 메트릭만 수집하고 쿼리 수준 성능은 무시</li>
        <li>메트릭 데이터를 단기간만 보존하여 트렌드 분석 불가</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>성능 문제 조기 감지 및 예방</li>
        <li>성능 기준선(baseline) 수립으로 이상 징후 파악</li>
        <li>용량 계획 및 스케일링 결정 지원</li>
        <li>성능 개선 효과를 객관적으로 측정</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>Amazon CloudWatch로 RDS/Aurora CPU, 메모리, I/O 메트릭 수집</li>
        <li>Amazon RDS Performance Insights로 쿼리 수준 성능 분석</li>
        <li>DynamoDB CloudWatch 메트릭으로 읽기/쓰기 처리량 및 지연 시간 모니터링</li>
        <li>ElastiCache 히트율, 지연 시간, 연결 수 등 모니터링</li>
        <li>메트릭 임계값 기반 알람을 설정하여 성능 저하 즉시 감지</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon CloudWatch — 메트릭 수집, 대시보드, 알람</li>
        <li>Amazon RDS Performance Insights — 쿼리 수준 성능 분석</li>
        <li>Amazon DevOps Guru — AI 기반 이상 감지</li>
        <li>AWS X-Ray — 데이터 스토어 호출 추적</li>
      </ul>
      <PageNav />
    </article>
  );
}
