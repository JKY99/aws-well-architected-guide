import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf2Bp03Page() {
  return (
    <article className="doc-content">
      <h1>PERF02-BP03 — 컴퓨팅 관련 메트릭 수집</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 보통</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 보통입니다.</p>
      </div>
      <p>컴퓨팅 리소스의 성능 메트릭을 지속적으로 수집하고 분석합니다. CPU 사용률, 메모리 사용률, 네트워크 처리량 등 핵심 지표를 추적하여 성능 문제를 조기에 감지합니다.</p>
      <h2>원하는 결과</h2>
      <p>컴퓨팅 성능 메트릭을 지속적으로 수집하여 리소스 활용 현황을 파악하고, 성능 최적화 및 비용 절감 기회를 식별합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>컴퓨팅 메트릭을 수집하지 않아 성능 문제 감지 늦음</li>
        <li>기본 CloudWatch 메트릭만 수집하고 상세 메트릭은 무시</li>
        <li>메트릭을 수집하지만 분석하거나 활용하지 않음</li>
        <li>메트릭 데이터를 단기간만 보존하여 트렌드 분석 불가</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>성능 문제 조기 감지 및 예방</li>
        <li>리소스 활용률 데이터 기반 적정 크기 조정</li>
        <li>오토스케일링 정책 최적화</li>
        <li>용량 계획 및 비용 최적화 지원</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>Amazon CloudWatch Agent를 설치하여 메모리, 디스크 등 상세 메트릭 수집</li>
        <li>EC2 세부 모니터링(1분 간격)을 활성화하여 더 빠른 이상 감지</li>
        <li>AWS X-Ray로 컴퓨팅 리소스 내 처리 시간 추적</li>
        <li>메트릭 임계값 기반 알람을 설정하여 성능 저하 즉시 감지</li>
        <li>성능 기준선(baseline)을 설정하고 이탈 시 알람 구성</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon CloudWatch — 메트릭 수집, 대시보드, 알람</li>
        <li>Amazon CloudWatch Agent — 상세 시스템 메트릭 수집</li>
        <li>AWS X-Ray — 애플리케이션 성능 추적</li>
        <li>AWS Compute Optimizer — 메트릭 기반 최적화 권고</li>
      </ul>
      <PageNav />
    </article>
  );
}
