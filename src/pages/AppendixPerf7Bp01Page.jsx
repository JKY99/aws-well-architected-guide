import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf7Bp01Page() {
  return (
    <article className="doc-content">
      <h1>PERF07-BP01 — 메트릭 기록</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>인프라, 애플리케이션, 비즈니스 레벨의 성능 메트릭을 체계적으로 수집하고 중앙에서 관리합니다.</p>
      <h2>원하는 결과</h2>
      <p>성능 분석과 트렌드 파악을 위한 포괄적인 메트릭 수집 체계를 구축합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>기본 메트릭만 수집</li>
        <li>커스텀 메트릭 없음</li>
        <li>메트릭 보존 기간 미설정</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>성능 가시성 확보</li>
        <li>트렌드 분석 가능</li>
        <li>이상 감지 기반 마련</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>CloudWatch Metrics로 커스텀 메트릭 발행</li>
        <li>EMF(Embedded Metrics Format) 활용</li>
        <li>메트릭 보존 정책 설정</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon CloudWatch Metrics</li>
        <li>AWS X-Ray</li>
        <li>Amazon CloudWatch Embedded Metrics Format</li>
      </ul>
      <PageNav />
    </article>
  );
}
