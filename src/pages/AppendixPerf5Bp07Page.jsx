import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf5Bp07Page() {
  return (
    <article className="doc-content">
      <h1>PERF05-BP07 — 정기적인 메트릭 검토</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>정기적으로 성능 메트릭을 검토하여 트렌드를 파악하고, 성능 저하 징후를 조기에 감지하며, 지속적인 개선 기회를 식별합니다.</p>
      <h2>원하는 결과</h2>
      <p>정기적인 메트릭 검토를 통해 성능 문제를 조기에 발견하고, 장기적인 성능 트렌드를 파악하여 선제적으로 대응합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>장애나 성능 저하 발생 후에만 메트릭 검토</li>
        <li>메트릭 검토 없이 성능 개선이 이루어졌다고 가정</li>
        <li>너무 많은 메트릭으로 핵심 지표 식별 어려움</li>
        <li>메트릭 검토 결과를 개선 활동과 연결하지 않음</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>성능 문제 조기 감지 및 예방</li>
        <li>성능 트렌드 파악으로 용량 계획 개선</li>
        <li>지속적인 성능 개선 문화 정착</li>
        <li>SLA 준수 여부 지속적 모니터링</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>주간/월간 성능 검토 회의 정례화</li>
        <li>Amazon CloudWatch 대시보드로 핵심 성능 지표 시각화</li>
        <li>비즈니스 KPI와 기술 메트릭을 연계한 종합 대시보드 구성</li>
        <li>성능 기준선(baseline) 대비 편차 자동 감지 및 알람 설정</li>
        <li>메트릭 검토 결과를 팀과 공유하고 개선 활동 추적</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon CloudWatch — 메트릭 수집, 대시보드, 알람</li>
        <li>AWS X-Ray — 애플리케이션 성능 추적</li>
        <li>Amazon QuickSight — 비즈니스 인텔리전스 및 시각화</li>
        <li>AWS Compute Optimizer — 리소스 최적화 권고</li>
      </ul>
      <PageNav />
    </article>
  );
}
