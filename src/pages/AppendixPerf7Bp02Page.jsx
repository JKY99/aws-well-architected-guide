import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf7Bp02Page() {
  return (
    <article className="doc-content">
      <h1>PERF07-BP02 — 성능 메트릭 분석</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>수집된 메트릭을 분석하여 성능 패턴, 병목 지점, 이상 징후를 식별하고 개선 기회를 발굴합니다.</p>
      <h2>원하는 결과</h2>
      <p>메트릭 분석을 통한 성능 병목과 개선 기회의 체계적 발견을 실현합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>메트릭 수집 후 분석 없음</li>
        <li>단일 지표에만 집중</li>
        <li>상관 관계 분석 없음</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>근본 원인 파악</li>
        <li>성능 개선 우선순위 결정</li>
        <li>용량 계획 지원</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>CloudWatch Insights로 로그 분석</li>
        <li>CloudWatch Anomaly Detection 활용</li>
        <li>Contributor Insights로 상위 기여 요인 파악</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon CloudWatch Insights</li>
        <li>CloudWatch Anomaly Detection</li>
        <li>Amazon CloudWatch Contributor Insights</li>
      </ul>
      <PageNav />
    </article>
  );
}
