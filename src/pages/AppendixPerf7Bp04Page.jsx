import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf7Bp04Page() {
  return (
    <article className="doc-content">
      <h1>PERF07-BP04 — AWS X-Ray를 사용한 분산 추적</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>AWS X-Ray를 사용하여 분산 시스템의 요청 흐름을 추적하고 성능 병목과 오류의 근본 원인을 빠르게 파악합니다.</p>
      <h2>원하는 결과</h2>
      <p>분산 시스템 전체에 걸친 요청 추적으로 성능 병목의 신속한 근본 원인 분석을 실현합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>개별 서비스 로그만 분석</li>
        <li>분산 추적 없음</li>
        <li>서비스 간 지연 시간 파악 불가</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>병목 지점 빠른 파악</li>
        <li>서비스 의존성 가시화</li>
        <li>오류 근본 원인 분석</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>X-Ray SDK 통합</li>
        <li>샘플링 규칙 설정</li>
        <li>CloudWatch Service Lens로 서비스 맵 시각화</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS X-Ray</li>
        <li>Amazon CloudWatch ServiceLens</li>
        <li>AWS Lambda (X-Ray 통합)</li>
      </ul>
      <PageNav />
    </article>
  );
}
