import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf1Bp02Page() {
  return (
    <article className="doc-content">
      <h1>PERF01-BP02 — 참조 아키텍처 평가</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>AWS 참조 아키텍처, AWS Quick Starts, AWS Solutions Library를 활용하여 검증된 아키텍처 패턴을 적용합니다.</p>
      <h2>원하는 결과</h2>
      <p>검증된 참조 아키텍처를 활용하여 성능 최적화 기반을 구축합니다. 이미 검증된 패턴을 사용함으로써 불필요한 시행착오를 줄이고 신뢰할 수 있는 아키텍처를 빠르게 도입합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>검증되지 않은 아키텍처로 처음부터 시작</li>
        <li>유사 사례 및 참조 아키텍처 검토 없이 설계 진행</li>
        <li>커뮤니티 및 AWS 전문가의 경험을 활용하지 않음</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>구현 시간 단축으로 빠른 시장 출시</li>
        <li>검증된 베스트 프랙티스 적용으로 품질 향상</li>
        <li>아키텍처 위험 감소</li>
        <li>AWS 전문 지식을 바탕으로 한 신뢰성 확보</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS Solutions Library에서 워크로드 유형에 맞는 참조 아키텍처 검토</li>
        <li>AWS Quick Starts를 활용하여 검증된 배포 자동화 활용</li>
        <li>AWS Well-Architected Labs에서 실습 가이드 참조</li>
        <li>참조 아키텍처를 워크로드 특성에 맞게 조정</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Solutions Library — 검증된 솔루션 및 참조 아키텍처</li>
        <li>AWS Quick Starts — 자동화된 참조 배포</li>
        <li>AWS Well-Architected Tool — 아키텍처 평가 및 개선</li>
        <li>AWS Well-Architected Labs — 실습 기반 학습 리소스</li>
      </ul>
      <PageNav />
    </article>
  );
}
